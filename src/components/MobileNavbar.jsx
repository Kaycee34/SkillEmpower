import { AlignLeft, CircleUserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const MobileNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="relative">
      <nav className="flex justify-between items-center px-6 py-3 bg-white shadow-md">
        {/* Sidebar Toggle */}
        <div onClick={toggleSidebar} className="cursor-pointer">
          <AlignLeft size={24} className="text-purple-600" />
        </div>

        {/* Logo */}
        {/* <img
          src={logo}
          alt="SkillEmpower"
          className="h-8 w-auto object-contain" // Adjust height
        /> */}

        {/* User Icon */}
        <div>
          <Link to="/Register">
            <CircleUserRound size={24} className="text-purple-600 cursor-pointer" />
          </Link>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-50`}
      >
        <div className="flex flex-col h-full">
          <button
            onClick={toggleSidebar}
            className="self-end p-4 text-gray-700 hover:text-gray-900"
          >
            ✕
          </button>
          <ul className="flex flex-col items-center justify-center flex-grow text-lg text-black">
            {['Home', 'Courses', 'Services', 'Programs', 'Register'].map((item, index) => (
              <li className="py-4" key={index}>
                <Link to={`/${item.toLowerCase()}`} onClick={toggleSidebar}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </div>
  );
};

export default MobileNavbar;
