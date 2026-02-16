import React from "react";
// import { careerData } from "./careerData";

const Career = () => {
    const careerData = {
  whyWorkWithUs: [
    {
      title: "Professional Growth",
      description:
        "Opportunities to learn, grow, and advance your career in construction and infrastructure."
    },
    {
      title: "Safe Work Environment",
      description:
        "Strong focus on safety standards and best practices across all projects."
    },
    {
      title: "Team Culture",
      description:
        "Work with experienced professionals in a collaborative and respectful environment."
    },
    {
      title: "Challenging Projects",
      description:
        "Be part of meaningful projects that contribute to the UAE’s development."
    }
  ],

  openings: [
    {
      id: 1,
      title: "Steel fixer",
      location: "Dubai, UAE",
      type: "Full Time"
    },
    {
      id: 2,
      title: "Carpenter",
      location: "Dubai, UAE",
      type: "Full Time"
    },
     {
      id: 2,
      title: "Civil Foreman",
      location: "Dubai, UAE",
      type: "Full Time"
    },
  
  
  ]
};
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-gray-800 mb-6">
            Careers at Jwar Al Ebdaa
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Join our growing team and be part of building high-quality structures
            and infrastructure that support Dubai’s development and the UAE’s
            sustainable future.
          </p>
        </div>

        {/* WHY WORK WITH US */}
        <div>
          <h2 className="text-3xl font-serif font-semibold text-gray-800 mb-10 text-center">
            Why Work With Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {careerData.whyWorkWithUs.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* OPEN POSITIONS */}
        <div>
          <h2 className="text-3xl font-serif font-semibold text-gray-800 mb-10 text-center">
            Current Openings
          </h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            {careerData.openings.map((job) => (
              <div
                key={job.id}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50 p-6 rounded-xl shadow-sm"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {job.location} · {job.type}
                  </p>
                </div>

                <a
  href={`mailto:info@jwaralebdaa.com?subject=Job Application - ${job.title}&body=Dear Hiring Team,%0D%0A%0D%0AI would like to apply for the position of ${job.title}.%0D%0A%0D%0APlease find my CV attached.%0D%0A%0D%0ARegards,%0D%0A`}
  className="mt-4 sm:mt-0 inline-block px-6 py-2 rounded-lg bg-yellow-500 text-white font-medium hover:bg-yellow-600 transition"
>
  Apply via Email
</a>

              </div>
            ))}
          </div>
        </div>

        {/* APPLY CTA */}
        <div className="bg-gray-900 text-white rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-serif font-semibold mb-4">
            Build Your Career With Us
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            If you are passionate about construction, quality, and professional
            excellence, we would love to hear from you.
          </p>

          <a href="mailto:info@jwaralebdaa.com"
            className="inline-block px-8 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-xl hover:bg-yellow-400 transition"
          >
            Send Your CV
          </a>
        </div>

      </div>
    </section>
  );
};

export default Career;
