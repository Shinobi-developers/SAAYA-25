

const ResultsPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Event Results</h1>
      
      <p className="text-xl text-center text-gray-700 mb-8">
        The events for our annual college art fest are yet to begin! Check back after the events to view the results.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Event 1 */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">On-Stage Events</h2>
          <p className="text-lg text-gray-700">The events will begin soon. Stay tuned for the results!</p>
        </div>

        {/* Event 2 */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Off-Stage Events</h2>
          <p className="text-lg text-gray-700">The events will begin soon. Stay tuned for the results!</p>
        </div>

        {/* Event 3 */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Second Stage Events</h2>
          <p className="text-lg text-gray-700">The events will begin soon. Stay tuned for the results!</p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-lg text-gray-600">
          Please check back after the event to see the exciting results and winners!
        </p>
      </div>
    </div>
  );
};

export default ResultsPage;
