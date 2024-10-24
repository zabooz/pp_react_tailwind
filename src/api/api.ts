import axios from "axios";

const baseUrl = "https://passwordplayground.coolify.machma.app";
// const baseUrl = "http://localhost:3000";

export const apiToken = axios.create({
  baseURL: baseUrl,
});

apiToken.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("pp-token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const api = axios.create({
  baseURL: baseUrl,
});
