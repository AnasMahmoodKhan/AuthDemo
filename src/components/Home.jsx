import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="jumbotron container mt-4">
      <h1 className="display-3">AWS Amplify Demo</h1>
      <p className="lead">
        This is a an app demonstrating the use of Cognito functionality of
        Signup,Signin and Signout.
      </p>
      <hr className="my-4" />
      <div className="row">
        <div className="col-sm-6">
          <p>
            If you already have a registered account, login to access the
            services.
          </p>
          <p className="lead">
            <Link className="btn btn-primary btn-sm" to="/signin" role="button">
              Login
            </Link>
          </p>
        </div>
        <div className="col-sm-6">
          <p>Sign Up with a new account.</p>
          <p className="lead">
            <Link className="btn btn-primary btn-sm" to="/signup" role="button">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
