import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import logo from '../../public/skillempower.png';

const NavbarDesktop = () => {
  return (
    <div className="flex justify-between items-center px-6 py-3 bg-white shadow-md font-semibold">
      {/* Logo Section */}
      <div className="flex items-center">
        <a href="/" className="text-lg font-bold text-gray-800">
          {/* logo */}
          <img
            src={logo}
            alt="SkillEmpower"
            className="mr-2 h-14 object-contain"
          />
        </a>
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center space-x-6">
        <Link to="/" className="flex items-center gap-1 hover:text-gray-600 text-base">
          <Home size={20} className="text-purple-500" />
          Home
        </Link>
        <Link to="/courses" className="hover:text-gray-600 text-base">
        Programs
        </Link>
        <Link to="/services" className="hover:text-gray-600 text-base">
          Services
        </Link>
        <Link to="/aboutus" className="hover:text-gray-600 text-base">
          About Us
        </Link>
        <Link to="/contactus" className="hover:text-gray-600 text-base">
          Contact Us
        </Link>
      </nav>

      {/* Register Link */}
      <div>
        <Link
          to="/register"
          className="flex items-center gap-2 border border-purple-500 px-3 py-2 rounded-xl text-purple-600 hover:bg-purple-100 transition"
        >
          <span>Register</span>
        </Link>
      </div>
    </div>
  );
};

export default NavbarDesktop;
