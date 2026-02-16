import Image from "next/image";
import Nav from "./components/Nav";
import Projects from "./components/projects";

import Link from "next/link";

export default function Home() {
 
  return (
    <>
 

      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen">
        {/* Background Image */}
        <Image
          src="/Hero.jpg"
          alt="Construction Site"
          fill
          priority
          className="object-cover object-top"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/80 flex items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <h1 className="text-white font-serif font-semibold 
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
              Building Your Dreams with <span className="text-yellow-400">Quality & Trust</span>
            </h1>

            <p className="text-white/90 mt-4 
              text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif">
              Residential • Commercial • Industrial
            </p>

            <div className="mt-6 flex justify-center gap-4 flex-wrap">
              <Link href={"/contact"}  className="px-6 py-3 rounded-full bg-yellow-500 text-black font-medium 
                hover:bg-black hover:text-white transition-all duration-300">
                Get a Quote
              </Link>

              <Link href={"/contact"} className="px-6 py-3 rounded-full border border-white text-white 
                hover:bg-white hover:text-black transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-gray-100 w-full px-4 sm:px-8 md:px-12 py-12 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-black mb-6">
            Who We Are
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed pb-10">
            Jwar Al Ebdaa is a leading UAE-based contractor specialising in civil engineering,
            building and MEP in both the GCC and beyond. We are proud to have contributed to
            iconic infrastructure projects such as Palm Jumeirah, Business Bay, Yas Island,
            Dubai Water Canal Project, Dubai Airports, Parallel Roads, and Expo 2020.
          </p>

          <Link href={"/About"} className="mt-8 px-8 py-3 bg-yellow-500 rounded-full text-lg font-medium
            hover:bg-black hover:text-white transition-all duration-300">
            About Us
          </Link>
        </div>
      </section>
{/*why chose use*/}
      <section className="w-full bg-white py-16 px-4 sm:px-8 md:px-12">
  <div className="max-w-7xl mx-auto text-center">
    
    {/* Heading */}
    <h2 className="uppercase text-3xl sm:text-4xl font-serif font-semibold text-gray-800 mb-4">
      Why Choose Us
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
      We deliver excellence through experience, quality, and commitment in every project we build.
    </p>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* Card 1 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
        <div className="text-yellow-500 text-4xl mb-4">🏗️</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Experienced Team
        </h3>
        <p className="text-gray-600">
          Skilled engineers and professionals with years of industry experience.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
        <div className="text-yellow-500 text-4xl mb-4">⏱️</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          On-Time Delivery
        </h3>
        <p className="text-gray-600">
          We ensure projects are completed on schedule without compromising quality.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
        <div className="text-yellow-500 text-4xl mb-4">🧱</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Quality Materials
        </h3>
        <p className="text-gray-600">
          Premium-grade materials used for durability and long-term value.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
        <div className="text-yellow-500 text-4xl mb-4">🤝</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Trusted Partner
        </h3>
        <p className="text-gray-600">
          Transparent communication and customer satisfaction are our top priorities.
        </p>
      </div>

    </div>
  </div>
</section>
<section className="relative w-full py-20 px-4 sm:px-8 md:px-12 bg-black">
  
  {/* Overlay */}
  <div className="absolute inset-0  from-black via-black/80 to-black">
  <img src="./logo.jpg" alt="" />
  </div>

  <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
    
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold mb-4">
      Let’s Build With Us
    </h2>

    <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
      From concept to completion, we deliver quality construction solutions
      tailored to your vision.
    </p>

    <Link href={"/contact"}
      className="px-10 py-4 bg-yellow-500 text-black text-lg font-medium rounded-full
      hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
    >
      Get Quote
    </Link>

  </div>
</section>

<Projects></Projects>

    </>
  );
}
