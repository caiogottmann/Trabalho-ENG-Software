import axios from "axios";

const url = "http://localhost:5000";


export default () => {
  return axios.create({
    baseURL: url,
  });
};
