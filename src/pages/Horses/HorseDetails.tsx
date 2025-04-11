// src/pages/HorseDetails.tsx
import { useQuery } from "@tanstack/react-query";
import defaultHorse from "/assets/horse.png";
import { useParams } from "react-router";
import apiClient from "../../services/axios";

const HorseDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["horse", id],
    queryFn: async () => {
      const res = await apiClient.get<{
        horse: any;
      }>(`/horses/${id}`);
      console.log(res.data);
      return res.data.horse;
    },
    refetchOnWindowFocus: false,
    enabled: !!id, // prevents fetching until we have an id
  });

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = defaultHorse;
  };

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const horse = data;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">{horse.name}</h1>

      <div className="card bg-base-100 shadow-xl p-6">
        <img
          src={horse.image || defaultHorse}
          alt={horse.name}
          onError={handleImageError}
          className="w-full h-[400px] object-cover rounded mb-4"
        />

        <p>
          <strong>Breed:</strong> {horse.breed}
        </p>
        <p>
          <strong>Age:</strong> {horse.date_of_birth}
        </p>
        <p>
          <strong>Gender:</strong> {horse.gender?.name_ar}
        </p>
        <p>
          <strong>Father:</strong> {horse.father_name}
        </p>
        <p>
          <strong>Mother:</strong> {horse.mother_name}
        </p>

        <div className="mt-4">
          <h2 className="text-xl font-semibold">Owner:</h2>
          <p>
            {horse.user?.first_name} {horse.user?.last_name}
          </p>
          <p>{horse.user?.email}</p>
          <p>{horse.user?.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default HorseDetails;
