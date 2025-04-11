import React from 'react';
import SafeImage from '../common/SafeImage';
import { Link } from 'react-router';

interface HorseCardProps {
  horse: {
    id: number;
    image: string;
    name: string;
    date_of_birth: string;
    breed: string;
  };
  defaultHorse: string;
}

const HorseCard: React.FC<HorseCardProps> = ({ horse, defaultHorse }) => {
  return (
    <div
      key={horse.id}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative">
        <SafeImage
          src={horse.image}
          fallbackSrc={defaultHorse}
          alt="Horse Logo"
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
          ID: {horse.id}
        </div>
      </div>
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 font-mono">
          {horse.name}
        </h2>
        <div className="space-y-2 mb-4">
          <p className="text-gray-600 dark:text-gray-300 flex items-center">
            <span className="font-medium mr-2">Age:</span>
            {horse.date_of_birth}
          </p>
          <p className="text-gray-600 dark:text-gray-300 flex items-center">
            <span className="font-medium mr-2">Breed:</span> {horse.breed}
          </p>
        </div>
        <div className="pt-2">
          <Link
            to={`/horses/${horse.id}`}
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg text-center transition-colors duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HorseCard;
