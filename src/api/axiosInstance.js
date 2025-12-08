import axios from "axios";

const API = axios.create({
  baseURL: "https://mentor-connect-capstone00.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔥 Attach token to every request
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token && token !== "undefined" && token !== "" && token !== null) {
    req.headers.Authorization = `Bearer ${token}`;
  } else {
    delete req.headers.Authorization;
  }

  return req;
});

export default API;
