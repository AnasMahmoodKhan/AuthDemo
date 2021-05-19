import { data_Table } from "../../helpers/TableDataReport";
import { EVENT_PENDING, FETCH_DATA_TABLE } from "./types";

export const fetch_data_table = (dispatch) => {
  dispatch({
    type: EVENT_PENDING,
  });
  dispatch({
    type: FETCH_DATA_TABLE,
    payload: data_Table,
  });
};
