import axios from "axios";

const BASE_URL = "https://mentor-connect-capstone00.onrender.com/api/auth";

export const loginUser = (data) =>
  axios.post(`${BASE_URL}/login`, data);

export const signupUser = (data) =>
  axios.post(`${BASE_URL}/signup`, data);
