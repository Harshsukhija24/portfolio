import React from "react";
import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa"; // Importing relevant icons
import { SiTailwindcss, SiDjango, SiNextdotjs } from "react-icons/si";
import Navbar from "./Navbar";

const technologyIcons = {
  "Next.js": <SiNextdotjs className="inline mr-1" />,
  "Node.js": <FaNodeJs className="inline mr-1" />,
  MongoDB: <FaDatabase className="inline mr-1" />,
  Tailwind: <SiTailwindcss className="inline mr-1" />,
  "React.js": <FaReact className="inline mr-1" />,
  Django: <FaPython className="inline mr-1" />,
};

const Projects = () => {
  const projects = [
    {
      name: "Found-Efficient Talent Connector",
      technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind"],
      description: [
        "Efficient Job Matching: Developed a job-seeking platform where companies post job listings and candidates apply based on skills. Implemented a sophisticated matching algorithm that increased successful job placements.",
        "Robust Backend: Implemented a Node.js backend with MongoDB for scalable data management. Created RESTful APIs that reduced server response time.",
        "Real-time Communication: Enabled instant messaging between companies and candidates using Firebase, leading to increased engagement.",
      ],
      sourceCode: "https://github.com/Harshsukhija24/found",
      liveProject: "https://found-xi.vercel.app/",
    },
    {
      name: "Ticketbridge-Virtual Event Ticketing Platform",
      technologies: ["React.js", "Django", "Tailwind"],
      description: [
        "Designed and implemented a scalable backend API using Django: Utilized Django’s ORM to interact with the database, created RESTful APIs to handle CRUD operations, and implemented authentication and authorization using Django’s built-in features.",
        "Developed a responsive and interactive frontend interface using React: Built reusable UI components and implemented client-side routing.",
        "Integrated Django backend with React frontend using RESTful APIs and JSON Web Tokens (JWT).",
      ],
      sourceCode: "https://github.com/Harshsukhija24/ticketBridge.git",
      liveProject: "https://ticket-bridge-1wtz.vercel.app/",
    },
    {
      name: "Kicks-Sneaker Resale Hub",
      technologies: ["Next.js", "MongoDB", "Tailwind"],
      description: [
        "Innovative Platform: Created a sneaker reselling platform using Next.js, achieving faster load times and increased user retention.",
        "Scalable Backend: Utilized Node.js and MongoDB for efficient product data management, supporting a high volume of users with zero downtime.",
        "Secure Authentication: Integrated NextAuth for secure user authentication, resulting in a reduction in unauthorized access attempts.",
      ],
      sourceCode: "https://github.com/Harshsukhija24/kicks",
      liveProject: "https://kicks-woad.vercel.app/",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-teal-700 p-8 min-h-screen">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          Projects
        </h1>

        {/* Grid Layout for Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
            >
              <h2 className="text-2xl font-semibold text-indigo-300 mb-2">
                {project.name}
              </h2>
              <p className="text-gray-200 mb-4">
                <span className="font-bold">Technologies:</span>{" "}
                {project.technologies.map((tech) => (
                  <span key={tech} className="flex items-center">
                    {technologyIcons[tech]} {tech}
                  </span>
                ))}
              </p>
              <ul className="list-disc list-inside text-gray-200 mb-4">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <div className="flex space-x-4">
                <a
                  href={project.sourceCode}
                  className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
                <a
                  href={project.liveProject}
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
