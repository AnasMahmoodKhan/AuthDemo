import Api from "../api/Api";
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
} from "./types";

export const fetch_data_table = async (dispatch) => {
  dispatch({
    type: EVENT_PENDING,
  });

  try {
    const response = await Api.fetch("fetchtabledata");

    dispatch({
      type: FETCH_DATA_TABLE,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_DATA_TABLE_FAIL,
      error: error,
    });
  }
};

export const fetch_data_pie = (month) => {
  return async (dispatch) => {
    dispatch({
      type: EVENT_PENDING,
    });

    try {
      const response = await Api.fetch(`fetchpiedata?month=${month}`);
      let dataPie = {
        labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "# of Users Active",
            data: response.data[0].data,
            fill: false,
            backgroundColor: [
              "#83ce83",
              "#959595",
              "#f96a5d",
              "#00A6B4",
              "#6800B4",
              "#5000B4",
              "#f000f4",
            ],
            borderColor: "#fff",
          },
        ],
      };
      dispatch({
        type: FETCH_DATA_PIE,
        payload: dataPie,
      });
    } catch (error) {
      dispatch({
        type: FETCH_DATA_PIE_FAIL,
        error: error,
      });
    }
  };
};

export const fetch_employee_list = async (dispatch) => {
  dispatch({
    type: EVENT_PENDING,
  });

  try {
    const response = await Api.fetch("fetchemployees");

    dispatch({
      type: FETCH_EMPLOYEE_LIST,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_EMPLOYEE_LIST_FAIL,
      error: error,
    });
  }
};

export const add_employee_details = (data) => {
  return async (dispatch) => {
    dispatch({
      type: EVENT_PENDING,
    });

    try {
      await Api.post("addemployee", data);

      dispatch({
        type: ADD_EMPLOYEE_DETAILS,
      });
    } catch (error) {
      dispatch({
        type: ADD_EMPLOYEE_DETAILS_FAIL,
        error: error,
      });
    }
  };
};

export const delete_employees = (data) => {
  return async (dispatch) => {
    dispatch({
      type: EVENT_PENDING,
    });

    try {
      await Api.delete("deleteEmployee", data);

      dispatch({
        type: DELETE_EMPLOYEES,
      });
    } catch (error) {
      dispatch({
        type: DELETE_EMPLOYEES_FAIL,
        error: error,
      });
    }
  };
};
