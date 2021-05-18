import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import SpinnerLoading from "../helpers/Spinner";
import { confirmcode } from "../store/actions/AuthAction";

const ConfirmSignUp = () => {
  const history = useHistory();
  const state = useSelector((state) => state.auth);
  const { isAuthenticated, error, isLoading } = state;
  const dispatch = useDispatch();

  const [code, setCode] = useState("");
  const [fieldsError, setFieldsError] = useState({
    code: "",
  });

  const onInputChange = (e) => {
    setCode(e.target.value);
  };

  const validateForm = () => {
    let isValid = true;
    let fieldsError = {};

    if (code === "" || code.length !== 6) {
      fieldsError.username = "Please enter valid 6 digit confirmation code";
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
      const username = JSON.parse(localStorage.getItem("user_signing_up"));
      const data = { username, code };

      dispatch(confirmcode(data));
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      localStorage.removeItem("user_signing_up");
      history.push("./signin");
    }
  }, [history, isAuthenticated]);

  return (
    <div className="row mt-4 container">
      <div className="col-sm-2 col-md-3"></div>
      <div className="col-sm-8 col-md-6">
        <h4>Check your Email</h4>
        <p>We have sent a six digit confirmation code</p>
        {isLoading && <SpinnerLoading />}
        {error ? (
          <small className="text-danger ml-2">{error.message}</small>
        ) : null}
        <div className="mt-3">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="code"
              className="form-control"
              value={code}
              onChange={onInputChange}
              placeholder="Enter Confirmation Code"
            />

            {fieldsError.code && (
              <div className="invalid-feedback ml-2">{fieldsError.code}</div>
            )}
            <button className="btn btn-primary btn-sm m-2">Confirm</button>
          </form>
        </div>
      </div>
      <div className="col-sm-2 col-md-3"></div>
    </div>
  );
};

export default ConfirmSignUp;
