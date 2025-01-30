import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full bg-[#2c3e50] backdrop-blur-md p-4 shadow-lg z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <Link
              to="/"
              className="hover:text-gray-300 transition duration-300"
            >
              FakeStore
            </Link>
          </div>

          <nav>
            <ul className="hidden sm:flex space-x-8">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-gray-300 transition duration-300 ease-in-out text-lg"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-white hover:text-gray-300 transition duration-300 ease-in-out text-lg"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/addProducts"
                  className="text-white hover:text-gray-300 transition duration-300 ease-in-out text-lg"
                >
                  Add Product
                </Link>
              </li>
            </ul>

            <div className="sm:hidden">
              <button onClick={toggleMenu} className="text-white text-2xl">
                {isOpen ? "X" : "☰"}{" "}
              </button>

              {isOpen && (
                <div className="absolute top-16 left-0 bg-white w-full p-4 rounded-lg shadow-md">
                  <ul>
                    <li>
                      <Link
                        to="/"
                        className="block py-2 px-4 text-black hover:bg-gray-200"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products"
                        className="block py-2 px-4 text-black hover:bg-gray-200"
                      >
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/addProducts"
                        className="block py-2 px-4 text-black hover:bg-gray-200"
                      >
                        Add Product
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>

      <div className="pt-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
