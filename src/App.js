import React from 'react';
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
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './index.css';

function App() {
  return (
    <div className="App font-sans">
      <Header />
      <div className="flex pt-20 md:pt-24">
        <Sidebar />
        <main className="flex-1 max-w-7xl mx-auto px-4 py-6">
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
    </div>
  );
}

export default App; 