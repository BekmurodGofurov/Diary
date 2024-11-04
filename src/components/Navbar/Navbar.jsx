import './Navbar.css'
import React from "react";
import { Link } from "react-router-dom";
const Navbar = ()=>{
    return (
      <div className="navbar-container">
        <div className="container">
          <h3>Diary</h3>
          <div className="gruop-btn">
            <Link to="/login">
                <button>Login</button>
            </Link>
            <Link to="signup">
                <button>Sugn up</button>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Navbar