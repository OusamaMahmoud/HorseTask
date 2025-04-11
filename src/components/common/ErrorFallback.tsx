interface ErrorProps {
  error: unknown;
  handleRetry: () => void;
}

const ErrorFallback = ({ error, handleRetry }: ErrorProps) => {
  return (
    <div className="container mx-auto px-4 py-10 max-w-6xl">
      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg shadow-md">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg
              className="h-8 w-8 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-red-800">
              We couldn't load the horses
            </h3>
            <p className="mt-2 text-sm text-red-700">
              {error instanceof Error
                ? error.message
                : "Something went wrong while loading the data."}
            </p>
            <div className="mt-4">
              <button
                onClick={handleRetry}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorFallback;
