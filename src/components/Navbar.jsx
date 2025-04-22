// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="py-4 px-6 flex justify-between items-center ">
      {/* Logo */}
      <div>
        <a href="/" className="text-xl font-bold text-accent">
          InsightHub
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex mt-2 items-center space-x-6">
        <a href="/" className="text-secondary font-sans hover:text-accent">
          Home
        </a>
        <a href="/about" className="text-secondary font-sans hover:text-accent">
          About
        </a>
        <a href="/features" className="text-secondary font-sans hover:text-accent">
          Features
        </a>
        <a href="/pricing" className="text-secondary font-sans hover:text-accent">
          Pricing
        </a>
        <a href="/contact" className="text-secondary font-sans hover:text-accent">
          Contact
        </a>

        {/* Login and Get Started Buttons */}
        <a href="/login" className="text-secondary font-sans hover:text-accent underline focus:outline-none">
          Log In
        </a>
        <a href="/register" className="bg-accent text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition duration-300">
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;