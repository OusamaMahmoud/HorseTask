import { useMutation } from "@tanstack/react-query";
import { LoginForm, LoginResponse } from "../types/login";
import { setToken } from "../lib/auth";
import { useNavigate } from "react-router";
import apiClient from "../services/axios";

const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: LoginForm) => {
      const res = await apiClient.post<LoginResponse>("/login", data);
      console.log("Login response:", res.data);
      return res.data.data;
    },
    onSuccess: (data) => {
      if (data.token) {
        setToken(data.token);
        navigate("/horses");
      } else {
        throw new Error("Login failed: Token not found");
      }
    },
  });
};
export default useLogin;
