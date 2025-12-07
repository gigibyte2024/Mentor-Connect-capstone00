import API from "./axiosInstance";

// Fetch mentors with search, filter, sort, pagination
export const getMentors = async (query = "") => {
  const res = await API.get(`/mentors?${query}`);
  return res.data;
};
