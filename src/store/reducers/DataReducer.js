import {
  EVENT_PENDING,
  FETCH_DATA_PIE,
  FETCH_DATA_PIE_FAIL,
  FETCH_DATA_TABLE,
  FETCH_DATA_TABLE_FAIL,
} from "../actions/types";
const initialState = {
  table_data: [],
  data_pie: [],
  isLoading: false,
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
