import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.min.js";
import { Provider } from "react-redux";
import Amplify from "aws-amplify";

import App from "./App";
import store from "./store/store";

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: "ap-south-1",
    userPoolId: "ap-south-1_Fb7sk8Ydp",
    userPoolWebClientId: "7kvbgd0ei9ta198mof0e4smv",
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
