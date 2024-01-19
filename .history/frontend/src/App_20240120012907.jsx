import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Auth from "./Pages/auth/Auth";
import Home from "./Pages/home/Home";
import { useSelector } from "react-redux";
// import Profile from "./Pages/profile/Profile";

function App() {
  const user = useSelector((state) => state.auth.authData);
  const router = createBrowserRouter([
    {
      path: "/",
      element: user ? <Home /> : <Auth />,
    },

    {},
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
