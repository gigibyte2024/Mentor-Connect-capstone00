import API from "./axiosInstance";

export const submitQuiz = (data) => API.post("/quiz", data);
export const getQuizScores = () => API.get("/quiz");
