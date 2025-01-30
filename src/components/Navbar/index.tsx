import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../public/images/logo.png";
import Name from "../../../public/images/SAAYA’25.png";

const Navbar = () => {
  // State for toggling mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  return (
    <nav className="bg-green-400 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-15 max-md:h-10" alt="Logo" />
          <span className="">
            <img src={Name} className="h-10 max-md:h-5" alt="Name" />
          </span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu} // Toggle menu when clicked
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"} // Toggle aria-expanded attribute
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Links (Mobile Menu) */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden" // Toggle visibility based on state
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 bg-none md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-2xl max-md:text-sm">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm md:p-0 ${
                    isActive
                      ? "text- bg-yellow-300 md:bg-transparent md:text-yellow-300 dark:text-blue-500"
                      : "text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm md:p-0 ${
                    isActive
                      ? "text- bg-yellow-300 md:bg-transparent md:text-yellow-300 dark:text-blue-500"
                      : "text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm md:p-0 ${
                    isActive
                      ? "text- bg-yellow-300 md:bg-transparent md:text-yellow-300 dark:text-blue-500"
                      : "text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }`
                }
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/results"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm md:p-0 ${
                    isActive
                      ? "text- bg-yellow-300 md:bg-transparent md:text-yellow-300 dark:text-blue-500"
                      : "text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }`
                }
              >
                Results
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
