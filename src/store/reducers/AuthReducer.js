import {
  CONFIRM_CODE_FAILURE,
  CONFIRM_CODE_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
} from "../actions/types";

const initialState = {
  user: {},
  error: {},
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
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
      };
    case CONFIRM_CODE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
