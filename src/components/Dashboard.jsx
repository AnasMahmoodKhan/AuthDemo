import React from "react";

const Dashboard = ({ username }) => {
  return (
    <div className="jumbotron container mt-4">
      <h1 className="display-3">AWS Amplify Demo</h1>
      <p className="lead">
        This is a an app demonstrating the use of Cognito functionality of
        Signup,Signin and Signout.
      </p>
      <hr className="my-4" />
      <div className="row">
        <div className="col">
          {" "}
          User Logged In :<strong> {username}</strong>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
