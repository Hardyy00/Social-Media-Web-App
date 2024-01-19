import { useState } from "react";
import "./Auth.css";

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [val, setValue] = useState(0);

  const buttonToggleHandler = () => {
    setIsSignUp((preSignUp) => !preSignUp);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <div className="auth_page">
      <h1>{isSignUp ? "Sign Up" : "Login"}</h1>
      <form onSubmit={formSubmitHandler}>
        {isSignUp && (
          <>
            <div className="row">
              <input type="text" placeholder="First Name" name="firstName" />
              <input type="text" placeholder="Last Name" name="lastName" />
            </div>

            <div className="row">
              <input type="text" placeholder="Username" name="username" />
            </div>

            <div className="row">
              <input type="password" placeholder="Password" name="password" />
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
              />
            </div>
          </>
        )}

        {!isSignUp && (
          <>
            <div className="row">
              <input type="text" placeholder="Username" name="username" />
            </div>
            <div className="row">
              <input type="password" placeholder="Password" name="password" />
            </div>
          </>
        )}

        <div className="submit_row">
          <div className="auth_btn" onClick={buttonToggleHandler}>
            {isSignUp ? "Login" : "SignUp"}
          </div>
          <button className="auth_btn">{isSignUp ? "Sign Up" : "Login"}</button>
        </div>
      </form>

      <div style={{ color: "white" }}> {val}</div>
    </div>
  );
}
