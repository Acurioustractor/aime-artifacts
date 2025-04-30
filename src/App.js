import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom'; // Import NavLink for active styling - removed unused Link
import HomePage from './pages/HomePage'; // Import HomePage
import ImagiNationDashboard from './pages/ImagiNationDashboard';
import HoodieEconomyVisualization from './pages/HoodieEconomyVisualization';
// Import the new pages
import JoyCorpsPage from './pages/JoyCorpsPage';
import CitizensPage from './pages/CitizensPage';
import ImagiLabsPage from './pages/ImagiLabsPage';
import PresidentsPage from './pages/PresidentsPage';
import IkSLPage from './pages/IkSLPage';
import ResidentsPage from './pages/ResidentsPage';
import ToolshedPage from './pages/ToolshedPage';
import CustodiansPage from './pages/CustodiansPage';
import GRPValueCalculator from './pages/GRPValueCalculator'; // Import GRP Calculator
import './index.css';

function App() {
  const navLinkClasses = "px-3 py-1 rounded hover:bg-indigo-100 transition-colors text-sm";
  const activeNavLinkClasses = "bg-indigo-200 text-indigo-800 font-semibold";

  return (
    <div className="App font-sans">
      {/* Navigation Bar */}
      <nav className="bg-gray-100 p-3 shadow-sm mb-6 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-x-4 gap-y-2 text-indigo-700">
          <NavLink 
            to="/" 
            end // Use end prop for exact match on root path
            className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}
          >
            Home 
          </NavLink>
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}
          >
            Dashboard
          </NavLink>
          <NavLink 
            to="/hoodie-economy" 
            className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}
          >
             Hoodie Economy
          </NavLink>
           <NavLink 
            to="/joy-corps" 
            className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}
           >
             Joy Corps
           </NavLink>
           <NavLink 
            to="/citizens" 
            className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}
           >
             Citizens
           </NavLink>
           <NavLink 
            to="/imagi-labs" 
            className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}
           >
             IMAGI-Labs
           </NavLink>
           <NavLink 
            to="/presidents" 
            className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}
           >
             Presidents
           </NavLink>
           <NavLink 
            to="/iksl" 
            className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}
           >
             IKSL
           </NavLink>
           <NavLink 
            to="/residents" 
            className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}
           >
             Residents
           </NavLink>
           <NavLink 
            to="/toolshed" 
            className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}
           >
             Toolshed
           </NavLink>
           <NavLink 
            to="/custodians" 
            className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}
           >
             Custodians
           </NavLink>
           {/* Add NavLink for GRP Calculator */}
           <NavLink 
            to="/grp-calculator" 
            className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}
           >
             GRP Calculator
           </NavLink>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<ImagiNationDashboard />} />
          <Route path="/hoodie-economy" element={<HoodieEconomyVisualization />} />
          {/* Add routes for the new pages */}
          <Route path="/joy-corps" element={<JoyCorpsPage />} />
          <Route path="/citizens" element={<CitizensPage />} />
          <Route path="/imagi-labs" element={<ImagiLabsPage />} />
          <Route path="/presidents" element={<PresidentsPage />} />
          <Route path="/iksl" element={<IkSLPage />} />
          <Route path="/residents" element={<ResidentsPage />} />
          <Route path="/toolshed" element={<ToolshedPage />} />
          <Route path="/custodians" element={<CustodiansPage />} />
          {/* Add route for GRP Calculator */}
          <Route path="/grp-calculator" element={<GRPValueCalculator />} />
        </Routes>
      </main>
    </div>
  );
}

export default App; 