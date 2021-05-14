import {
  CHANGE_PASSWORD_FAIL,
  CHANGE_PASSWORD_SUCCESS,
  CHECK_AUTHENTICATED_USER,
  CHECK_USER_FAIL,
  CONFIRM_CODE_FAILURE,
  CONFIRM_CODE_SUCCESS,
  FORGOT_PASSWORD_CODE,
  FORGOT_PASSWORD_CODE_FAIL,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_OUT_SUCCESS,
} from "../actions/types";

const initialState = {
  user: {},
  error: {},
  isAuthenticated: false,
  current_user: "",
  change_password: false,
  username_for_password_change: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: {},
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: {},
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case CONFIRM_CODE_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        error: {},
      };
    case CONFIRM_CODE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isAuthenticated: false,
      };

    case CHECK_AUTHENTICATED_USER:
      return {
        ...state,
        user: action.payload,
        current_user: action.payload,
        isAuthenticated: true,
      };

    case CHECK_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        current_user: {},
        user: {},
        isAuthenticated: false,
        error: {},
      };
    case SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case FORGOT_PASSWORD_CODE:
      return {
        ...state,
        change_password: true,
        username_for_password_change: action.payload,
        error: {},
      };

    case FORGOT_PASSWORD_CODE_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        change_password: false,
        username_for_password_change: "",
        error: {},
      };

    case CHANGE_PASSWORD_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case "RESET_ERROR":
      return {
        ...state,
        error: {},
      };

    default:
      return state;
  }
};

export default authReducer;
