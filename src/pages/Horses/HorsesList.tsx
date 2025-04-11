import { useEffect, useState } from "react";
import defaultHorse from "/assets/horse.png";
import Skeleton from "../../components/common/Skeleton";
import { useFetchHorses } from "../../hooks/useFetchHorses";
import PageHeader from "../../components/common/PageHeader";
import SearchInput from "../../components/common/SearchInput";
import HorseCard from "../../components/horses/HorseCard";
import HorsePagination from "../../components/horses/HorsePagination";
import NoResultsMessage from "../../components/common/NoResultsMessage";
import HorseFilter from "../../components/horses/HorseFilter";
import ErrorFallBack from "../../components/common/ErrorFallBack";

const HorseList = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [breed, setBreed] = useState("");
  const {
    data: horseCollection,
    isPending,
    isError,
    error,
    refetch,
  } = useFetchHorses(search, breed, page);

  // Reset page to 1 when the search keyword changes
  useEffect(() => {
    setPage(1);
  }, [search, breed]);

  // Handle retry Fetch
  const handleRetry = () => {
    refetch();
  };
  const handleFilterChange = (selectedBreed: string) => {
    setBreed(selectedBreed);
  };
  if (isPending) return <Skeleton />;
  if (isError) return <ErrorFallBack error={error} handleRetry={handleRetry} />;

  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl">
      <SearchInput
        value={search}
        onChange={(val) => setSearch(val)}
        placeholder="Search by horse name"
      />
      <HorseFilter onFilter={handleFilterChange} />
      {/* Horse List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {horseCollection?.data?.map((horse) => (
          <HorseCard key={horse.id} horse={horse} defaultHorse={defaultHorse} />
        ))}
      </div>

      {/* No results message */}
      {horseCollection?.data?.length === 0 && <NoResultsMessage />}

      {/* Pagination */}
      {horseCollection?.data?.length > 0 && (
        <HorsePagination
          currentPage={horseCollection?.meta?.current_page}
          lastPage={horseCollection?.meta?.last_page}
          setPage={setPage}
        />
      )}
    </div>
  );
};

export default HorseList;
