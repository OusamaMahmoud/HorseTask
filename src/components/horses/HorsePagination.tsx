// src/components/Pagination.tsx
import React from "react";

interface PaginationProps {
  currentPage: number;
  lastPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const HorsePagination: React.FC<PaginationProps> = React.memo(
  ({ currentPage, lastPage, setPage }) => {
    return (
      <div className="flex  gap-3 justify-center items-center mt-10 ">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <div className="flex items-center bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-md">
          <span className="text-gray-700 dark:text-gray-300">
            Page {currentPage} of {lastPage}
          </span>
        </div>

        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === lastPage}
        >
          Next
        </button>
      </div>
    );
  }
);

export default HorsePagination;
