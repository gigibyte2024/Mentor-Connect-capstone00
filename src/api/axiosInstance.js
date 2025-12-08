import axios from "axios";

const API = axios.create({
  baseURL: "https://mentor-connect-capstone00.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to every request when available
API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");

    // Only add header if token exists
    if (token && token !== "undefined" && token !== "" && token !== null) {
      req.headers.Authorization = `Bearer ${token}`;
    } else {
      delete req.headers.Authorization;
    }

    return req;
  },
  (err) => Promise.reject(err)
);

export default API;


