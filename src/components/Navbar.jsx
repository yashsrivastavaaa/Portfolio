import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Scroll to top handler for navigation clicks
  const handleNavClick = () => {
    window.scrollTo(0, 0);
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className="bg-gray-800 sticky top-0 z-40 h-16 flex items-center">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Menu Button - Left */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden text-gray-300 hover:text-white"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Title - Center */}
          <Link
            to="/"
            className="font-mono text-white text-3xl font-bold hover:text-gray-300"
            onClick={handleNavClick}
          >
            Portfolio
          </Link>

          {/* Desktop Menu - Right */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `px-1 py-2 text-sm font-medium transition-colors border-b-2 ${isActive
                    ? "text-white border-white"
                    : "text-gray-300 hover:text-white border-transparent hover:border-gray-500"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        {/* Semi-transparent overlay */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />

        {/* Sidebar Content */}
        <div
          className={`fixed left-0 top-0 h-full w-64 bg-gray-800 shadow-lg transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="p-4 border-b border-gray-700 flex justify-between items-center">
            <h2 className="text-white text-xl font-bold">Menu</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-gray-300 hover:text-white"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="p-4 space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `block p-3 transition-colors border-l-4 ${isActive
                    ? "text-white border-white bg-gray-700"
                    : "text-gray-300 hover:text-white border-transparent hover:border-gray-500"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;