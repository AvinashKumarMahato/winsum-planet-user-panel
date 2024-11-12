// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year

    return (
        <footer className="bg-white rounded-lg shadow mt-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © {currentYear} Made with <span className="text-red-500">❤️</span> by 
                    <Link to="https://www.linkedin.com/in/avinash-mahato-58944b193/" target="_blank" rel="noopener noreferrer" className="hover:underline ml-1">Avinash</Link>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link to="/privacy-policy" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="/terms-and-conditions" className="hover:underline me-4 md:me-6">Terms & Conditions</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
