import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://noonacademy_ancozle.jeyad360.com/organization/v1/d",
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
