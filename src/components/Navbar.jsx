import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { check_authenticated_user, signout } from "../store/actions/AuthAction";

const Navbar = () => {
  const history = useHistory();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(check_authenticated_user);
  }, [dispatch]);

  const handleSignOut = (e) => {
    dispatch(signout);
    history.push("./signin");
  };

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
        {!isAuthenticated ? (
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
        ) : (
          <ul className="navbar-nav">
            <li className="nav-item">
              <span className="nav-link" onClick={handleSignOut}>
                Signout
              </span>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
