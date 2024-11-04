import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const SignUp = () => {
  return (
    <div className="login-container">
      <div className="login-div">
        <h2>Sign up</h2>
        <form>
          <label for="name">Your full name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name!"
          />
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
            Sign up
          </button>
        </form>
        <div className="sign-up-by-login">
          <p>Already have an account?</p>
          <Link to="/login">
            <button type="button" className="signup">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
