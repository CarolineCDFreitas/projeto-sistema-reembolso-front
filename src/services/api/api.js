import axios from "axios";

const api = axios.create({
  baseURL: "https://projeto-sistema-reembolso-back.onrender.com",
});

export default api;
