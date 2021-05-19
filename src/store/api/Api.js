import axios from "axios";

const API_END_POINT = "http://localhost:2410";

const Api = {
  fetch: (path) => {
    return axios.get(`${API_END_POINT}/${path}`);
  },
};

export default Api;
