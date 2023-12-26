import axios from "axios";

const api = axios.create({
  baseURL: "https://littlelemon-mcmv.onrender.com/api/v1",
});

export default api;
