import { Auth } from "aws-amplify";
import {
  CHECK_AUTHENTICATED_USER,
  CHECK_USER_FAIL,
  CONFIRM_CODE_FAILURE,
  CONFIRM_CODE_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  FORGOT_PASSWORD_CODE,
  FORGOT_PASSWORD_CODE_FAIL,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAIL,
  EVENT_PENDING,
} from "./types";

export const signup = (data) => {
  return async (dispatch) => {
    dispatch({ type: EVENT_PENDING });
    const { username, password, email } = data;

    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: user,
      });
    } catch (error) {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: error,
      });
    }
  };
};

export const login = (data) => {
  return async (dispatch) => {
    dispatch({ type: EVENT_PENDING });

    try {
      const { username, password } = data;
      const response = await Auth.signIn(username, password);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: error,
      });
    }
  };
};

export const confirmcode = (data) => {
  return async (dispatch) => {
    dispatch({ type: EVENT_PENDING });
    try {
      const { username, code } = data;
      await Auth.confirmSignUp(username, code);
      dispatch({
        type: CONFIRM_CODE_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: CONFIRM_CODE_FAILURE,
        payload: error,
      });
    }
  };
};

export const check_authenticated_user = async (dispatch) => {
  try {
    const response = await Auth.currentAuthenticatedUser();
    dispatch({
      type: CHECK_AUTHENTICATED_USER,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: CHECK_USER_FAIL,
      payload: error,
    });
  }
};

export const signout = async (dispatch) => {
  try {
    await Auth.signOut();
    dispatch({
      type: SIGN_OUT_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: SIGN_OUT_FAILURE,
      payload: error,
    });
  }
};

export const forgotPassword = (username) => {
  return async (dispatch) => {
    dispatch({ type: EVENT_PENDING });
    try {
      await Auth.forgotPassword(username);
      dispatch({
        type: FORGOT_PASSWORD_CODE,
        payload: username,
      });
    } catch (error) {
      dispatch({
        type: FORGOT_PASSWORD_CODE_FAIL,
        payload: error,
      });
    }
  };
};

export const changePassword = (data) => {
  return async (dispatch) => {
    dispatch({ type: EVENT_PENDING });
    const { username, code, new_password } = data;
    try {
      const response = await Auth.forgotPasswordSubmit(
        username,
        code,
        new_password
      );
      dispatch({
        type: CHANGE_PASSWORD_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: CHANGE_PASSWORD_FAIL,
        payload: error,
      });
    }
  };
};
