import React from "react";
import { FaRegCalendar, FaChevronRight } from "react-icons/fa6";
import background from "../../assets/bg-project.png";
import frederica from "../../assets/frederica.png";
import archive from "../../assets/archive.png";

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      name: "Frederica App",
      date: "Mar, 25 2024",
      image: frederica,
      description:
        "Contributed to building a website with Nuxt.js, developing features such as user dashboard and resolving UI errors and bugs during the development phase despite having no prior Nuxt.js experience.",
    },
    {
      id: 2,
      name: "Portfolio Website",
      date: "Mar, 25 2024",
      image: archive,
      description:
        "Contributed to building a website with Nuxt.js, developing features such as user dashboard and resolving UI errors and bugs during the development phase despite having no prior Nuxt.js experience.",
    },
    {
      id: 3,
      name: "Frederica App",
      date: "Mar, 25 2024",
      image: frederica,
      description:
        "Contributed to building a website with Nuxt.js, developing features such as user dashboard and resolving UI errors and bugs during the development phase despite having no prior Nuxt.js experience.",
    },
    {
      id: 4,
      name: "Portfolio Website",
      date: "Mar, 25 2024",
      image: archive,
      description:
        "Contributed to building a website with Nuxt.js, developing features such as user dashboard and resolving UI errors and bugs during the development phase despite having no prior Nuxt.js experience.",
    },
    {
      id: 5,
      name: "Frederica App",
      date: "Mar, 25 2024",
      image: frederica,
      description:
        "Contributed to building a website with Nuxt.js, developing features such as user dashboard and resolving UI errors and bugs during the development phase despite having no prior Nuxt.js experience.",
    },
    {
      id: 6,
      name: "Portfolio Website",
      date: "Mar, 25 2024",
      image: archive,
      description:
        "Contributed to building a website with Nuxt.js, developing features such as user dashboard and resolving UI errors and bugs during the development phase despite having no prior Nuxt.js experience.",
    },
  ];

  return (
    <div id="projects" className="relative min-h-screen w-screen bg-black text-white py-10 flex flex-col items-center">
      <h2 className="text-3xl mb-10 z-10 text-center">Latest Projects</h2>

      {/* Background image */}
      <div className="absolute h-full w-full z-0">
        <img
          src={background}
          alt="bg-project"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-7xl px-4 z-10">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="p-3 relative bg-gray-600 hover:bg-opacity-40 bg-clip-padding backdrop-filter backdrop-blur-sm  bg-opacity-25 rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.name}
              draggable="false"
              className="w-full h-48 sm:h-52 md:h-56 object-cover object-top rounded-2xl"
            />
            <div className="p-2">
              <div className="flex flex-row items-center gap-2">
                <FaRegCalendar className="inline" />
                <a>{project.date}</a>
              </div>
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="mt-2 text-sm text-gray-300">
                {project.description}
              </p>
              <button
                type="button"
                className="text-white bg-purple-600 rounded-full text-xs md:text-sm px-4 py-1 md:px-5 md:py-2 transition-all duration-300 ease-in-out mt-4 flex items-center gap-1 justify-between"
              >
                <span>Visit App</span>
                <FaChevronRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
