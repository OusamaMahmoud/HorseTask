import { Horse } from "../../types/horse";

type Props = {
    services?: Horse["services"];
  };
  
  const ServicesInfo = ({ services }: Props) => {
    return (
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          Services
        </h2>
        {services?.length ? (
          <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-200">
            {services.map((service) => (
              <li key={service.id} className="border-b border-gray-200 dark:border-gray-700 pb-2">
                <p><span className="font-semibold">Name:</span> {service.name || "-"}</p>
                <p><span className="font-semibold">Price:</span> {service.price} EGP</p>
                <p><span className="font-semibold">Payment:</span> {service.payment.amount} EGP - {service.payment.status}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">No services found.</p>
        )}
      </div>
    );
  };
  
  export default ServicesInfo;
  