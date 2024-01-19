import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Auth from "./Pages/auth/Auth";
import Home from "./Pages/home/Home";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authActions } from "./store/authSlice";
// import Profile from "./Pages/profile/Profile";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.length > 0) {
      const state = {
        token: JSON.parse(localStorage.get("token")),
        authData: JSON.parse(localStorage.get("authData")),
        authenticating: false,
        error: null,
      };

      dispatch(authActions.setWholeState(state));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const user = useSelector((state) => state.auth.authData);
  const router = createBrowserRouter([
    {
      path: "/",
      element: user ? <Navigate to={"/home"} /> : <Auth />,
    },

    {
      path: "/home",
      element: user ? <Home /> : <Navigate to="/" />,
    },
  ]);
  return <RouterProvider router={router} />;
}

// <div className="app">
//   <div className="blur" style={{ top: "-18%", right: "0" }}></div>
//   <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
//   {/* <Home /> */}
//   <Profile />
// </div>
export default App;
