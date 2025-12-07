import axios from "axios";

const API = axios.create({
  baseURL: "https://mentor-connect-capstone00.onrender.com/api",
});

// agar token localStorage me ho → har request me bhej do
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
