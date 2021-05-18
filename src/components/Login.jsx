import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import _ from "lodash";
import { login } from "../store/actions/AuthAction";
import { Link, useHistory } from "react-router-dom";
import SpinnerLoading from "../helpers/Spinner";

const SignIn = () => {
  const history = useHistory();

  const [fields, setFields] = useState({
    username: "",
    password: "",
  });
  const [fieldsError, setFieldsError] = useState({
    username: "",
    password: "",
  });

  const state = useSelector((state) => state.auth);
  const { isAuthenticated, user, error, isLoading } = state;
  const dispatch = useDispatch();

  const onInputChange = ({ target: { id, value } }) => {
    setFields({
      ...fields,
      [id]: value.trim(),
    });
  };

  const validateForm = () => {
    let isValid = true;
    let fieldsError = { username: "", password: "" };

    if (fields.username === "") {
      fieldsError.username = "Please enter valid username";
      isValid = false;
    }

    if (fields.password === "") {
      fieldsError.password = "Please enter valid Password";
      isValid = false;
    }

    setFieldsError(fieldsError);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(login(fields));
    }
  };

  useEffect(() => {
    if (!_.isEmpty(user) && isAuthenticated) {
      localStorage.setItem("user_logged_in", JSON.stringify(user.username));
      history.push("/dashboard");
    }
  }, [history, isAuthenticated, user]);

  return (
    <section>
      <div className="row mt-4">
        <div className="col-sm-2 col-md-3" />
        <div className="col-sm-8 col-md-6">
          <div className="container">
            <h1>Login</h1>
            {isLoading && <SpinnerLoading />}
            <form onSubmit={handleSubmit}>
              {error ? (
                <small className="text-danger ml-2">{error.message}</small>
              ) : null}
              <input
                className={`form-control m-2 ${
                  fieldsError.username ? "is-invalid" : ""
                }`}
                type="text"
                id="username"
                placeholder="Enter username"
                value={fields.username}
                onChange={onInputChange}
              />
              {fieldsError.username && (
                <div className="invalid-feedback ml-2">
                  {fieldsError.username}
                </div>
              )}
              <input
                className={`form-control m-2 ${
                  fieldsError.password ? "is-invalid" : ""
                }`}
                type="password"
                id="password"
                placeholder="Password"
                value={fields.password}
                onChange={onInputChange}
              />
              {fieldsError.password && (
                <div className="invalid-feedback ml-2">
                  {fieldsError.password}
                </div>
              )}
              <div className="text-right">
                <Link to="/forgotpassword">Forgot Password?</Link>
              </div>
              <button className="btn btn-success btn-sm m-2">Login</button>
            </form>
          </div>
        </div>
        <div className="col-sm-2 col-md-3" />
      </div>
    </section>
  );
};

export default SignIn;
