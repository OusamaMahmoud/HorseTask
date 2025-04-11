import React, { useState } from "react";

const HorseFilter: React.FC<{ onFilter: (breed: string) => void }> = ({
  onFilter,
}) => {
  const [selectedBreed, setSelectedBreed] = useState<string>("");

  const breeds = [
    "العربي",
    "النجدي",
    "الحميري",
    "الشايب",
    "الصفوي",
    "البدوي",
    "العماني",
    "البحريني",
    "الليبي",
    "مغربي",
    "الجزائري",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBreed(e.target.value);
    onFilter(e.target.value); // Send the selected breed back to the parent component
  };

  return (
    <div className="mb-8">
      <label
        htmlFor="breed"
        className="block text-gray-700 dark:text-gray-300 mb-2"
      >
        Filter by Breed:
      </label>
      <select
        id="breed"
        value={selectedBreed}
        onChange={handleChange}
        className="select w-80 p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:ring-blue-500"
      >
        <option value="">Select Breed</option>
        {breeds.map((breed, index) => (
          <option key={index} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HorseFilter;
