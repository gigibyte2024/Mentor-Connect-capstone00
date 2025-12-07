import API from "./axiosInstance";

export const sendMessage = (data) => API.post("/chat", data);
export const getMessages = (partnerId) => API.get(`/chat/${partnerId}`);
