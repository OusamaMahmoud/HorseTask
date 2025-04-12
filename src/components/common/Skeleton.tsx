import React from "react";

const Skeleton = React.memo(() => {
  return (
    <div className="flex w-full flex-col gap-6 p-6 sm:p-10 md:p-16 lg:p-20">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
        {/* Avatar Skeleton */}
        <div className="skeleton h-16 w-16 shrink-0 rounded-full bg-gray-300 dark:bg-gray-600" />

        {/* Text Skeleton */}
        <div className="flex flex-col gap-3 w-full">
          <div className="skeleton h-4 w-full sm:w-3/4 bg-gray-200 dark:bg-gray-700" />
          <div className="skeleton h-4 w-full sm:w-1/2 bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>

      {/* Large Box Skeleton */}
      <div className="skeleton h-32 w-full bg-gray-200 dark:bg-gray-700" />
    </div>
  );
});

export default Skeleton;
