import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { SiCplusplus, SiNextdotjs, SiDjango } from "react-icons/si";
import Navbar from "./Navbar";

const Aboutme = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-800 p-8 min-h-screen flex flex-col justify-center items-center">
        {/* About Me Text Section */}
        <div className="text-center md:text-left mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <h4 className="text-2xl font-semibold text-indigo-400 mb-2">
            Who Am I
          </h4>
          <p className="text-gray-300 text-lg max-w-2xl">
            A highly motivated Computer Science graduate with an exceptional
            academic background, having recently completed a Bachelor of
            Engineering degree at Chitkara University with a CGPA of 9.52.
            Proficient in programming languages including C++ and JavaScript,
            and experienced in working with frameworks such as React, Redux, and
            Next.js. Demonstrated ability to build scalable and efficient web
            applications, with a strong focus on user experience and real-time
            communication.
          </p>
        </div>

        {/* Skills List Section */}
        <ul className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <li className="p-4 border-2 border-indigo-400 text-white rounded-lg text-center">
            <SiCplusplus className="inline-block mb-2 text-3xl" /> <br />
            C++
          </li>
          <li className="p-4 border-2 border-indigo-400 text-white rounded-lg text-center">
            <FaHtml5 className="inline-block mb-2 text-3xl" /> <br />
            HTML/CSS
          </li>
          <li className="p-4 border-2 border-indigo-400 text-white rounded-lg text-center">
            <FaJsSquare className="inline-block mb-2 text-3xl" /> <br />
            JavaScript
          </li>
          <li className="p-4 border-2 border-indigo-400 text-white rounded-lg text-center">
            <FaReact className="inline-block mb-2 text-3xl" /> <br />
            React.js
          </li>
          <li className="p-4 border-2 border-indigo-400 text-white rounded-lg text-center">
            <FaNodeJs className="inline-block mb-2 text-3xl" /> <br />
            Node.js
          </li>
          <li className="p-4 border-2 border-indigo-400 text-white rounded-lg text-center">
            <SiNextdotjs className="inline-block mb-2 text-3xl" /> <br />
            Next.js
          </li>
          <li className="p-4 border-2 border-indigo-400 text-white rounded-lg text-center">
            <FaPython className="inline-block mb-2 text-3xl" /> <br />
            Python
          </li>
          <li className="p-4 border-2 border-indigo-400 text-white rounded-lg text-center">
            <SiDjango className="inline-block mb-2 text-3xl" /> <br />
            Django
          </li>
        </ul>
      </div>
    </>
  );
};

export default Aboutme;
