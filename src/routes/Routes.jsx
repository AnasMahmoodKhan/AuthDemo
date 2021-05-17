import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../components/Home";
import SignUp from "../components/SignUp";
import ForgotPassword from "../components/ForgotPassword";
import PasswordReset from "../components/PasswordReset";
import ConfirmSignUp from "../components/ConfirmSignUp";
import Login from "../components/Login";
import { AppliedRoute } from "./AppliedRoute";

const Routes = ({ childProps }) => {
  return (
    <Switch>
      <AppliedRoute exact path="/" component={Home} props={childProps} />
      <Route component={SignUp} path="/signup" exact />
      <Route component={ForgotPassword} path="/forgotpassword" exact />
      <Route component={PasswordReset} path="/resetpassword" exact />
      <Route component={ConfirmSignUp} path="/confirmsignup" exact />
      <Route component={Login} path="/signin" exact />
    </Switch>
  );
};

export default Routes;
