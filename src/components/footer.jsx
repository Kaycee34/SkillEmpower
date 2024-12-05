import {Mail, Phone, MapPin} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
          {/* About SkillEmpower */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">SkillEmpower</h3>
            <p className="text-sm">
              Empowering individuals and teams with the skills they need to thrive in today’s digital world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-white transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-gray-400" />
                <span>support@skillempower.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-gray-400" />
                <span>+1 (234) 567-8901</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span>123 Empowerment Blvd, NY</span>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          {/* <div>
            <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                < className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Twitter className="w-6 h-6" />
              </a> 
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <LinkedIn className="w-6 h-6" />
              </a>
            </div> */}
          {/* </div> */}
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>© {new Date().getFullYear()} SkillEmpower. All Rights Reserved.</p>
          <div className="space-x-4">
            <a href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
