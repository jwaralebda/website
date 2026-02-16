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
            JWAR AL EBDAA is a Dubai-based contracting company established in 2025, specialising in building structures and infrastructure works. We are committed to supporting the UAE’s rapid development by delivering durable, efficient, and high-quality construction solutions.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Our team of experienced engineers, supervisors, and project professionals ensures precise execution, timely delivery, and strict adherence to safety and quality standards. From structural construction to infrastructure development, we focus on building strong foundations that support sustainable growth and long-term value.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-xl text-center">
              <h3 className="text-2xl font-semibold text-yellow-500">1+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-xl text-center">
              <h3 className="text-2xl font-semibold text-yellow-500">2+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-xl text-center">
              <h3 className="text-2xl font-semibold text-yellow-500">10+</h3>
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
            src="https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Construction Company"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
