"use client";

import React, { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-20">
        
        {/* LEFT - LOGO */}
       <Link href={"/"}>
        <div className="flex items-center gap-4">
          <img src="/logo.jpeg" alt="Logo" className="w-14 h-auto" />
          <h1 className="text-xl sm:text-2xl font-serif font-semibold text-gray-700">
            Jwar Al Ebdaa Building Contracting LLC
          </h1>
        </div>
       </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-700">
          <Link href="/" className="hover:text-yellow-500 transition">Home</Link>
          <Link href="/about" className="hover:text-yellow-500 transition">About Us</Link>
          <Link href="/projects" className="hover:text-yellow-500 transition">Projects</Link>
          <Link href="/contact" className="hover:text-yellow-500 transition">Contact Us</Link>
          <Link href="/career" className="hover:text-yellow-500 transition">Careers</Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col items-center gap-6 py-6 text-lg font-medium text-gray-700">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
            <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
            <Link href="/career" onClick={() => setOpen(false)}>Careers</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
