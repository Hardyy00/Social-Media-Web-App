import "./Auth.css";

export default function Auth() {
  const [isSignUp,setIsSignUp]  
  return (
    <div className="auth_page">
      <h1>Sign Up</h1>
      <form action="" method="post">
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
          <button className="auth_btn">Login</button>
          <button className="auth_btn">Submit</button>
        </div>
      </form>
    </div>
  );
}
