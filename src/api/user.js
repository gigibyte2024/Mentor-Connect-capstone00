import API from "./axiosInstance";

// GET LOGGED-IN USER
export const getMyProfile = () => API.get("/users/me");

// GET ALL USERS (with optional search, sort, filter, pagination)
export const getUsers = (params = {}) => API.get("/users", { params });

// UPDATE USER PROFILE
export const updateMyProfile = (data) => API.put("/users/update", data);

// DELETE USER ACCOUNT
export const deleteMyAccount = () => API.delete("/users/delete");
