import { useNavigate } from "react-router";
import { clearToken, getToken } from "../../lib/auth";
import DarkModeToggle from "./DarkModeToggle";
import horseLogo from "/assets/horseLogo.png";
import { useState } from "react";
import Modal from "./Modal";

const PageHeader = () => {
  const storedToken = getToken();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    clearToken();
    navigate("/login");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex justify-between items-start sm:items-center bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg mb-4">
      <Modal
        isOpen={isModalOpen}
        onClose={handleCancel}
        title="Confirm Logout"
        message="Are you sure you want to log out?"
        confirmText="Yes, Logout"
        cancelText="Cancel"
        onConfirm={handleLogout}
      />
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start">
        <div className="flex items-center mb-3 sm:mb-0">
          <img
            src={horseLogo}
            alt="Horse Logo"
            className="w-12 h-12 rounded-full  mr-4"
          />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 font-mono">
          Horse Management System
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <DarkModeToggle />
        {storedToken && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-primary"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
