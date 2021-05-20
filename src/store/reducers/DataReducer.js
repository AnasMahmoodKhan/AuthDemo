import {
  ADD_EMPLOYEE_DETAILS,
  ADD_EMPLOYEE_DETAILS_FAIL,
  DELETE_EMPLOYEES,
  DELETE_EMPLOYEES_FAIL,
  EVENT_PENDING,
  FETCH_DATA_PIE,
  FETCH_DATA_PIE_FAIL,
  FETCH_DATA_TABLE,
  FETCH_DATA_TABLE_FAIL,
  FETCH_EMPLOYEE_LIST,
  FETCH_EMPLOYEE_LIST_FAIL,
} from "../actions/types";
const initialState = {
  table_data: [],
  data_pie: [],
  employee_list: [],
  isLoading: false,
  employee_added: false,
  error: {},
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_TABLE:
      return {
        ...state,
        table_data: action.payload,
        isLoading: false,
      };
    case FETCH_DATA_TABLE_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: true,
      };
    case FETCH_DATA_PIE:
      return {
        ...state,
        data_pie: action.payload,
        isLoading: false,
      };
    case FETCH_DATA_PIE_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: true,
      };

    case FETCH_EMPLOYEE_LIST:
      return {
        ...state,
        employee_list: action.payload,
        isLoading: false,
      };
    case FETCH_EMPLOYEE_LIST_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: true,
      };

    case ADD_EMPLOYEE_DETAILS:
      return {
        ...state,
        isLoading: false,
        error: {},
        employee_added: true,
      };
    case ADD_EMPLOYEE_DETAILS_FAIL:
      return {
        ...state,
        error: action.error,
        employee_added: false,
        isLoading: false,
      };

    case DELETE_EMPLOYEES:
      return {
        ...state,
        isLoading: false,
        error: {},
      };
    case DELETE_EMPLOYEES_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case EVENT_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};

export default dataReducer;
