const Skeleton = () => {
  return (
    <div className="flex w-full flex-col gap-4 p-20">
      <div className="flex items-center gap-4">
        {/* Avatar Skeleton */}
        <div className="skeleton h-16 w-16 shrink-0 rounded-full bg-gray-300 dark:bg-gray-600"></div>
        
        {/* Text Skeleton */}
        <div className="flex flex-col gap-4">
          <div className="skeleton h-4 w-96 bg-gray-200 dark:bg-gray-700"></div>
          <div className="skeleton h-4 w-96 bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>

      {/* Large Box Skeleton */}
      <div className="skeleton h-32 w-full bg-gray-200 dark:bg-gray-700"></div>
    </div>
  );
};

export default Skeleton;
