import React from "react";
import { Menu, X } from "lucide-react";

const Header = ({ sidebarOpen, setSidebarOpen }) => (
  <header className="w-full min-h-[56px] border-b border-gray-200 bg-white/95 backdrop-blur flex items-center justify-between fixed top-0 left-0 z-50 px-2 sm:px-4">
    <div className="flex items-center gap-2 min-w-0">
      {/* Hamburger for mobile */}
      <button
        className="md:hidden flex items-center justify-center mr-2 bg-white/80 backdrop-blur rounded p-2 shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
        style={{ height: 40 }}
        onClick={() => setSidebarOpen((open) => !open)}
        aria-label="Toggle sidebar menu"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <span className="text-lg sm:text-xl font-bold whitespace-nowrap truncate max-w-[50vw] sm:max-w-none">IMAGI-NATION Dashboard</span>
    </div>
    <a
      href="https://aimementoring.com"
      target="_blank"
      rel="noopener noreferrer"
      className="ml-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold text-sm sm:text-base transition duration-300 ease-in-out hover:from-purple-600 hover:via-pink-400 hover:to-indigo-500 hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
    >
      Back to the AIME website
    </a>
  </header>
);

export default Header; 