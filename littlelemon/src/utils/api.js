import axios from "axios";

const api = axios.create({
  baseURL: "https://littlelemondateapi.onrender.com/api/v1",
});

export default api;
