import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-5">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Skill Empower Section */}
        <div className="footer-section">
          <h3 className="text-xl font-semibold text-purple-500 mb-4">About Skill Empower</h3>
          <p className="text-sm text-gray-400">
            Skill Empower is dedicated to providing tools, resources, and guidance
            to help individuals enhance their skills and grow in their careers. Our mission is to make
            learning accessible and empower people to unlock their full potential.
          </p>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h3 className="text-xl font-semibold text-purple-500 mb-4">Our Services</h3>
          <ul className="text-sm text-gray-400">
            <li><a href="#courses" className="hover:text-purple-500">Courses & Workshops</a></li>
            <li><a href="#mentorship" className="hover:text-purple-500">Personal Mentorship</a></li>
            <li><a href="#community" className="hover:text-purple-500">Community Support</a></li>
            <li><a href="#resources" className="hover:text-purple-500">Learning Resources</a></li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="footer-section">
          <h3 className="text-xl font-semibold text-purple-500 mb-4">Contact Us</h3>
          <p className="text-sm text-gray-400">Email: <a href="mailto:info@skillempower.com" className="hover:text-purple-500">info@skillempower.com</a></p>
          <p className="text-sm text-gray-400">Phone: +1 (234) 567-890</p>
        </div>

        {/* Social Media Links Section */}
        <div className="footer-section">
          <h3 className="text-xl font-semibold text-purple-500 mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500">
              <i className="fab fa-linkedin text-2xl"></i> LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500">
              <i className="fab fa-github text-2xl"></i> GitHub
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500">
              <i className="fab fa-twitter text-2xl"></i> Twitter
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500">
              <i className="fab fa-facebook text-2xl"></i> Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 border-t border-gray-700 pt-4">
        <p className="text-center text-sm text-gray-400">&copy; 2024 Skill Empower. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
