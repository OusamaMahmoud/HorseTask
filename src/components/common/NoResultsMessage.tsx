import React from "react";

const NoResultsMessage: React.FC = () => {
  return (
    <div className="text-center py-10">
      <p className="text-gray-600 text-lg">
        No horses found matching your search criteria.
      </p>
    </div>
  );
};

export default NoResultsMessage;
