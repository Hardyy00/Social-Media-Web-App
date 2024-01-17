import { useState } from "react";
import "./Auth.css";

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(true);

  const buttonToggleHandler = () => {
    setIsSignUp((preSignUp) => !preSignUp);
  };

  const formSubmitHandler = (e) => {
    event.preventDefault();
  };
  return (
    <div className="auth_page">
      <h1>{isSignUp ? "Sign Up" : "Login"}</h1>
      <form action="" onSubmit={formSubmitHandler}>
        <div className="row">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>

        <div className="row">
          <input type="text" placeholder="Username" />
        </div>

        <div className="row">
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
        </div>

        <div className="submit">
          <button className="auth_btn" onClick={buttonToggleHandler}>
            Login
          </button>
          <button className="auth_btn" onClick={buttonToggleHandler}>
            {" "}
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
