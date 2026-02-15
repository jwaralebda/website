import React from "react";

const projects = [
  {
    id: 1,
    title: "Luxury Residential Villa",
    category: "Residential",
    location: "Dubai, UAE",
    image: "/projects/project1.jpg",
  },
  {
    id: 2,
    title: "Commercial Office Tower",
    category: "Commercial",
    location: "Abu Dhabi, UAE",
    image: "/projects/project2.jpg",
  },
  {
    id: 3,
    title: "Apartment Housing Project",
    category: "Residential",
    location: "Sharjah, UAE",
    image: "/projects/project3.jpg",
  },
  {
    id: 4,
    title: "Industrial Warehouse",
    category: "Industrial",
    location: "Ajman, UAE",
    image: "/projects/project4.jpg",
  },
  {
    id: 5,
    title: "Shopping Complex",
    category: "Commercial",
    location: "Dubai, UAE",
    image: "/projects/project5.jpg",
  },
  {
    id: 6,
    title: "Factory Construction",
    category: "Industrial",
    location: "Ras Al Khaimah, UAE",
    image: "/projects/project6.jpg",
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
                <span className="text-sm text-yellow-500 font-medium">
                  {project.category}
                </span>
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
