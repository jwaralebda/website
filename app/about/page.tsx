import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="uppercase text-3xl sm:text-4xl font-serif font-semibold text-gray-800 mb-6">
              About Us
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              JWAR AL EBDAA is a Dubai-based contracting company established in 2025,
              specialising in building structures and infrastructure works. We are
              committed to supporting the UAE’s rapid development by delivering
              durable, efficient, and high-quality construction solutions.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our team of experienced engineers, supervisors, and project professionals
              ensures precise execution, timely delivery, and strict adherence to
              safety and quality standards. From structural construction to
              infrastructure development, we focus on building strong foundations
              that support sustainable growth and long-term value.
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
              src="https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?q=80&w=764&auto=format&fit=crop"
              alt="About Construction Company"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* MESSAGES SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* CEO MESSAGE */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
              CEO’s Message
            </h3>
            <p className="text-gray-700 leading-relaxed">
              At Jwar Al Ebdaa, we are driven by a clear vision — to deliver exceptional
              construction and infrastructure solutions that shape Dubai’s future.
              Since our establishment in 2025, we have upheld the highest standards
              of quality, safety, and innovation in every project.
              <br /><br />
              We believe true success lies not only in building structures, but in
              building trust, partnerships, and a lasting contribution to the UAE’s
              sustainable growth.
            </p>
          </div>

          {/* MANAGING DIRECTOR MESSAGE */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
              Message from the Managing Director
            </h3>
            <p className="text-gray-700 leading-relaxed">
              At Jwar Al Ebdaa, we are committed to delivering reliable building
              structures and infrastructure solutions that support Dubai’s continued
              growth. Since our establishment in 2025, our focus has been on quality,
              safety, and timely project delivery.
              <br /><br />
              We believe in building lasting relationships through trust,
              transparency, and professional excellence, while contributing to a
              stronger and more sustainable future for the UAE.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;
