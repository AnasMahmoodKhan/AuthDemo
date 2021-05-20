import axios from "axios";

const API_END_POINT = "http://localhost:2410";

const Api = {
  fetch: (path) => {
    return axios.get(`${API_END_POINT}/${path}`);
  },
  post: (path, data) => {
    return axios.post(`${API_END_POINT}/${path}`, data);
  },
  delete: (path, data) => {
    return axios.delete(`${API_END_POINT}/${path}?ids=${data}`);
  },
};

export default Api;
