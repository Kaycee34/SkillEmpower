import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
          {/* About SkillEmpower */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">About SkillEmpower</h3>
            <p className="text-sm">
              At SkillEmpower, we believe in unlocking the potential within everyone. We provide accessible,
              high-quality training to individuals and organizations, helping them gain the knowledge and skills
              needed to excel in today’s competitive digital landscape.
            </p>
            <p className="text-sm mt-2">
              Our mission is to empower people with the tools they need to succeed—whether you’re starting a new
              career, building your business, or enhancing your expertise in a specific domain.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/aboutus" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/contactus" className="hover:text-white transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="/courses" className="hover:text-white transition">
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
                <a href="mailto:support@skillempower.com">support@skillempower.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-gray-400" />
                <a href="tel:12345678901">+1 (234) 567-8901</a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span>123 Empowerment Blvd, NY</span>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
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
