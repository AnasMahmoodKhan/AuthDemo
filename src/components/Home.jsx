import React from "react";
import { useSelector } from "react-redux";

import Dashboard from "./Dashboard";
const Home = () => {
  const state = useSelector((state) => state.auth);
  const { isAuthenticated, user } = state;

  return isAuthenticated ? (
    <Dashboard username={user.username} />
  ) : (
    <div className="jumbotron container mt-4">
      <h1 className="display-3">AWS Amplify Demo</h1>
      <h5>Fastest, easiest way to build mobile and web apps that scale</h5>
      <p className="lead">
        This is a an app demonstrating the use of Cognito functionality of
        Signup,Signin and Signout.
      </p>
      <hr className="my-4" />
      <div className="row">
        <div className="col-sm-4">
          <img
            className="img-fluid"
            src="https://docs.amplify.aws/assets/ogp.jpg"
            alt="amplify"
          />
        </div>
        <div className="col-sm-8">
          <p>
            <strong>AWS Amplify</strong> is a set of tools and services that can
            be used together or on their own, to help front-end web and mobile
            developers build scalable full stack applications, powered by AWS.
            With Amplify, you can configure app backends and connect your app in
            minutes, deploy static web apps in a few clicks, and easily manage
            app content outside the AWS console. Amplify supports popular web
            frameworks including JavaScript, React, Angular, Vue, Next.js, and
            mobile platforms including Android, iOS, React Native, Ionic,
            Flutter. Get to market faster with <strong>AWS Amplify</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
