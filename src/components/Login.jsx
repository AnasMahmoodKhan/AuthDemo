import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import _ from "lodash";
import { login } from "../store/actions/AuthAction";

const SignIn = ({ handleLogin, auth: { isAuthenticated } }) => {
  const [fields, setFields] = useState({
    username: "",
    password: "",
  });
  const [fieldsError, setFieldsError] = useState({
    username: "",
    password: "",
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
      fieldsError.username = "Please enter valid username";
      isValid = false;
    }

    if (fields.password === "") {
      fieldsError.password = "Please enter valid Password";
      isValid = false;
    }

    if (!isValid) {
      setFieldsError(fieldsError);
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(fields);
      handleLogin(fields);
    }
  };

  //   useEffect(() => {
  //     if (!_.isEmpty(user)) {
  //       localStorage.setItem("user_signing_up", JSON.stringify(user.username));
  //       console.log(user);
  //     }
  //   }, [user]);

  return (
    <section className="mt-4">
      <div className="row mt-4">
        <div className="col-sm-2 col-md-3" />
        <div className="col-sm-8 col-md-6">
          <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <input
                className="form-control m-2"
                type="text"
                id="username"
                placeholder="Enter username"
                value={fields.username}
                onChange={onInputChange}
              />
              <input
                className="form-control m-2"
                type="password"
                id="password"
                placeholder="Password"
                value={fields.password}
                onChange={onInputChange}
              />
              <button className="btn btn-success btn-sm m-2">Login</button>
            </form>
          </div>
        </div>
        <div className="col-sm-2 col-md-3" />
      </div>
    </section>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (data) => login(data, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
