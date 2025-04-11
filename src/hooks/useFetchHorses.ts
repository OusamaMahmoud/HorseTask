import { useQuery, keepPreviousData } from "@tanstack/react-query";
import apiClient from "../services/axios";
import { useDebounce } from "./useDebounce";
import type { HorseApiResponse } from "../types/horse";

export const useFetchHorses = (search: string, page: number, pageSize = 10) => {
  const debouncedSearch = useDebounce(search, 500);

  return useQuery({
    queryKey: ["horses", debouncedSearch, page],
    queryFn: async () => {
      const res = await apiClient.get<{ data: HorseApiResponse }>("/horses", {
        params: { page, pageSize, search: debouncedSearch },
      });
      return res.data.data;
    },
    placeholderData: keepPreviousData,
    gcTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
