import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "OLX Clone",
    description:
      "A buy-and-sell marketplace platform with features for user authentication, product listings, search/filter, and wishlist functionality.",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Auth0"],
    img: "/img/OLX CLone.png",
  },
  {
    title: "Instagram Clone",
    description:
      "A social media clone with login/signup, post creation, profile pages, and interactive UI mimicking the Instagram interface.",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    img: "/img/insta.jpg",
  },
  {
    title: "BookmyShow",
    description:
      "A movie ticket booking platform with movie listings, seat selection, booking confirmation, and admin movie management.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    img: "/img/bookmyshow.jpg",
  },
  {
    title: "Legal Consultancy Platform",
    description:
      "A platform for clients to book consultations with lawyers, featuring lawyer profiles, scheduling, and Google Meet integration.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    img: "/img/l1.png",
  },
];

const Project = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#0d0d2b] to-[#2b0a3d] text-white px-4 py-50"
      id="projects"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center text-pink-500 mb-4 mt-0">
        Featured Projects
      </h2>
      <p className="text-center text-gray-300 text-base md:text-lg mb-12 max-w-3xl mx-auto">
        Here are some of my recent projects that showcase my skills and passion for development.
      </p>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111111] rounded-xl overflow-hidden shadow-lg border border-[#1a1a1a] transition-transform hover:scale-[1.01]"
          >
            <div className="h-60 w-full bg-gray-800">
              <img
                src={project.img}
                alt={`${project.title} Screenshot`}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-white mb-2">
                <BsCodeSlash className="text-pink-500" />
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs md:text-sm px-3 py-1 rounded-full bg-purple-900 text-white hover:bg-purple-700 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className="mt-16 text-center">
        <a
          href="https://github.com/NANDANA-CS"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-purple-500 border border-purple-600 hover:bg-purple-800 hover:text-white transition-all text-base md:text-lg"
        >
          <FaGithub className="text-xl" />
          View More Projects
        </a>
      </div>
    </div>
  );
};

export default Project;
