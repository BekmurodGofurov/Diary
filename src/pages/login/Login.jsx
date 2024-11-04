import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-div">
        <h2>Login</h2>
        <form>
          <label for="email">Your email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email!"
          />
          <label for="password">Your password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter you password"
          ></input>
          <button type="submit" className="login">
            Login
          </button>
        </form>
        <div className="sign-up-by-login">
          <p>Want to create an account?</p>
          <Link to="/signup">
            <button type="button" className="signup">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
