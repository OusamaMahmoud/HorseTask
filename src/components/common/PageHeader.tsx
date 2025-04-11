import DarkModeToggle from "./DarkModeToggle";
import horseLogo from "/assets/horseLogo.png";

const PageHeader = () => {
  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg mb-8">
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start">
        <div className="flex items-center mb-3 sm:mb-0">
          <img
            src={horseLogo}
            alt="Horse Logo"
            className="w-12 h-12 rounded-full hidden md:block mr-4"
          />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 font-mono">
          Horse Management System
        </h1>
      </div>
      <DarkModeToggle />
    </div>
  );
};

export default PageHeader;
