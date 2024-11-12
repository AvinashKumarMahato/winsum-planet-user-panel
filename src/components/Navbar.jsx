import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 style={{ fontFamily: 'DynaPuff, sans-serif', fontSize: '1.75rem' }} className="text-blue-700">
              Winsum Planet
            </h1>
          </Link>

          {/* Centered Nav Links */}
          <div className="flex-1 flex justify-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-700 text-lg font-semibold px-4 py-2 rounded transition duration-300 ease-in-out"
            >
              Jobs
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-blue-700 text-lg font-semibold px-4 py-2 rounded transition duration-300 ease-in-out"
            >
              Blogs
            </Link>
            <Link
              to="/about-us"
              className="text-gray-700 hover:text-blue-700 text-lg font-semibold px-4 py-2 rounded transition duration-300 ease-in-out"
            >
              About Us
            </Link>
            <Link
              to="/contact-us"
              className="text-gray-700 hover:text-blue-700 text-lg font-semibold px-4 py-2 rounded transition duration-300 ease-in-out"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
