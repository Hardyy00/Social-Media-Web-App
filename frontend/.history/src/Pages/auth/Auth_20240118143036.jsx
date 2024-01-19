import { useState } from "react";
import "./Auth.css";

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(true);

  const buttonToggleHandler = () => {
    setIsSignUp((preSignUp) => !preSignUp);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="auth_page">
      <h1>{isSignUp ? "Sign Up" : "Login"}</h1>
      <form action="" onSubmit={formSubmitHandler} on>
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
          <button className="auth_btn" onClick={buttonToggleHandler}>
            {isSignUp ? "Login" : "SignUp"}
          </button>
          <button type="submit" className="auth_btn">
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
}
