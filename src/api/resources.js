// src/api/resources.js
import API from "./axiosInstance";

export const getMyResources = () => API.get("/resources");

export const addNewResource = (data) => API.post("/resources", data);

export const deleteResource = (id) => API.delete(`/resources/${id}`);

export const updateResource = (id, data) => API.put(`/resources/${id}`, data);
