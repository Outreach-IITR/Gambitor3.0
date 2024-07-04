import axios from "axios";
import env from "react-dotenv";

const api = axios.create({
  baseURL: 'http://localhost:8080/admin',
  "Content-type": "application/json",
  Accept: "application/json",
  withCredentials: true,
});

export default api;
