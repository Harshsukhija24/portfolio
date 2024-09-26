import React from "react";
import Navbar from "./Navbar";

const ContactMe = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-800 p-8 min-h-screen">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          Contact Me
        </h1>
        <div className="p-6 max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-300 mb-4">
            I am available for both internship and job opportunities and would
            love to connect with you. If you're looking for someone who is eager
            to learn and contribute, please reach out!
          </p>
          <p className="text-gray-300 mb-4">
            You can contact me through the following channels:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>
              Email:{" "}
              <a
                href="mailto:harshsukhija2002@gmail.com"
                className="text-indigo-400"
              >
                harshsukhija2002@gmail.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+919649991363" className="text-indigo-400">
                +919649991363
              </a>
            </li>
          </ul>
          <p className="text-gray-300">
            I am available for interviews at your earliest convenience and can
            join immediately. Thank you for considering my application!
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
