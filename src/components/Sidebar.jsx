import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  ChevronLeft,
  ChevronRight,
  Home,
  BarChart2,
  Smile,
  Users,
  School,
  Crown,
  Globe,
  UserCheck,
  Wrench,
  Anchor,
  Calculator,
  Repeat
} from "lucide-react";

const navLinks = [
  { to: "/", label: "Home", icon: <Home size={20} /> },
  { to: "/dashboard", label: "Dashboard", icon: <BarChart2 size={20} /> },
  { to: "/hoodie-economy", label: "Hoodie Economy", icon: <Repeat size={20} /> },
  { to: "/joy-corps", label: "Joy Corps", icon: <Smile size={20} /> },
  { to: "/citizens", label: "Citizens", icon: <Users size={20} /> },
  { to: "/imagi-labs", label: "IMAGI-Labs", icon: <School size={20} /> },
  { to: "/presidents", label: "Presidents", icon: <Crown size={20} /> },
  { to: "/iksl", label: "IKSL", icon: <Globe size={20} /> },
  { to: "/residents", label: "Residents", icon: <UserCheck size={20} /> },
  { to: "/toolshed", label: "Toolshed", icon: <Wrench size={20} /> },
  { to: "/custodians", label: "Custodians", icon: <Anchor size={20} /> },
  { to: "/grp-calculator", label: "GRP Calculator", icon: <Calculator size={20} /> },
  { to: "/hoodie-exchange", label: "Hoodie Exchange", icon: <Repeat size={20} /> },
];

const Sidebar = ({ open, setOpen }) => {
  const [collapsed, setCollapsed] = useState(false);
  // Sidebar width classes
  const sidebarWidth = collapsed ? "w-16" : "w-44 sm:w-56 md:w-60";
  // On mobile, always expanded
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <>
      {/* Hamburger for mobile, only when sidebar is closed */}
      {!open && (
        <button
          className="md:hidden fixed top-4 left-3 z-50 bg-white/90 backdrop-blur rounded p-2 shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
          onClick={() => setOpen(true)}
          aria-label="Open sidebar menu"
        >
          <Menu size={24} />
        </button>
      )}
      {/* Sidebar */}
      <aside
        className={`fixed md:static left-0 top-0 h-full md:h-auto ${sidebarWidth} flex-shrink-0 z-40 px-2 sm:px-4 py-4 sm:py-6 bg-white/95 backdrop-blur border-r border-gray-200 flex flex-col transition-all duration-200 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:block`}
      >
        {/* Mobile: sticky AIME button at top, always expanded */}
        <div className="md:hidden sticky top-0 z-10 bg-white/95 pb-2 flex items-center justify-between">
          <a
            href="https://aimementoring.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg shadow font-semibold text-base text-center transition duration-300 ease-in-out hover:from-purple-600 hover:via-pink-400 hover:to-indigo-500 hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
          >
            AIME website
          </a>
        </div>
        {/* Desktop: app title and AIME button */}
        <div className={`mb-8 flex flex-col gap-3 items-start hidden md:flex ${collapsed ? "items-center" : ""}`}>
          {!collapsed && (
            <span className="text-2xl font-bold text-gray-900 tracking-tight">IMAGI-NATION Dashboard</span>
          )}
          <a
            href="https://aimementoring.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white ${collapsed ? "px-2 py-2 text-xs" : "px-4 py-2 text-base"} rounded-lg shadow font-semibold transition duration-300 ease-in-out hover:from-purple-600 hover:via-pink-400 hover:to-indigo-500 hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 flex items-center justify-center`}
            style={{ width: collapsed ? 40 : "auto", textAlign: "center" }}
          >
            {collapsed ? <span className="sr-only">Back to the AIME website</span> : "Back to the AIME website"}
          </a>
        </div>
        {/* Navigation Links: only show labels on desktop if not collapsed, always show on mobile */}
        <nav className={`flex flex-col gap-1 flex-1 ${collapsed && !isMobile ? "items-center" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center ${collapsed && !isMobile ? "justify-center" : "gap-2"} px-4 py-2 rounded-lg text-sm font-medium transition-colors
                hover:bg-indigo-100 text-indigo-700 ${isActive ? "bg-indigo-200 text-indigo-800 font-semibold" : ""}`
              }
              onClick={() => setOpen(false)}
              title={link.label}
            >
              {link.icon}
              {(!collapsed || isMobile) && <span className="inline">{link.label}</span>}
            </NavLink>
          ))}
        </nav>
        {/* Collapse/Expand Button (desktop only) */}
        <button
          className={`hidden md:flex items-center justify-center mt-6 mb-2 p-2 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors ${collapsed ? "mx-auto" : "ml-auto"}`}
          onClick={() => setCollapsed((c) => !c)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
        {/* Mobile: Close chevron at bottom */}
        {open && (
          <button
            className="md:hidden flex items-center justify-center gap-2 w-full mt-4 mb-2 p-3 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 text-indigo-700 font-semibold text-base transition-colors"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <ChevronLeft size={24} />
            <span>Close menu</span>
          </button>
        )}
      </aside>
      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar; 