import React from "react";

const Header = () => (
  <header className="w-full bg-white shadow-md px-4 py-2 flex items-center justify-between fixed top-0 left-0 z-50">
    <div className="text-xl font-bold whitespace-nowrap mr-2">IMAGI-NATION Dashboard</div>
    <a
      href="https://aimementoring.com"
      target="_blank"
      rel="noopener noreferrer"
      className="ml-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg shadow font-semibold transition duration-300 ease-in-out hover:from-purple-600 hover:via-pink-400 hover:to-indigo-500 hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
    >
      Back to the AIME website
    </a>
  </header>
);

export default Header; 