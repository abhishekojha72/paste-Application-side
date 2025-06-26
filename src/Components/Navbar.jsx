
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-gray-300">
            Paste Manager
          </NavLink>
        </div>

       
        <div className="text-white font-semibold text-sm overflow-hidden md:block">
          <div className="marquee">
            Welcome to my Paste Application, created by{" "}
            <span className="text-red-400">ak.pandit.72</span>
          </div>
        </div>

        
        <div className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold"
                : "text-white hover:text-gray-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/pastes"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold"
                : "text-white hover:text-gray-300"
            }
          >
            My Pastes
          </NavLink>
        </div>


        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

