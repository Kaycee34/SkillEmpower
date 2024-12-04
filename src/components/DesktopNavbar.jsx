import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
// import logo from '../assets/SkillEmpowerLogo.png';

const NavbarDesktop = () => {
  return (
    <div className="flex justify-between items-center px-6 py-3 bg-white shadow-md font-semibold">
      {/* Logo Section */}
      {/* <div className="flex items-center">
        <a href="/">
          <img
            src={logo}
            alt="SkillEmpower"
            className="mr-2 h-12 object-contain" // Adjust height here
          />
        </a>
      </div> */}

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="flex justify-center items-center gap-8">
          {["Home", "Courses", "Services", "Programs"].map((item, index) => (
            <li key={index}>
              {console.log(index)}
              <Link
                to={`/${item.toLowerCase()}`}
                className="flex items-center gap-2 text-black hover:text-purple-600 transition"
              >
                {item === "Home" && (
                  <Home size={18} className="text-purple-600" />
                )}
                <span>{item}</span>
              </Link>
            </li>
          ))}
        </ul>
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
