import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Auth from "./Pages/auth/Auth";
// import Home from "./Pages/home/Home";
// import Profile from "./Pages/profile/Profile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
    },
  ]);
  return (
    <>
      <Auth />
    </>
  );
}

// <div className="app">
//   <div className="blur" style={{ top: "-18%", right: "0" }}></div>
//   <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
//   {/* <Home /> */}
//   <Profile />
// </div>
export default App;
