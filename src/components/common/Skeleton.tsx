
const Skeleton = () => {
  return (
    <div className="flex w-full flex-col gap-4 p-20">
      <div className="flex items-center gap-4">
        <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
        <div className="flex flex-col gap-4">
          <div className="skeleton h-4 w-96"></div>
          <div className="skeleton h-4 w-96"></div>
        </div>
      </div>
      <div className="skeleton h-32 w-full"></div>
    </div>
  );
};

export default Skeleton;
