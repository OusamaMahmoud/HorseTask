import { Horse } from "../../types/horse";

type Props = {
    user?: Horse["user"];
  };
  
  const OwnerInfo = ({ user }: Props) => {
    return (
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          Owner Information
        </h2>
        {user ? (
          <div className="space-y-1 text-gray-700 dark:text-gray-200">
            <p><span className="font-semibold">Name:</span> {user.first_name} {user.last_name}</p>
            <p><span className="font-semibold">Email:</span> {user.email}</p>
            <p><span className="font-semibold">Phone:</span> {user.phone}</p>
            <p><span className="font-semibold">Horses Count:</span> {user.horses_count}</p>
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">No Owner found.</p>
        )}
      </div>
    );
  };
  
  export default OwnerInfo;
  