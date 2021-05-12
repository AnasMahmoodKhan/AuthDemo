import { Auth } from "aws-amplify";
import {
  CONFIRM_CODE_FAILURE,
  CONFIRM_CODE_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
} from "./types";

export const signup = async (data, dispatch) => {
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

export const login = async (data, dispatch) => {
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

export const confirmcode = async (data, dispatch) => {
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
