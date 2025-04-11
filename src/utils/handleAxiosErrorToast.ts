import axios from "axios";
import { toast } from "react-toastify";

export function handleAxiosErrorToast(error: unknown) {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    const message =
      error.response?.data?.message || "An unexpected error occurred.";

    switch (status) {
      case 400:
        toast.warning(message || "Bad request.");
        break;
      case 401:
        toast.error("Unauthorized. Please login.");
        break;
      case 403:
        toast.error("Access denied.");
        break;
      case 404:
        toast.warning("Resource not found.");
        break;
      case 422:
        toast.warning("Validation error.");
        break;
      case 500:
        toast.error("Internal server error.");
        break;
      default:
        toast.error(message);
        break;
    }
  } else {
    toast.error("Something went wrong.");
  }
}
