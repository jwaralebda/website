import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* LOGO & ABOUT */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <img src="/logo.jpeg" alt="JWAR AL EBDAA Logo" className="w-14" />
            <h2 className="text-2xl font-serif font-semibold">
              Jwar Al Ebdaa
            </h2>
          </div>
          <p className="text-gray-400 leading-relaxed">
            A trusted construction company delivering quality residential,
            commercial, and industrial projects with excellence and integrity.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/" className="hover:text-yellow-500">Home</Link></li>
            <li><Link href="/about" className="hover:text-yellow-500">About Us</Link></li>
            <li><Link href="/projects" className="hover:text-yellow-500">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-500">Contact Us</Link></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li>📍 Dubai, UAE</li>
            <li>📞 +971 547879650</li>
            <li>✉️ info@jwaralebdaa.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} JWAR AL EBDAA. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
