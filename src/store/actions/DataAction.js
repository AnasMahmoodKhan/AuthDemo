import Api from "../api/Api";
import {
  EVENT_PENDING,
  FETCH_DATA_PIE,
  FETCH_DATA_PIE_FAIL,
  FETCH_DATA_TABLE,
  FETCH_DATA_TABLE_FAIL,
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
