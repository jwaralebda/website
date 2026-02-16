import React from "react";

const projects = [
  {
    id: 1,
    title: "Residential Villa Project",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1760783320571-36ebe8b9a350?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Commercial Office Building",
    location: "Abu Dhabi, UAE",
    image: "https://images.unsplash.com/photo-1549757521-4160565ff3de?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Luxury Apartment Complex",
    location: "Sharjah, UAE",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Industrial Warehouse",
    location: "Ajman, UAE",
    image: "https://images.unsplash.com/photo-1669003750747-3f139e115bfb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Projects = () => {
  return (
    <section className="w-full bg-gray-100 py-16 px-4 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="uppercase text-3xl sm:text-4xl font-serif font-semibold text-gray-800">
            Our Projects
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Explore our portfolio of completed and ongoing construction projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5">
               
                <h3 className="text-xl font-semibold text-gray-800 mt-1">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  📍 {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
