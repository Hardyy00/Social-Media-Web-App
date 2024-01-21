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
import Profile from "./Pages/profile/Profile";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.length > 0) {
      const token = JSON.parse(localStorage.getItem("token"));
      const authData = JSON.parse(localStorage.getItem("authData"));

      dispatch(authActions.authUser({ authData }));
      dispatch(authActions.setToken({ token }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const user = useSelector((state) => {
    return state.auth.authData;
  });

  const fetchPosts = async () => {
    const posts = await fetch(`http://localhost:8080/${user._id}/timeline`);

    const resData = await posts.json();

    return resData;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    if (user) {
      const posts = await fetchPosts();

      console.log(posts);
    }
  }, [user]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: user ? <Navigate to={"/home"} /> : <Auth />,
    },

    {
      path: "/home",
      element: user ? <Home /> : <Navigate to="/" />,
    },

    {
      path: "/home/profile",
      element: user ? <Profile /> : <Navigate to="/" />,
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
