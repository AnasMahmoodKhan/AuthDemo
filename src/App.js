import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ConfirmSignUp from "./components/ConfirmSignUp";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/confirmsignup" component={ConfirmSignUp} />
        <Route path="/signin" component={Login} />

        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
