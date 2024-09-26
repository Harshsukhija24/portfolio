import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">My Portfolio</div>
          <div className="ml-auto space-x-4">
            <Link to="/">
              <button className="text-white hover:bg-gray-700 px-3 py-2 rounded transition duration-300">
                HOME
              </button>
            </Link>

            <Link to="/about">
              <button className="text-white hover:bg-gray-700 px-3 py-2 rounded transition duration-300">
                ABOUT ME
              </button>
            </Link>
            <Link to="/projects">
              <button className="text-white hover:bg-gray-700 px-3 py-2 rounded transition duration-300">
                PROJECTS
              </button>
            </Link>
            <Link to="/contact">
              <button className="text-white hover:bg-gray-700 px-3 py-2 rounded transition duration-300">
                CONTACT ME
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
