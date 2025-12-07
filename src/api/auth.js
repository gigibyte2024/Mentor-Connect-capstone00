import API from "./axiosInstance";

// ---------------------- SIGNUP ----------------------
export const signupUser = (data) => API.post("/auth/signup", data);

// ---------------------- LOGIN ----------------------
export const loginUser = async (data) => {
  const res = await API.post("/auth/login", data);

  // store token
  localStorage.setItem("token", res.data.token);

  // return full response data
  return res.data;  // <-- IMPORTANT
};
