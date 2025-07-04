import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & Tagline */}
        <div>
          <h1 className="text-2xl font-extrabold text-indigo-500 mb-2">
            Innovation’S
          </h1>
          <p className="text-sm text-gray-400">
            Transforming education with AI-powered student management systems.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#home" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#solutions" className="hover:text-white">
                Solutions
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#why" className="hover:text-white">
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-white">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>Email: support@innovations.com</li>
            <li>Phone: +91 9876543210</li>
            <li>Warangal, Telangana, India</li>
          </ul>
        </div>

        {/* Social / Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl text-gray-400">
            <a href="https://linkedin.com" className="hover:text-indigo-400">
              <FaLinkedin />
            </a>
            <a href="https://github.com" className="hover:text-indigo-400">
              <FaGithub />
            </a>
            <a href="https://facebook.com" className="hover:text-indigo-400">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" className="hover:text-indigo-400">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Innovation’S. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
