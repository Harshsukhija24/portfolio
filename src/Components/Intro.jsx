import React from "react";
import { Link } from "react-router-dom"; // Make sure to import Link

const Intro = () => {
  return (
    <div className="bg-teal-700 p-8 flex justify-center items-center min-h-screen">
      <div className="flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <p className="text-4xl font-bold text-white">
            Hello, My name is <br />
            <span className="text-indigo-400">Harsh Sukhija</span> <br />
            <span className="text-lg font-light text-gray-200">
              A passionate and dedicated web developer, driven by the
              ever-evolving world of technology and its limitless possibilities.
            </span>
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            {/* Use Link directly without button */}
            <Link
              to="/contact"
              className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-400 transition duration-300"
            >
              Contact Me
            </Link>
            <a
              href="/HarshSukhija_Resume.pdf" // Replace with the actual path to your CV
              download
              className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-400 transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src="photo.jpeg"
            alt="Profile"
            className="w-64 h-64 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
