import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../store/actions/AuthAction";
import { useHistory } from "react-router-dom";

import _ from "lodash";
import SpinnerLoading from "../helpers/Spinner";

const SignUp = () => {
  const history = useHistory();
  const state = useSelector((state) => state.auth);
  const { user, error, isLoading } = state;
  const dispatch = useDispatch();

  const [fields, setFields] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [fieldsError, setFieldsError] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const onInputChange = ({ target: { id, value } }) => {
    setFields({
      ...fields,
      [id]: value.trim(),
    });
  };

  const validateForm = () => {
    let isValid = true;
    let fieldsError = {};
    if (fields.username === "") {
      fieldsError.username = "Please enter valid Username";
      isValid = false;
    }

    if (fields.email === "") {
      fieldsError.email = "Please enter valid Email";
      isValid = false;
    }

    if (fields.password === "") {
      fieldsError.password = "Please enter valid Password";
      isValid = false;
    }

    if (
      fields.confirmpassword !== fields.password ||
      fields.confirmpassword === ""
    ) {
      fieldsError.confirmpassword = "Password do not match";
      isValid = false;
    }
    setFieldsError(fieldsError);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(signup(fields));
    }
  };

  useEffect(() => {
    if (!_.isEmpty(user)) {
      localStorage.setItem("user_signing_up", JSON.stringify(user.username));
      history.push("./confirmsignup");
    }
  }, [history, user]);

  return (
    <section>
      <div className="row">
        <div className="col-sm-2 col-md-3" />
        <div className="col-sm-8 col-md-6">
          <div className="container">
            <h1>Sign Up</h1>
            {isLoading && <SpinnerLoading />}
            {error ? (
              <small className="text-danger ml-2">{error.message}</small>
            ) : null}
            <form onSubmit={handleSubmit}>
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
                  fieldsError.email ? "is-invalid" : ""
                }`}
                type="email"
                id="email"
                placeholder="Enter email"
                value={fields.email}
                onChange={onInputChange}
              />
              {fieldsError.email && (
                <div className="invalid-feedback ml-2">{fieldsError.email}</div>
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
              <input
                className={`form-control m-2 ${
                  fieldsError.confirmpassword ? "is-invalid" : ""
                }`}
                type="password"
                id="confirmpassword"
                placeholder="Confirm password"
                value={fields.confirmpassword}
                onChange={onInputChange}
              />
              {fieldsError.confirmpassword && (
                <div className="invalid-feedback ml-2">
                  {fieldsError.confirmpassword}
                </div>
              )}

              <button className="btn btn-success btn-sm m-2">Sign Up</button>
            </form>
          </div>
        </div>
        <div className="col-sm-2 col-md-3" />
      </div>
    </section>
  );
};

export default SignUp;
