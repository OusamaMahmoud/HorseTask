import { useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import api from "../../services/axios";
import { useDebounce } from "../../hooks/useDebounce"; // Custom hook to delay search input
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router";
import defaultHorse from "/assets/horse.png";
import type { HorseApiResponse } from "../../types/horse";

const HorseList = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const debouncedSearch = useDebounce(search, 500);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["horses", debouncedSearch, page],
    queryFn: async () => {
      const res = await api.get<{ data: HorseApiResponse }>("/horses", {
        params: { page, pageSize, search: debouncedSearch },
      });
      return res.data.data;
    },
    placeholderData: keepPreviousData, // still supported, merged with placeholderData under the hood
    gcTime: 5 * 60 * 1000, // formerly cacheTime
    refetchOnWindowFocus: false,
  });
  const [imageError, setImageError] = useState(false);

  const handleError = () => {
    setImageError(true);
  };

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center my-4">Horse Management</h1>

      {/* Live Search */}
      <div className="mb-4 flex justify-center items-center space-x-2">
        <FaSearch />
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          placeholder="Search by horse name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Horse List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data?.data?.map((horse) => (
          <div key={horse.id} className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img
                src={imageError || !horse.image ? defaultHorse : horse.image}
                alt={horse.name}
                className="w-full h-48 object-cover"
                onError={handleError} // Fallback to default image if the image fails to load
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{horse.name}</h2>
              <p>Age: {horse.date_of_birth}</p>
              <p>Breed: {horse.breed}</p>
              <div className="card-actions justify-end">
                <Link to={`/horses/${horse.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="btn btn-secondary"
          disabled={page === 1}
        >
          Previous
        </button>

        <span className="flex items-center">
          Page {data?.meta?.current_page} of {data?.meta?.last_page}
        </span>

        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="btn btn-secondary"
          disabled={page === data?.meta?.last_page}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HorseList;
