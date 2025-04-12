import { useCallback, useEffect, useState } from "react";
import defaultHorse from "/assets/horse.png";
import Skeleton from "../../components/common/Skeleton";
import { useFetchHorses } from "../../hooks/useFetchHorses";
import SearchInput from "../../components/common/SearchInput";
import HorseCard from "../../components/horses/HorseCard";
import HorsePagination from "../../components/horses/HorsePagination";
import NoResultsMessage from "../../components/common/NoResultsMessage";
import HorseFilter from "../../components/horses/HorseFilter";
import ErrorFallBack from "../../components/common/ErrorFallBack";
import { useNavigate, useLocation, Link } from "react-router";
import ImageUploader from "../../components/common/ImageUploader";

const HorseList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the search and page from the URL query parameters
  const queryParams = new URLSearchParams(location.search);
  const initialSearch = queryParams.get("search") || "";
  const initialPage = parseInt(queryParams.get("page") || "1");
  const initialBreed = queryParams.get("breed") || "";

  const [search, setSearch] = useState(initialSearch);
  const [page, setPage] = useState(initialPage);
  const [breed, setBreed] = useState(initialBreed);

  const {
    data: horseCollection,
    isPending,
    isError,
    error,
    refetch,
  } = useFetchHorses(search, breed, page);

  const hasHorses = horseCollection && horseCollection?.data?.length > 0;

  // Reset page to 1 when the search keyword or breed changes
  useEffect(() => {
    if (page !== 1) {
      setPage(1);
    }
  }, [search, breed]);

  // Preserve search and pagination states in the browser URL
  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (page) params.set("page", page.toString());
    if (breed) params.set("breed", breed);

    navigate(`/horses?${params.toString()}`, { replace: true });
  }, [search, page, breed, navigate]);

  const handleRetry = useCallback(() => {
    refetch();
  }, [refetch]);

  const handleFilterChange = useCallback((selectedBreed: string) => {
    setBreed(selectedBreed);
  }, []);
  const handleSuccess = (data: any) => {
    console.log("Image uploaded:", data);
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

      <div
        className="flex flex-col sm:flex-row sm:justify-between sm:items-center 
      "
      >
        <HorseFilter onFilter={handleFilterChange} />
        {/* <div className="mb-5 btn ">
          <Link to={"upload-image"} className="text-xl font-bold link">
            Upload Horse Image
          </Link>
        </div> */}
      </div>
      {/* Horse List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {horseCollection?.data?.map((horse) => (
          <HorseCard key={horse.id} horse={horse} defaultHorse={defaultHorse} />
        ))}
      </div>

      {/* No results message */}
      {!hasHorses && <NoResultsMessage />}

      {/* Pagination */}
      {hasHorses && (
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
