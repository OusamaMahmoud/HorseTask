import { Horse } from "../../types/horse";

type Props = {
    packages?: Horse["packages"];
  };
  
  const PackagesInfo = ({ packages }: Props) => {
    return (
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          Packages
        </h2>
        {packages?.length ? (
          <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-200">
            {packages.map((pkg) => (
              <li key={pkg.id} className="border-b border-gray-200 dark:border-gray-700 pb-2">
                <p><span className="font-semibold">Category:</span> {pkg.service_category.name_ar}</p>
                <p><span className="font-semibold">Price:</span> {pkg.price} EGP ({pkg.period})</p>
                <p><span className="font-semibold">Payment:</span> {pkg.payment.amount} EGP - {pkg.payment.status}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">No packages found.</p>
        )}
      </div>
    );
  };
  
  export default PackagesInfo;
  