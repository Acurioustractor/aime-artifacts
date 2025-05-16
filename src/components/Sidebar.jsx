import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
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
  Repeat,
  Menu,
  X
} from "lucide-react";

const navLinks = [
  { to: "/", label: "Home", icon: <Home size={18} /> },
  { to: "/dashboard", label: "Dashboard", icon: <BarChart2 size={18} /> },
  { to: "/hoodie-economy", label: "Hoodie Economy", icon: <Repeat size={18} /> },
  { to: "/joy-corps", label: "Joy Corps", icon: <Smile size={18} /> },
  { to: "/citizens", label: "Citizens", icon: <Users size={18} /> },
  { to: "/imagi-labs", label: "IMAGI-Labs", icon: <School size={18} /> },
  { to: "/presidents", label: "Presidents", icon: <Crown size={18} /> },
  { to: "/iksl", label: "IKSL", icon: <Globe size={18} /> },
  { to: "/residents", label: "Residents", icon: <UserCheck size={18} /> },
  { to: "/toolshed", label: "Toolshed", icon: <Wrench size={18} /> },
  { to: "/custodians", label: "Custodians", icon: <Anchor size={18} /> },
  { to: "/grp-calculator", label: "GRP Calculator", icon: <Calculator size={18} /> },
  { to: "/hoodie-exchange", label: "Hoodie Exchange", icon: <Repeat size={18} /> },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden fixed top-3 left-3 z-50 bg-white rounded p-2 shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle sidebar menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-56 bg-white z-40 px-2 border-r border-gray-200 transition-transform duration-200 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:block`}
      >
        <nav className="flex flex-col gap-1 mt-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors
                hover:bg-indigo-100 text-indigo-700 ${isActive ? "bg-indigo-200 text-indigo-800 font-semibold" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              {link.icon}
              {link.label}
            </NavLink>
          ))}
        </nav>
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