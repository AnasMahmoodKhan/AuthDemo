import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../components/Home";
import SignUp from "../components/SignUp";
import ForgotPassword from "../components/ForgotPassword";
import PasswordReset from "../components/PasswordReset";
import ConfirmSignUp from "../components/ConfirmSignUp";
import Login from "../components/Login";
import { AppliedRoute } from "./AppliedRoute";
import Dashboard from "../components/Dashboard";
import { useSelector } from "react-redux";
import Tables from "../components/Tables";
import Employees from "../components/Employees";

const Routes = ({ childProps }) => {
  const state = useSelector((state) => state.auth);
  const { isAuthenticated } = state;
  return (
    <Switch>
      <AppliedRoute exact path="/" component={Home} props={childProps} />
      <Route component={PasswordReset} path="/resetpassword" exact />
      <Route component={ForgotPassword} path="/forgotpassword" exact />
      <Route component={Login} path="/signin" exact />
      <Route component={ConfirmSignUp} path="/confirmsignup" exact />
      <Route component={SignUp} path="/signup" exact />
      <Route component={Tables} path="/report" />
      <Route component={Employees} path="/employees" />
      {isAuthenticated ? (
        <>
          <Route component={Dashboard} path="/dashboard" exact />
        </>
      ) : (
        <Redirect to="/signin" exact />
      )}
    </Switch>
  );
};

export default Routes;
