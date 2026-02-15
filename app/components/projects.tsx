import React from "react";

const projects = [
  {
    id: 1,
    title: "Residential Villa Project",
    location: "Dubai, UAE",
    image: "/projects/project1.jpg",
  },
  {
    id: 2,
    title: "Commercial Office Building",
    location: "Abu Dhabi, UAE",
    image: "/projects/project2.jpg",
  },
  {
    id: 3,
    title: "Luxury Apartment Complex",
    location: "Sharjah, UAE",
    image: "/projects/project3.jpg",
  },
  {
    id: 4,
    title: "Industrial Warehouse",
    location: "Ajman, UAE",
    image: "/projects/project4.jpg",
  },
];

const Projects = () => {
  return (
    <section className="w-full bg-gray-100 py-16 px-4 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-gray-800">
            Our Projects
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            A showcase of our completed and ongoing construction projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-md bg-white"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-center px-4">
                <div>
                  <h3 className="text-white text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-yellow-500 rounded-full text-lg font-medium
            hover:bg-black hover:text-white transition-all duration-300">
            View All Projects
          </button>
        </div>

      </div>
    </section>
  );
};

export default Projects;
