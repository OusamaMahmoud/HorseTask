import { useQuery, keepPreviousData } from "@tanstack/react-query";
import apiClient from "../services/axios";
import { useDebounce } from "./useDebounce";
import type { HorseApiResponse } from "../types/horse";

export const useFetchHorses = (search: string, breed: string, page: number) => {
  const debouncedSearch = useDebounce(search, 200);

  return useQuery({
    queryKey: ["horses", debouncedSearch, breed, page],
    queryFn: async () => {
      const res = await apiClient.get<{ data: HorseApiResponse }>("/horses", {
        params: { page, breed, search: debouncedSearch },
      });
      console.log(res.data.data);
      return res.data.data;
    },
    staleTime: 1 * 60 * 1000, // Cache data for 5 minutes
    gcTime: 30 * 60 * 1000, // Keep data in the cache for 30 minutes
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });
};
