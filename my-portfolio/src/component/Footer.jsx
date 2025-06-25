import React from 'react';
import { FaFacebook, FaGit, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
      <div className="bg-rose-800/30 py-6 text-white text-center">
  <h2 className="text-xl font-semibold mb-4 uppercase tracking-wider">Follow us on</h2>

  <div className="flex justify-center gap-6 mb-6">
    <a
      href="https://www.linkedin.com/in/joynal-abedin-web-dev/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-rose-500 p-3 rounded-full hover:scale-110 transition"
    >
      <FaLinkedin className="text-white text-xl" />
    </a>

    <a
      href="https://github.com/Joynal-Abedin85"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-rose-500 p-3 rounded-full hover:scale-110 transition"
    >
      <FaGithub className="text-white text-xl" />
    </a>

    <a
      target="_blank"
      rel="noopener noreferrer"
      className="bg-rose-500 p-3 rounded-full hover:scale-110 transition"
    >
      <FaFacebook className="text-white text-xl" />
    </a>
  </div>

  <div className="w-1/2 mx-auto border-t border-white/30"></div>
</div>
    );
};

export default Footer;