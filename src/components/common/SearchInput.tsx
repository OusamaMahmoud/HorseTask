import { FaSearch } from "react-icons/fa";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

const SearchInput = ({ value, onChange, placeholder = "Search..." }: SearchInputProps) => {
  return (
    <div className="mb-8 ">
      <div className="relative max-w-md mx-auto ">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaSearch className="text-gray-400 dark:text-gray-200" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-700 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchInput;
