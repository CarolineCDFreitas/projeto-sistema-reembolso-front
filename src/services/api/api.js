import axios from "axios";
import { retrieveToken } from "../auth/authServices";

const api = axios.create({
  baseURL: "http://localhost:5002",
});

api.interceptors.request.use(function (config) {
  const token = retrieveToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
