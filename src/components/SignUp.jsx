import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { signup } from "../store/actions/AuthAction";
import { useHistory } from "react-router-dom";

import _ from "lodash";

const SignUp = ({ handleSignUp, auth: { user, error } }) => {
  const history = useHistory();

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

    if (fields.confirmpassword !== fields.password) {
      fieldsError.confirmpassword = "Password do not match";
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
      handleSignUp(fields);
    }
  };

  useEffect(() => {
    if (!_.isEmpty(user)) {
      localStorage.setItem("user_signing_up", JSON.stringify(user.username));
      history.push("./confirmsignup");
    }
  }, [user]);

  return (
    <section>
      <div className="row">
        <div className="col-sm-2 col-md-3" />
        <div className="col-sm-8 col-md-6">
          <div className="container">
            <h1>Sign Up</h1>
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
                type="email"
                id="email"
                placeholder="Enter email"
                value={fields.email}
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
              <input
                className="form-control m-2"
                type="password"
                id="confirmpassword"
                placeholder="Confirm password"
                value={fields.confirmpassword}
                onChange={onInputChange}
              />

              <button className="btn btn-success btn-sm m-2">Sign Up</button>
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
    handleSignUp: (data) => signup(data, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
