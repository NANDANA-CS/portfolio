import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#000000] to-[#0c0b2c] text-white py-6">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center space-y-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Nandana C S. All rights reserved.</p>

        <div className="flex space-x-4">
          <a
            href="https://github.com/NANDANA-CS"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#38bdf8] transition-colors duration-300"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/nandana-cs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0A66C2] transition-colors duration-300"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
