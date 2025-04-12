import { toast, ToastContainer } from "react-toastify";
import ImageUploader from "./ImageUploader";
import { GrReturn } from "react-icons/gr";
import { useNavigate } from "react-router";

const ImageContainer = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/horses"); 
  };
  return (
    <div className="p-10  rounded-lg shadow-md">
      <button
        className="p-4 my-2 rounded-xl shadow-xl w-fit dark:bg-white cursor-pointer"
        onClick={handleGoBack}
      >
        <GrReturn className="text-black" />
      </button>
      <ImageUploader
        uploadUrl="/horses/upload"
        onSuccess={() => toast.success("Image uploaded successfully!")}
      />
      <ToastContainer />
    </div>
  );
};

export default ImageContainer;
