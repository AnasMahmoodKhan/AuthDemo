import { EVENT_PENDING, FETCH_DATA_TABLE } from "../actions/types";
const initialState = {
  table_data: [],
  isLoading: false,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_TABLE:
      return {
        ...state,
        table_data: action.payload,
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
