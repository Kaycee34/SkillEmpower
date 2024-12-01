import { AlignLeft, CircleUserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const MobileNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="relative">
      <nav className="flex justify-between items-center px-8 py-2">
        <div onClick={toggleSidebar} className="cursor-pointer">
          <AlignLeft size={24} className="text-purple-600" />
        </div>

        <h1 className="text-xl font-bold">SkillEmpower</h1>

        <div>
          <CircleUserRound size={24} className="text-purple-600 cursor-pointer" />
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-50`}>
        <div className="flex flex-col h-full">
          <button onClick={toggleSidebar} className="self-end p-4 text-gray-700 hover:text-gray-900">
            ✕
          </button>
          <ul className="flex flex-col items-center justify-center flex-grow text-lg text-gray-700">
            <li className="py-4">
              <Link to="/" onClick={toggleSidebar}>Home</Link>
            </li>
            <li className="py-4">
              <Link to="/courses" onClick={toggleSidebar}>Courses</Link>
            </li>
            <li className="py-4">
              <Link to="/services" onClick={toggleSidebar}>Services</Link>
            </li>
            <li className="py-4">
              <Link to="/programs" onClick={toggleSidebar}>Programs</Link>
            </li>
            <li className="py-4">
              <Link to="/register" onClick={toggleSidebar}>Register</Link>
            </li>
          </ul>
        </div>
      </div>

      {isSidebarOpen && (
        <div onClick={toggleSidebar} className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}
    </div>
  );
};

export default MobileNavbar;
