import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Zap, Users, BookOpen, Globe, Heart, Lightbulb, Anchor, Globe2 } from 'lucide-react';

const GRPValueCalculator = () => {
  const [nodes, setNodes] = useState(500);
  const [valuePerRelation, setValuePerRelation] = useState(10000);
  const [activeTab, setActiveTab] = useState('overview');
  
  // Dunbar scale node values
  const dunbarScales = [5, 15, 35, 150, 500, 1500, 5000];
  
  // Calculate network metrics based on number of nodes
  const calculateNetworkMetrics = (n) => {
    // Number of relations using Metcalfe's Law: n(n-1)/2
    const relations = (n * (n-1)) / 2;
    
    // Network value: relations * value per relation
    const networkValue = relations * valuePerRelation;
    
    return {
      relations,
      networkValue
    };
  };
  
  // Format large numbers as currency
  const formatCurrency = (value) => {
    if (typeof value !== 'number') return value;
    
    if (value >= 1e15) {
      return `$${(value / 1e15).toFixed(2)} Quadrillion`;
    } else if (value >= 1e12) {
      return `$${(value / 1e12).toFixed(2)} Trillion`;
    } else if (value >= 1e9) {
      return `$${(value / 1e9).toFixed(2)} Billion`;
    } else if (value >= 1e6) {
      return `$${(value / 1e6).toFixed(2)} Million`;
    } else if (value >= 1e3) {
      return `$${(value / 1e3).toFixed(2)} Thousand`;
    } else {
      return `$${value.toFixed(2)}`;
    }
  };
  
  // Generate data for dunbar scale chart
  const dunbarChartData = dunbarScales.map(scale => {
    const metrics = calculateNetworkMetrics(scale);
    return {
      nodes: scale,
      relations: metrics.relations,
      value: metrics.networkValue
    };
  });
  
  // Prepare data for relationships chart
  const relationshipData = [
    { name: 'Human to Human', value: 10000, color: '#3B82F6' },
    { name: 'Human to Nature', value: 15000, color: '#22C55E' },
    { name: 'Knowledge Transfer', value: 12000, color: '#F59E0B' },
    { name: 'Cultural Connection', value: 8000, color: '#EC4899' },
    { name: 'Intergenerational', value: 14000, color: '#8B5CF6' }
  ];
  
  // Current node calculation details
  const currentMetrics = calculateNetworkMetrics(nodes);
  
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        IMAGI-NATION: Gross Relational Potential (GRP) Calculator
      </h1>
      <p className="text-gray-600 mb-6">
        Visualizing how IMAGI-NATION values its network using Metcalfe's Law to calculate Gross Relational Potential
      </p>
      
      <div className="flex items-center space-x-2 mb-8">
        <button 
          className={`px-3 py-1 rounded-md ${activeTab === 'overview' ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-700'}`}
          onClick={() => setActiveTab('overview')}
        >
          GRP Overview
        </button>
        <button 
          className={`px-3 py-1 rounded-md ${activeTab === 'calculator' ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-700'}`}
          onClick={() => setActiveTab('calculator')}
        >
          Network Calculator
        </button>
        <button 
          className={`px-3 py-1 rounded-md ${activeTab === 'methodology' ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-700'}`}
          onClick={() => setActiveTab('methodology')}
        >
          Methodology
        </button>
      </div>
      
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">IMAGI-NATION's Relational Economy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  IMAGI-NATION is a digital nation focused on alleviating inequity for humankind and all 
                  other species by turbocharging 6,000 entities who can shift the health of life on Earth.
                </p>
                <p className="text-gray-700 mb-4">
                  These 6,000 entities collectively reach at least 32 million people. Each entity can impact 
                  10,000 people over the course of a lifetime, and IMAGI-NATION helps deepen their impact 
                  to reach 100,000 people and strengthen relations with nature.
                </p>
                <p className="text-gray-700">
                  Through the JOY Corp model and other initiatives, IMAGI-NATION's approach has the 
                  potential to return over $1 Trillion to the global economy through relational value.
                </p>
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                <h3 className="font-semibold text-indigo-800 mb-3">Key Network Components</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Users className="text-blue-500 mt-1 mr-2 flex-shrink-0" size={18}/>
                    <span className="text-gray-700">6,000 entities (Joy Corps, Schools, Indigenous Knowledge Systems Labs)</span>
                  </li>
                  <li className="flex items-start">
                    <Globe className="text-green-500 mt-1 mr-2 flex-shrink-0" size={18}/>
                    <span className="text-gray-700">32 million people reached</span>
                  </li>
                  <li className="flex items-start">
                    <Lightbulb className="text-yellow-500 mt-1 mr-2 flex-shrink-0" size={18}/>
                    <span className="text-gray-700">UNCx5 Algorithm for unlikely connections</span>
                  </li>
                  <li className="flex items-start">
                    <Anchor className="text-indigo-500 mt-1 mr-2 flex-shrink-0" size={18}/>
                    <span className="text-gray-700">Dunbar-based relational scaling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-semibold text-gray-700 mb-3">Network Value at Dunbar Scales</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={dunbarChartData}
                    margin={{ top: 20, right: 30, left: 30, bottom: 50 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="nodes" />
                    <YAxis 
                      tickFormatter={(value) => {
                        if (value >= 1e12) return `${(value/1e12).toFixed(0)}T`;
                        if (value >= 1e9) return `${(value/1e9).toFixed(0)}B`;
                        if (value >= 1e6) return `${(value/1e6).toFixed(0)}M`;
                        if (value >= 1e3) return `${(value/1e3).toFixed(0)}K`;
                        return value;
                      }}
                    />
                    <Tooltip 
                      formatter={(value) => [formatCurrency(value), 'Value']}
                      labelFormatter={(value) => `${value} Nodes`}
                    />
                    <Bar dataKey="value" fill="#6366F1" name="Network Value" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                The value grows exponentially as the network scales according to Metcalfe's Law (n(n-1)/2) multiplied by the relation value.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-semibold text-gray-700 mb-3">Relational Value Distribution</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={relationshipData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      fill="#8884d8"
                      paddingAngle={2}
                      dataKey="value"
                      label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {relationshipData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`$${value}`, 'Value per Relation']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                GRP encompasses various types of relational value, including human-to-human connections, 
                human-to-nature relationships, and knowledge transfer.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">Value Growth by Network Stage</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={dunbarChartData.slice(0, 5)}
                  margin={{ top: 20, right: 30, left: 30, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="nodes" />
                  <YAxis 
                    yAxisId="left"
                    tickFormatter={(value) => {
                      if (value >= 1e9) return `${(value/1e9).toFixed(1)}B`;
                      if (value >= 1e6) return `${(value/1e6).toFixed(1)}M`;
                      if (value >= 1e3) return `${(value/1e3).toFixed(1)}K`;
                      return value;
                    }}
                  />
                  <YAxis 
                    yAxisId="right"
                    orientation="right"
                    tickFormatter={(value) => {
                      if (value >= 1e3) return `${(value/1e3).toFixed(1)}K`;
                      return value;
                    }}
                  />
                  <Tooltip 
                    formatter={(value, name) => {
                      if (name === "Network Value") return [formatCurrency(value), name];
                      return [value.toLocaleString(), name];
                    }}
                  />
                  <Legend />
                  <Line 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="value" 
                    stroke="#8B5CF6" 
                    name="Network Value" 
                    strokeWidth={2}
                  />
                  <Line 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="relations" 
                    stroke="#10B981" 
                    name="Number of Relations" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              As the number of nodes increases, both the number of relations and the network value grow 
              non-linearly, demonstrating the power of relational networks.
            </p>
          </div>
        </div>
      )}
      
      {activeTab === 'calculator' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6 col-span-1">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Network Parameters</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Nodes
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="6000"
                    step="5"
                    value={nodes}
                    onChange={(e) => setNodes(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>5</span>
                    <span>6000</span>
                  </div>
                  <input
                    type="number"
                    min="5"
                    max="6000"
                    value={nodes}
                    onChange={(e) => setNodes(parseInt(e.target.value))}
                    className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Value Per Relation (USD)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="100000"
                    value={valuePerRelation}
                    onChange={(e) => setValuePerRelation(parseInt(e.target.value))}
                    className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                
                <button
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                >
                  Calculate Network Value
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 md:col-span-2">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Network Metrics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-medium text-gray-700 text-sm mb-3">Basic Network Metrics</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-500">Number of Nodes</label>
                      <p className="text-2xl font-bold text-gray-900">{nodes.toLocaleString()}</p>
                    </div>
                    
                    <div>
                      <label className="block text-xs font-medium text-gray-500">Number of Relations</label>
                      <p className="text-2xl font-bold text-gray-900">
                        {currentMetrics.relations.toLocaleString()}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">Using Metcalfe's Law: n(n-1)/2</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                  <h3 className="font-medium text-indigo-800 text-sm mb-3">Network Value</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-indigo-500">Value Per Relation</label>
                      <p className="text-lg font-semibold text-indigo-900">${valuePerRelation.toLocaleString()}</p>
                    </div>
                    
                    <div>
                      <label className="block text-xs font-medium text-indigo-500">Total Network Value</label>
                      <p className="text-3xl font-bold text-indigo-900">
                        {formatCurrency(currentMetrics.networkValue)}
                      </p>
                      <p className="text-xs text-indigo-700 mt-1">
                        Relations × Value Per Relation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg border border-indigo-100">
                <div className="flex items-center mb-2">
                  <h3 className="font-semibold text-indigo-900">Gross Relational Potential (GRP)</h3>
                </div>
                
                <div className="text-center py-4">
                  <div className="text-5xl font-bold text-indigo-900 mb-2">
                    {formatCurrency(currentMetrics.networkValue)}
                  </div>
                  <p className="text-sm text-indigo-700">
                    Total economic value of the IMAGI-NATION network with {nodes.toLocaleString()} nodes
                  </p>
                </div>
                
                <p className="text-xs text-indigo-600 mt-2 italic">
                  "With value of GRP (Gross Relational Potential) of over trillions of $, we believe 
                  after 20 years of evidence based research that we are well placed to help humanity 
                  unlock it's potential and economic prosperity in relation to nature not abstracted from it."
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'methodology' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">GRP Calculation Methodology</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">1. Metcalfe's Law</h3>
                <p className="text-gray-700">
                  The fundamental principle behind GRP is Metcalfe's Law, which states that the value of a 
                  network is proportional to the square of the number of connected users (n²). For a more 
                  precise calculation, we use the formula:
                </p>
                <div className="bg-gray-50 p-3 rounded-md border border-gray-200 my-2 font-mono text-center">
                  Number of relations = n(n-1)/2
                </div>
                <p className="text-gray-700">
                  Where n is the number of nodes in the network. This gives us the number of possible 
                  connections between nodes.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800 mb-2">2. Network Value</h3>
                <p className="text-gray-700">
                  The basic network value is calculated by multiplying the number of relations by the 
                  average value per relation:
                </p>
                <div className="bg-gray-50 p-3 rounded-md border border-gray-200 my-2 font-mono text-center">
                  V = n(A*(n-1)/2)
                </div>
                <p className="text-gray-700">
                  Where A is the average value created by each relation, estimated at $10,000 USD 
                  per relation.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800 mb-2">3. UNCx5 Algorithm</h3>
                <p className="text-gray-700">
                  IMAGI-NATION enhances Metcalfe's Law with the UNCx5 Algorithm, which creates "Unlikely 
                  Connections of Five" - groups of 5 nodes that form especially powerful relationships.
                </p>
                <p className="text-gray-700">
                  Each UNCx5 group is assigned a higher value ($100,000) than regular connections,
                  representing the enhanced value created when unlikely connections form meaningful relationships.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800 mb-2">4. Dunbar-Based Scaling</h3>
                <p className="text-gray-700">
                  IMAGI-NATION uses anthropologist Robin Dunbar's research on relationship limits to 
                  structure its network growth. Key Dunbar numbers include:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 my-2">
                  <li>5 - Core intimate relationships</li>
                  <li>15 - Close friends/family</li>
                  <li>35 - Friends</li>
                  <li>150 - Meaningful social relationships</li>
                  <li>500 - Acquaintances</li>
                  <li>1500 - Recognize faces</li>
                  <li>5000-6000 - Maximum network size for impact calculation</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-gray-800 mb-3">Key Assumptions</h3>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <Globe2 className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18}/>
                <div>
                  <h4 className="font-medium text-gray-800">Nature-Based Marketplace</h4>
                  <p className="text-sm text-gray-600">
                    Estimated $750 billion nature-based marketplace that can be unlocked through 
                    custodial economies centered on natural systems.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Heart className="text-pink-500 mt-1 mr-3 flex-shrink-0" size={18}/>
                <div>
                  <h4 className="font-medium text-gray-800">Well-Being Measurement</h4>
                  <p className="text-sm text-gray-600">
                    R&D value of creating parallel measurement systems to GDP that include JOY, 
                    kindness, nature, and peace - estimated at 1% of global GDP.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <BookOpen className="text-orange-500 mt-1 mr-3 flex-shrink-0" size={18}/>
                <div>
                  <h4 className="font-medium text-gray-800">Knowledge Transfer</h4>
                  <p className="text-sm text-gray-600">
                    Value of 150 legacy tools including books, films, and open-source IP that transmit 
                    Indigenous and other knowledge systems.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Zap className="text-purple-500 mt-1 mr-3 flex-shrink-0" size={18}/>
                <div>
                  <h4 className="font-medium text-gray-800">Energy Systems</h4>
                  <p className="text-sm text-gray-600">
                    Potential value of unlocking renewable energy solutions through unlikely 
                    connections and Indigenous knowledge systems.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 rounded-md border border-yellow-200">
              <p className="text-sm text-yellow-800 italic">
                "Maybe time will tell, maybe we will never be able to measure it... With value of GRP of over
                trillions of $, we believe after 20 years of evidence based research that we are well placed 
                to help humanity unlock its potential and economic prosperity in relation to nature not 
                abstracted from it."
              </p>
              <p className="text-right text-yellow-700 text-xs mt-1">
                - Jack Manning Bancroft, Founder
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GRPValueCalculator; 