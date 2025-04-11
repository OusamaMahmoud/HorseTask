// src/hooks/useHorse.ts
import { useQuery } from "@tanstack/react-query";
import { Horse } from "../types/horse"; // adjust the path to your Horse type
import apiClient from "../services/axios";

export const useHorse = (id: string | number | undefined) => {
  return useQuery({
    queryKey: ["horse", id],
    queryFn: async () => {
      const res = await apiClient.get<{ horse: Horse }>(`/horses/${id}`);
      return res.data.horse;
    },
    enabled: !!id,
    refetchOnWindowFocus: false,
  });
};
