import defaultHorse from "/assets/horse.png";
import { useNavigate, useParams } from "react-router";
import ErrorFallBack from "../../components/common/ErrorFallBack";
import Skeleton from "../../components/common/Skeleton";
import { useHorse } from "../../hooks/useHorse";
import SafeImage from "../../components/common/SafeImage";
import OwnerInfo from "../../components/horses/OwnerInfo";
import PackagesInfo from "../../components/horses/PackagesInfo";
import ServicesInfo from "../../components/horses/ServicesInfo";
import HorseInfo from "../../components/horses/HorseInfo";
import { GrReturn } from "react-icons/gr";

const HorseDetails = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/horses"); 
  };

  const { id } = useParams<{ id: string }>();

  const { data: horse, isPending, isError, error, refetch } = useHorse(id);

  const handleRetry = () => refetch();

  if (isPending) return <Skeleton />;
  if (isError) return <ErrorFallBack error={error} handleRetry={handleRetry} />;

  return (
    <div className="max-w-6xl mx-auto px-4 my-2">
      <button
        className="p-4 my-2 rounded-xl shadow-xl w-fit dark:bg-white cursor-pointer"
        onClick={handleGoBack}
      >
        <GrReturn className="text-black" />
      </button>

      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white shadow-md p-4 rounded-xl">
        {horse.name}
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <SafeImage
            src={horse.image}
            fallbackSrc={defaultHorse}
            alt={horse.name}
            className="w-full h-[400px] object-cover rounded-xl shadow-lg"
          />

          <HorseInfo horse={horse} />
        </div>

        <div className="space-y-6">
          <OwnerInfo user={horse.user} />
          <PackagesInfo packages={horse.packages} />
          <ServicesInfo services={horse.services} />
        </div>
      </div>
    </div>
  );
};

export default HorseDetails;
