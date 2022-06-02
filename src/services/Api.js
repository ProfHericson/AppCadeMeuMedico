import axios from "axios";
import { getToken } from "../functions/Storage";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use((config) => {
  try {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error) {
    console.log("Error axios " + error);
  }
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status == 401) {
      localStorage.clear();
      return (window.location.href = "/msg-logout?type=token");
    }
    return Promise.reject(error);
  }
);

export default api;
