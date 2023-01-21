import axios from "axios";

const api = axios.create({
  baseURL: "https://intratec-api.onrender.com",
});

export default api;
