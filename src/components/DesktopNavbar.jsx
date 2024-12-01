import { Link } from 'react-router-dom'; // For navigation routing
import { Home } from 'lucide-react'; // For icons

const NavbarDesktop = () => {
  return (
    <div className="flex justify-between items-center px-8 py-2 font-poppins font-bold">
      {/* Logo Section */}
      <h1 className="text-black font-roboto text-2xl py-2 px-4 rounded-md">
        SkillEmpower
      </h1>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="flex justify-center items-center gap-7">
          <li>
            <Link to="/" className="flex items-center cursor-pointer gap-2 border border-purple-500 px-3 py-2 rounded">
              <span>Home</span>
              <Home size={18} className="text-purple-600" />
            </Link>
          </li>
          <li>
            <Link to="/courses" className="flex items-center cursor-pointer">
              <span>Courses</span>
            </Link>
          </li>
          <li>
            <Link to="/services" className="flex items-center cursor-pointer">
              <span>Services</span>
            </Link>
          </li>
          <li>
            <Link to="/programs" className="flex items-center cursor-pointer">
              <span>Programs</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Register Link */}
      <div>
        <Link to="/register" className="flex items-center cursor-pointer gap-2 border border-purple-500 px-3 py-2 rounded">
          <span>Register</span>
        </Link>
      </div>
    </div>
  );
};

export default NavbarDesktop;
