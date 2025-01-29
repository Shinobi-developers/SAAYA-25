import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">404</h1>
        <h2 className="text-4xl font-semibold mb-6 animate__animated animate__fadeIn animate__delay-2s">
          Oops! Page Not Found
        </h2>
        <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-3s">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex justify-center">
          <Link to="/" className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition duration-300 ease-in-out transform hover:scale-105 animate__animated animate__fadeIn animate__delay-4s">
            Go Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
