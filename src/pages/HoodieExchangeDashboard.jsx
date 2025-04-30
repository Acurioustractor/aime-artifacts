import React, { useState, useMemo } from 'react';
import hoodieData from '../data/hoodieData.json';
import { Search, ChevronDown, ChevronUp, ExternalLink, Image as ImageIcon, Filter, X } from 'lucide-react';

// Helper function to extract URL from markdown link format like "Name (URL)"
const extractUrl = (fieldValue) => {
  if (!fieldValue || typeof fieldValue !== 'string') return null;
  const match = fieldValue.match(/\(([^)]+)\)/);
  return match ? match[1] : null;
};

// Helper function to parse percentage string to number
const parsePercentage = (percentageStr) => {
  if (!percentageStr || typeof percentageStr !== 'string') return 0;
  return parseFloat(percentageStr.replace('%', '')) || 0;
};

// Component for progress bars
const ProgressBar = ({ value, color = 'bg-blue-500' }) => (
  <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
    <div className={`${color} h-1.5 rounded-full`} style={{ width: `${value}%` }}></div>
  </div>
);

// Main Dashboard Component
const HoodieExchangeDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [sortConfig, setSortConfig] = useState({ key: 'Hoodie Name', direction: 'ascending' });
  
  // Preprocess data to extract URLs and parse percentages
  const processedData = useMemo(() => {
    return hoodieData.map(item => ({
      ...item,
      hoodieImageUrl: extractUrl(item['Hoodie Design']),
      impactImageUrl: extractUrl(item['Impact Snapshot (photo)']),
      designPercent: parsePercentage(item['Design Phase']),
      devPercent: parsePercentage(item['Development Phase']),
      prodPercent: parsePercentage(item['Production Phase']),
      releasePercent: parsePercentage(item['Release Phase']),
    }));
  }, []); // Run only once

  const categories = useMemo(() => {
    const allCategories = new Set(processedData.map(item => item['Category Area']));
    return ['All', ...Array.from(allCategories).sort()];
  }, [processedData]);

  const statuses = ['All', 'Live', 'In Development']; // Assuming these are the main statuses

  const filteredAndSortedData = useMemo(() => {
    let filteredData = processedData;

    // Filter by search term
    if (searchTerm) {
      filteredData = filteredData.filter(item => 
        item['Hoodie Name'].toLowerCase().includes(searchTerm.toLowerCase()) ||
        item['Description (one sentence)'].toLowerCase().includes(searchTerm.toLowerCase()) ||
        item['Category Area'].toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filteredData = filteredData.filter(item => item['Category Area'] === selectedCategory);
    }

    // Filter by status
    if (selectedStatus !== 'All') {
      filteredData = filteredData.filter(item => item['Live/Development'] === selectedStatus);
    }

    // Sort data
    if (sortConfig !== null) {
      filteredData.sort((a, b) => {
        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];

        // Basic comparison for strings/numbers
        if (aValue < bValue) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return filteredData;
  }, [processedData, searchTerm, selectedCategory, selectedStatus, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return <Filter size={14} className="opacity-50" />;
    return sortConfig.direction === 'ascending' ? <ChevronUp size={14} /> : <ChevronDown size={14} />;
  };

  const SortButton = ({ fieldKey, label }) => (
    <button 
      onClick={() => requestSort(fieldKey)}
      className={`flex items-center px-2 py-1 text-xs rounded hover:bg-gray-200 ${sortConfig.key === fieldKey ? 'bg-gray-200 font-semibold' : 'bg-gray-100'}`}
    >
      {label}
      <span className="ml-1">{getSortIcon(fieldKey)}</span>
    </button>
  );

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-2">Hoodie Stock Exchange</h1>
        <p className="text-gray-600 text-sm md:text-base">
          Visualizing AIME's systems change projects represented by hoodies. Each hoodie signifies a project or initiative aiming to shift systems towards a more equitable and nature-centred world. Explore the status, impact, and potential of each.
        </p>
      </header>

      {/* Filters and Search Section */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow-sm flex flex-wrap gap-4 items-center">
        {/* Search Input */}
        <div className="relative flex-grow min-w-[200px]">
          <input 
            type="text"
            placeholder="Search by name, category, description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <X size={18} />
            </button>
          )}
        </div>
        
        {/* Category Filter */}
        <div className="flex-shrink-0">
          <label htmlFor="category-filter" className="sr-only">Category</label>
          <select 
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="py-2 px-3 border border-gray-300 bg-white rounded-lg text-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            {categories.map(cat => <option key={cat} value={cat}>{cat === 'All' ? 'All Categories' : cat}</option>)}
          </select>
        </div>

        {/* Status Filter */}
        <div className="flex-shrink-0">
          <label htmlFor="status-filter" className="sr-only">Status</label>
          <select 
            id="status-filter"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="py-2 px-3 border border-gray-300 bg-white rounded-lg text-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            {statuses.map(stat => <option key={stat} value={stat}>{stat}</option>)}
          </select>
        </div>

        {/* Sort Options */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-gray-500 mr-1">Sort by:</span>
          <SortButton fieldKey="Hoodie Name" label="Name" />
          <SortButton fieldKey="Category Area" label="Category" />
          <SortButton fieldKey="Completion Date" label="Date" />
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedData.length > 0 ? (
          filteredAndSortedData.map((hoodie, index) => (
            <div key={hoodie['Hoodie Unique Name'] || index} className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200">
              {/* Card Header with Image */}
              <div className="relative h-40 bg-gray-200 flex items-center justify-center">
                {hoodie.hoodieImageUrl ? (
                  <img 
                    src={hoodie.hoodieImageUrl} 
                    alt={`${hoodie['Hoodie Name']} design`} 
                    className="object-contain h-full w-full p-2" 
                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                  />
                ) : null}
                <div className={`absolute inset-0 ${hoodie.hoodieImageUrl ? 'hidden' : 'flex'} items-center justify-center bg-gray-100 text-gray-400`}>
                   <ImageIcon size={40} />
                 </div>
                 <span className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-semibold ${hoodie['Live/Development'] === 'Live' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                   {hoodie['Live/Development']}
                 </span>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-grow">
                <p className="text-xs text-indigo-600 font-medium mb-1 uppercase tracking-wide">{hoodie['Category Area']}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate" title={hoodie['Hoodie Name']}>{hoodie['Hoodie Name']}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2" title={hoodie['Description (one sentence)']}>{hoodie['Description (one sentence)']}</p>
                
                {/* Progress Section */}
                <div className="mb-3">
                  <p className="text-xs font-medium text-gray-500 mb-1">Progress:</p>
                  <div className="grid grid-cols-4 gap-x-2 gap-y-1 text-xs">
                    <div title={`Design: ${hoodie.designPercent}%`}><ProgressBar value={hoodie.designPercent} color="bg-blue-500"/>D</div>
                    <div title={`Develop: ${hoodie.devPercent}%`}><ProgressBar value={hoodie.devPercent} color="bg-purple-500"/>Dv</div>
                    <div title={`Produce: ${hoodie.prodPercent}%`}><ProgressBar value={hoodie.prodPercent} color="bg-pink-500"/>P</div>
                    <div title={`Release: ${hoodie.releasePercent}%`}><ProgressBar value={hoodie.releasePercent} color="bg-green-500"/>R</div>
                  </div>
                </div>

                {/* Impact Section */}
                <div className="text-sm space-y-1 mb-3">
                  <p><span className="font-semibold text-gray-700">Impact:</span> <span className="text-gray-600">{hoodie['Impact One Liner']}</span></p>
                  <p><span className="font-semibold text-gray-700">Potential:</span> <span className="text-gray-600">{hoodie['Impact Potential']}</span></p>
                  <p><span className="font-semibold text-gray-700">Value:</span> <span className="text-gray-600">{hoodie['Projected $ value (ROI)per unit']}</span></p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-between items-center">
                <span className="text-xs text-gray-500">ETA: {hoodie['Completion Date'] || 'N/A'}</span>
                {hoodie['Resources'] && (
                  <a 
                    href={hoodie['Resources']} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-indigo-600 hover:text-indigo-800 hover:underline flex items-center"
                  >
                    Resources <ExternalLink size={12} className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          )) 
        ) : (
          <p className="text-gray-500 col-span-full text-center py-10">No hoodies match the current filters.</p>
        )}
      </div>
    </div>
  );
};

export default HoodieExchangeDashboard; 