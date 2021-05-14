import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import ConfirmSignUp from "./components/ConfirmSignUp";
import ForgotPassword from "./components/ForgotPassword";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import PasswordReset from "./components/PasswordReset";
import SignUp from "./components/SignUp";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <PrivateRoute
          restricted={false}
          component={SignUp}
          path="/signup"
          exact
        />
        <PrivateRoute
          restricted={true}
          component={ForgotPassword}
          path="/forgotpassword"
          exact
        />
        <PrivateRoute
          restricted={true}
          component={PasswordReset}
          path="/resetpassword"
          exact
        />
        <PrivateRoute
          restricted={true}
          component={ConfirmSignUp}
          path="/confirmsignup"
          exact
        />
        <PrivateRoute
          restricted={false}
          component={Login}
          path="/signin"
          exact
        />
        <PublicRoute component={Home} path="/" exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
