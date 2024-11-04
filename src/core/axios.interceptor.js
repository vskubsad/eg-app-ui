import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000"
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = JSON.parse(localStorage.getItem("token"));

    config.headers["Content-Type"] = "Application/json";
    // If token is present add it to request's Authorization Header
    if (accessToken) {
      if (config.headers) {
        config.headers.token = accessToken;
        config.headers.Authorization = `Bearer ${sessionStorage.getItem(
          "token"
        )}`;
      }
    }
    return config;
  },
  (error) => {
    console.log("Error: " + error);
    // Handle request errors here
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status === 201) {
      sessionStorage.setItem("token", response.data.token);
    }
    return response;
  },
  (error) => {
    console.log("Error: " + error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
