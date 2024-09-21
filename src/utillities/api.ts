import axios from "axios";

export const apiToken = axios.create({
  baseURL: "https://passwordplayground.coolify.machma.app",
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
  baseURL: "https://passwordplayground.coolify.machma.app",
});
