import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ImagiNationDashboard from './pages/ImagiNationDashboard';
import HoodieEconomyVisualization from './pages/HoodieEconomyVisualization';
import HoodieExchangeDashboard from './pages/HoodieExchangeDashboard';
import JoyCorpsPage from './pages/JoyCorpsPage';
import CitizensPage from './pages/CitizensPage';
import ImagiLabsPage from './pages/ImagiLabsPage';
import PresidentsPage from './pages/PresidentsPage';
import IkSLPage from './pages/IkSLPage';
import ResidentsPage from './pages/ResidentsPage';
import ToolshedPage from './pages/ToolshedPage';
import CustodiansPage from './pages/CustodiansPage';
import GRPValueCalculator from './pages/GRPValueCalculator';
import Sidebar from './components/Sidebar';
import './index.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="App font-sans bg-gray-50 min-h-screen flex flex-row">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <main className="flex-1 min-w-0 w-full max-w-6xl mx-auto px-2 sm:px-4 md:px-8 py-4 md:py-8 transition-all duration-200 overflow-x-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<ImagiNationDashboard />} />
          <Route path="/hoodie-economy" element={<HoodieEconomyVisualization />} />
          <Route path="/hoodie-exchange" element={<HoodieExchangeDashboard />} />
          <Route path="/joy-corps" element={<JoyCorpsPage />} />
          <Route path="/citizens" element={<CitizensPage />} />
          <Route path="/imagi-labs" element={<ImagiLabsPage />} />
          <Route path="/presidents" element={<PresidentsPage />} />
          <Route path="/iksl" element={<IkSLPage />} />
          <Route path="/residents" element={<ResidentsPage />} />
          <Route path="/toolshed" element={<ToolshedPage />} />
          <Route path="/custodians" element={<CustodiansPage />} />
          <Route path="/grp-calculator" element={<GRPValueCalculator />} />
        </Routes>
      </main>
    </div>
  );
}

export default App; 