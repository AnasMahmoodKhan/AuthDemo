import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { changePassword } from "../store/actions/AuthAction";

const PasswordReset = () => {
  const history = useHistory();

  const state = useSelector((state) => state.auth);
  const { error, username_for_password_change } = state;
  const dispatch = useDispatch();

  const [fields, setFields] = useState({
    code: "",
    password: "",
    confirmpassword: "",
  });
  const [fieldsError, setFieldsError] = useState({
    code: "",
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
    let fieldsError = { code: "", password: "", confirmpassword: "" };

    if (fields.code === "" || fields.code.length !== 6) {
      fieldsError.code = "Please enter valid 6 digit verification code";
      isValid = false;
    }

    let reg = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$"
    );
    if (reg.test(fields.password) || fields.password === "") {
      fieldsError.password = "Enter a valid password";
      isValid = false;
    }
    if (
      fields.password !== fields.confirmpassword ||
      fields.confirmpassword === ""
    ) {
      fieldsError.confirmpassword = "Entered password do not match.";
      isValid = false;
    }
    setFieldsError(fieldsError);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const data = {
        username: username_for_password_change,
        code: fields.code,
        new_password: fields.password,
      };
      dispatch(changePassword(data));
      if (username_for_password_change === "") {
        history.push("./signin");
      }
    }
  };

  return (
    <section className="mt-4">
      <div className="row mt-4">
        <div className="col-sm-2 col-md-3" />
        <div className="col-sm-8 col-md-6">
          <div className="container">
            <h1>Change Password</h1>

            {error && (
              <small className="text-danger ml-2">{error.message}</small>
            )}
            <form onSubmit={handleSubmit}>
              <input
                className={`form-control m-2 ${
                  fieldsError.code ? "is-invalid" : ""
                }`}
                type="text"
                id="code"
                placeholder="Enter verification code"
                value={fields.code}
                onChange={onInputChange}
              />
              {fieldsError.code && (
                <div className="invalid-feedback ml-2">{fieldsError.code}</div>
              )}

              <input
                className={`form-control m-2 ${
                  fieldsError.password ? "is-invalid" : ""
                }`}
                type="text"
                id="password"
                placeholder="Enter new password"
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
                type="text"
                id="confirmpassword"
                placeholder="Confirm Password"
                value={fields.confirmpassword}
                onChange={onInputChange}
              />
              {fieldsError.confirmpassword && (
                <div className="invalid-feedback ml-2">
                  {fieldsError.confirmpassword}
                </div>
              )}

              <button className="btn btn-primary btn-sm m-2">
                Confirm Changes
              </button>
            </form>
          </div>
        </div>
        <div className="col-sm-2 col-md-3" />
      </div>
    </section>
  );
};

export default PasswordReset;
