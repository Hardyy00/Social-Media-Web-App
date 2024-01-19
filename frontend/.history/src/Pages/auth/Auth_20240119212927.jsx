import { useState } from "react";
import "./Auth.css";

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [confirmState, setConfirmState] = useState(true);

  const buttonToggleHandler = () => {
    setIsSignUp((preSignUp) => !preSignUp);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (confirmState == false) {
      setConfirmState(true);
    }

    const data = new FormData(event.target);
    const formData = Object.fromEntries(data.entries());

    if (isSignUp && formData.password !== formData.confirmPassword) {
      setConfirmState(false);
      return;
    }
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
            {!confirmState && (
              <span
                style={{
                  color: "red",
                  fontWeight: "bold",
                  alignSelf: "flex-end",
                  marginRight: "30px",
                }}
              >
                *Passwords are not same
              </span>
            )}
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
    </div>
  );
}
