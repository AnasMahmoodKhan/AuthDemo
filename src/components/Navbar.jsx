import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

const Navbar = () => {
  const [loggedIn, setloggedIn] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user_logged_in"));
    if (!_.isEmpty(user)) {
      setloggedIn(true);
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg p-2 navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Cognito_Demo
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        {!loggedIn ? (
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/signin">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Sign Up
              </Link>
            </li>
          </ul>
        ):(
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/signout">
                Signout
              </Link>
            </li>
            
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
