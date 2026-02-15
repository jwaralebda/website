import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="uppercase text-3xl sm:text-4xl font-serif font-semibold text-gray-800 mb-6">
            About Us
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            JWAR AL EBDAA is a trusted construction company specializing in
            residential, commercial, and industrial projects. With years of
            experience in the construction industry, we are committed to
            delivering high-quality structures that stand the test of time.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Our team of skilled engineers, architects, and project managers
            ensures timely delivery, transparent communication, and superior
            craftsmanship on every project we undertake.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-xl text-center">
              <h3 className="text-2xl font-semibold text-yellow-500">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-xl text-center">
              <h3 className="text-2xl font-semibold text-yellow-500">120+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-xl text-center">
              <h3 className="text-2xl font-semibold text-yellow-500">50+</h3>
              <p className="text-gray-600">Skilled Professionals</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-xl text-center">
              <h3 className="text-2xl font-semibold text-yellow-500">98%</h3>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/about/about.jpg"
            alt="About Construction Company"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
