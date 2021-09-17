import {
  CHANGE_PASSWORD_FAIL,
  CHANGE_PASSWORD_SUCCESS,
  CHECK_AUTHENTICATED_USER,
  CHECK_USER_FAIL,
  CONFIRM_CODE_FAILURE,
  CONFIRM_CODE_SUCCESS,
  EVENT_PENDING,
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
  isLoading: true,
  isAuthenticated: false,
  current_user: "",
  change_password: false,
  username_for_password_change: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case EVENT_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: {},
        isLoading: false,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: {},
        isLoading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case CONFIRM_CODE_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        error: {},
        isLoading: false,
      };
    case CONFIRM_CODE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isAuthenticated: false,
        isLoading: false,
      };

    case CHECK_AUTHENTICATED_USER:
      return {
        ...state,
        user: action.payload,
        current_user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };

    case CHECK_USER_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        current_user: {},
        user: {},
        isAuthenticated: false,
        error: {},
        isLoading: false,
      };
    case SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    case FORGOT_PASSWORD_CODE:
      return {
        ...state,
        change_password: true,
        username_for_password_change: action.payload,
        error: {},
        isLoading: false,
      };

    case FORGOT_PASSWORD_CODE_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        change_password: false,
        username_for_password_change: "",
        error: {},
        isLoading: false,
      };

    case CHANGE_PASSWORD_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
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
