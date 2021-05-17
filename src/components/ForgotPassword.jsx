import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../store/actions/AuthAction";

import { useHistory } from "react-router-dom";

const ForgotPassword = () => {
  const history = useHistory();

  const state = useSelector((state) => state.auth);
  const { error } = state;
  const dispatch = useDispatch();

  const [fields, setFields] = useState({
    username: "",
  });
  const [fieldsError, setFieldsError] = useState({
    username: "",
  });

  useEffect(() => {
    dispatch({ type: "RESET_ERROR" });
  }, [dispatch]);
  const onInputChange = ({ target: { id, value } }) => {
    setFields({
      ...fields,
      [id]: value.trim(),
    });
  };

  const validateForm = () => {
    let isValid = true;
    let fieldsError = { username: "" };

    if (fields.username === "") {
      fieldsError.username = "Please enter valid username";
      isValid = false;
    }

    setFieldsError(fieldsError);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(forgotPassword(fields.username));
      history.push("./resetpassword");
    }
  };

  return (
    <section className="mt-4">
      <div className="row mt-4">
        <div className="col-sm-2 col-md-3" />
        <div className="col-sm-8 col-md-6">
          <div className="container">
            <h1>Confirm Username</h1>
            <p>We will send a confirmation code on your email.</p>
            {error && (
              <small className="text-danger ml-2">{error.message}</small>
            )}
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

              <button className="btn btn-primary btn-sm m-2">Confirm</button>
            </form>
          </div>
        </div>
        <div className="col-sm-2 col-md-3" />
      </div>
    </section>
  );
};

export default ForgotPassword;
