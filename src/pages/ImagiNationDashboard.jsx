import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ArrowUpRight, Zap, Users, BookOpen, Globe, Heart, Lightbulb, Anchor, RefreshCw, ArrowRight, Globe2 } from 'lucide-react';

const ImagiNationDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Projected timeline data (10-year plan)
  const timelineData = [
    { year: 2023, joyCorp: 0, citizens: 0, imagiLabs: 0, presidents: 0, iksl: 0, residents: 0, tools: 0, custodians: 0 },
    { year: 2024, joyCorp: 15, citizens: 15, imagiLabs: 15, presidents: 15, iksl: 15, residents: 10, tools: 8, custodians: 150 },
    { year: 2025, joyCorp: 50, citizens: 50, imagiLabs: 50, presidents: 50, iksl: 50, residents: 20, tools: 20, custodians: 150 },
    { year: 2026, joyCorp: 120, citizens: 120, imagiLabs: 120, presidents: 120, iksl: 120, residents: 30, tools: 40, custodians: 150 },
    { year: 2027, joyCorp: 250, citizens: 250, imagiLabs: 250, presidents: 250, iksl: 250, residents: 40, tools: 60, custodians: 150 },
    { year: 2028, joyCorp: 400, citizens: 400, imagiLabs: 400, presidents: 400, iksl: 400, residents: 50, tools: 80, custodians: 150 },
    { year: 2029, joyCorp: 600, citizens: 600, imagiLabs: 600, presidents: 600, iksl: 600, residents: 90, tools: 100, custodians: 150 },
    { year: 2030, joyCorp: 800, citizens: 800, imagiLabs: 800, presidents: 800, iksl: 800, residents: 110, tools: 130, custodians: 150 },
    { year: 2031, joyCorp: 950, citizens: 950, imagiLabs: 950, presidents: 950, iksl: 950, residents: 125, tools: 145, custodians: 150 },
    { year: 2032, joyCorp: 1000, citizens: 1000, imagiLabs: 1000, presidents: 1000, iksl: 1000, residents: 130, tools: 150, custodians: 150 }
  ];
  
  // Projected impact data
  const impactData = [
    { name: 'Joy Corps', value: 10000000, color: '#EC4899' },
    { name: 'Citizens', value: 10000000, color: '#3B82F6' },
    { name: 'IMAGI-Labs', value: 15000000, color: '#EAB308' },
    { name: 'Presidents', value: 10000000, color: '#22C55E' },
    { name: 'IKSL', value: 5000000, color: '#10B981' }
  ];
  
  // Total projected impact
  const totalImpact = impactData.reduce((sum, item) => sum + item.value, 0);
  
  // Network relationship data (simplified version of connections)
  const relationshipData = [
    { name: 'Knowledge Transfer', value: 32 },
    { name: 'Joint Projects', value: 45 },
    { name: 'Resource Sharing', value: 28 },
    { name: 'Mentorship', value: 38 },
    { name: 'Collaboration', value: 52 }
  ];
  
  // Key program metrics
  const programMetrics = [
    { 
      id: 'joy-corps',
      title: 'Joy Corps',
      icon: <Heart size={24} className="text-pink-500" />,
      target: '1,000 organizations',
      current: '15 organizations',
      progress: 1.5,
      impact: '10 million people',
      color: 'border-pink-300',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-700'
    },
    { 
      id: 'citizens',
      title: 'Systems Change Citizens',
      icon: <Users size={24} className="text-blue-500" />,
      target: '1,000 change-makers',
      current: '15 individuals',
      progress: 1.5,
      impact: '10 million people',
      color: 'border-blue-300',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700'
    },
    { 
      id: 'imagi-labs',
      title: 'IMAGI-Labs (Schools)',
      icon: <Lightbulb size={24} className="text-yellow-500" />,
      target: '1,000 schools',
      current: '15 schools',
      progress: 1.5,
      impact: '15 million students',
      color: 'border-yellow-300',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-700'
    },
    { 
      id: 'presidents',
      title: 'Presidents',
      icon: <Globe size={24} className="text-green-500" />,
      target: '1,000 young people',
      current: '15 young leaders',
      progress: 1.5,
      impact: '10 million people',
      color: 'border-green-300',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700'
    },
    { 
      id: 'iksl',
      title: 'Indigenous Knowledge Systems Labs',
      icon: <Globe2 size={24} className="text-emerald-500" />,
      target: '1,000 knowledge centers',
      current: '15 labs',
      progress: 1.5,
      impact: '5 million people',
      color: 'border-emerald-300',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-700'
    },
    { 
      id: 'systems-change',
      title: 'Systems Change Residents',
      icon: <Zap size={24} className="text-purple-500" />,
      target: '130 visionaries',
      current: '10 residents',
      progress: 7.7,
      impact: 'Transformative solutions',
      color: 'border-purple-300',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700'
    },
    { 
      id: 'toolshed',
      title: 'Toolshed',
      icon: <BookOpen size={24} className="text-orange-500" />,
      target: '150 tools',
      current: '8 tools',
      progress: 5.3,
      impact: 'Legacy resources',
      color: 'border-orange-300',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700'
    },
    { 
      id: 'custodians',
      title: 'Custodians',
      icon: <Anchor size={24} className="text-indigo-500" />,
      target: '150 annually',
      current: '150 custodians',
      progress: 100,
      impact: 'Network governance',
      color: 'border-indigo-300',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-700'
    }
  ];
  
  // Helper function to get background color class from icon className
  const getBgColorClass = (iconClassName) => {
    if (!iconClassName) return 'bg-gray-500'; // Default color
    const colorMatch = iconClassName.match(/text-(\w+)-(\d+)/);
    if (colorMatch && colorMatch.length === 3) {
      return `bg-${colorMatch[1]}-${colorMatch[2]}`;
    }
    return 'bg-gray-500'; // Default if parsing fails
  };

  return (
    <div className="p-4 max-w-6xl mx-auto bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">IMAGI-NATION Metrics & Impact Dashboard</h1>
        <div className="flex space-x-1 bg-white p-1 rounded-lg shadow-sm">
          <button 
            className={`px-3 py-1 rounded-md text-sm font-medium ${activeTab === 'overview' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-transparent text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`px-3 py-1 rounded-md text-sm font-medium ${activeTab === 'timeline' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-transparent text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('timeline')}
          >
            Timeline
          </button>
          <button 
            className={`px-3 py-1 rounded-md text-sm font-medium ${activeTab === 'impact' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-transparent text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('impact')}
          >
            Impact
          </button>
        </div>
      </div>
      
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Program Progress Bar Chart */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Program Progress (%)</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={programMetrics}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 150, bottom: 5 }} // Adjusted left margin
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis type="number" domain={[0, 100]} stroke="#9ca3af" />
                    <YAxis 
                      dataKey="title" 
                      type="category" 
                      width={150} // Explicit width for YAxis labels
                      tick={{ fill: '#4b5563', fontSize: 12 }} 
                      stroke="#d1d5db"
                    />
                    <Tooltip 
                      cursor={{ fill: 'rgba(239, 246, 255, 0.5)' }}
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          const data = programMetrics.find(m => m.title === label);
                          return (
                            <div className="bg-white p-2 border border-gray-200 rounded shadow-sm text-sm">
                              <p className="font-semibold">{label}</p>
                              <p className="text-gray-600">{`Progress: ${payload[0].value}%`}</p>
                              {data && <p className="text-gray-500 text-xs">{`Current: ${data.current} / Target: ${data.target}`}</p>}
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="progress" nameKey="title" barSize={15}>
                      {programMetrics.map((entry, index) => {
                         const bgColor = getBgColorClass(entry.icon?.props?.className);
                         return <Cell key={`cell-${index}`} fill={bgColor.replace('bg-','text-').replace('text-','bg-').startsWith('bg-') ? `#${entry.color.split('-')[1]}${entry.color.split('-')[2]}` : entry.color.split('-')[1] === 'pink' ? '#EC4899' : entry.color.split('-')[1] === 'blue' ? '#3B82F6' : entry.color.split('-')[1] === 'yellow' ? '#EAB308' : entry.color.split('-')[1] === 'green' ? '#22C55E' : entry.color.split('-')[1] === 'emerald' ? '#10B981' : entry.color.split('-')[1] === 'purple' ? '#9333EA' : entry.color.split('-')[1] === 'orange' ? '#F97316' : '#6366F1'} /> // Use Tailwind colors
                        })}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Projected Total Impact Pie Chart */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Projected Total Impact (People Reached)</h2>
              <div className="h-72 flex flex-col items-center justify-center">
                <div className="relative w-64 h-64 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={impactData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {impactData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value) => [`${(value/1000000).toFixed(1)}M people`, 'Impact']} 
                        content={({ active, payload }) => {
                           if (active && payload && payload.length) {
                             return (
                               <div className="bg-white p-2 border border-gray-200 rounded shadow-sm text-sm">
                                 <p className="font-semibold">{payload[0].name}</p>
                                 <p className="text-gray-600">{`${(payload[0].value / 1000000).toFixed(1)}M people`}</p>
                               </div>
                             );
                           }
                           return null;
                         }}
                       />
                       <Legend 
                         iconType="circle" 
                         layout="horizontal"
                         verticalAlign="bottom"
                         align="center"
                         wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}
                         formatter={(value, entry) => <span className="text-gray-600 ml-1">{value}</span>}
                       />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <div className="text-3xl font-bold text-gray-800">{(totalImpact/1000000).toFixed(0)}M</div>
                    <div className="text-xs text-gray-500">People</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Program Metrics Cards */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Program Metrics Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {programMetrics.map(metric => {
                const bgColor = getBgColorClass(metric.icon?.props?.className);
                const progressColor = bgColor ? bgColor : 'bg-gray-500';

                return (
                  <div key={metric.id} className={`border rounded-lg p-3 ${metric.color} ${metric.bgColor} flex flex-col justify-between hover:shadow-md transition-shadow duration-200`}>
                    <div>
                      <div className="flex items-center mb-2">
                        <div className="rounded-full p-1.5 bg-white mr-2 shadow-sm">
                          {React.cloneElement(metric.icon, { size: 20 })}
                        </div>
                        <h3 className={`font-semibold ${metric.textColor} text-base`}>{metric.title}</h3>
                      </div>
                      <div className="space-y-1 text-xs mt-3">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Target:</span>
                          <span className="font-medium text-gray-700">{metric.target}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Current:</span>
                          <span className="font-medium text-gray-700">{metric.current}</span>
                        </div>
                         <div className="flex justify-between">
                          <span className="text-gray-500">Impact Est:</span>
                          <span className="font-medium text-gray-700">{metric.impact}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                       <div className="flex justify-between text-xs mb-1">
                         <span className="text-gray-500">Progress</span>
                         <span className={`font-medium ${metric.textColor}`}>{metric.progress.toFixed(1)}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full w-full">
                        <div 
                          className={`h-full rounded-full ${progressColor}`}
                          style={{ width: `${metric.progress}%` }}
                          title={`${metric.progress}% Complete`}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Network Relationships Bar Chart */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Network Relationships Activity</h2>
            <p className="text-sm text-gray-600 mb-4">
              This chart shows the different types of connections fostered across the network (illustrative data).
            </p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={relationshipData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#4b5563' }} stroke="#d1d5db" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    cursor={{ fill: 'rgba(239, 246, 255, 0.5)' }}
                     content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-white p-2 border border-gray-200 rounded shadow-sm text-sm">
                              <p className="font-semibold">{label}</p>
                              <p className="text-gray-600">{`Activity Count: ${payload[0].value}`}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                  />
                  <Bar dataKey="value" fill="#6366F1" name="Connections" barSize={30} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'timeline' && (
        <div className="space-y-6">
          {/* 10-Year Growth Projection Line Chart */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">10-Year Growth Projection (Core Programs)</h2>
             <p className="text-sm text-gray-600 mb-4">
              Projected number of active entities (organizations, individuals, schools, etc.) per core program by year.
            </p>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={timelineData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb"/>
                  <XAxis dataKey="year" stroke="#9ca3af"/>
                  <YAxis stroke="#9ca3af"/>
                  <Tooltip 
                     content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-white p-2 border border-gray-200 rounded shadow-sm text-sm">
                              <p className="font-semibold">{`Year: ${label}`}</p>
                              {payload.map(item => (
                                <p key={item.name} style={{ color: item.color }}>{`${item.name}: ${item.value}`}</p>
                              ))}
                            </div>
                          );
                        }
                        return null;
                      }}
                   />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Line type="monotone" dataKey="joyCorp" stroke="#EC4899" strokeWidth={2} activeDot={{ r: 6 }} name="Joy Corps" dot={false}/>
                  <Line type="monotone" dataKey="citizens" stroke="#3B82F6" strokeWidth={2} activeDot={{ r: 6 }} name="Citizens" dot={false}/>
                  <Line type="monotone" dataKey="imagiLabs" stroke="#EAB308" strokeWidth={2} activeDot={{ r: 6 }} name="IMAGI-Labs" dot={false}/>
                  <Line type="monotone" dataKey="presidents" stroke="#22C55E" strokeWidth={2} activeDot={{ r: 6 }} name="Presidents" dot={false}/>
                  <Line type="monotone" dataKey="iksl" stroke="#10B981" strokeWidth={2} activeDot={{ r: 6 }} name="IKSL" dot={false}/>
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Legacy Assets Growth Line Chart */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Legacy Assets & Support Growth</h2>
             <p className="text-sm text-gray-600 mb-4">
              Projected growth of key supporting roles and legacy outputs over the 10-year period.
            </p>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={timelineData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb"/>
                  <XAxis dataKey="year" stroke="#9ca3af"/>
                  <YAxis stroke="#9ca3af"/>
                  <Tooltip 
                     content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-white p-2 border border-gray-200 rounded shadow-sm text-sm">
                              <p className="font-semibold">{`Year: ${label}`}</p>
                              {payload.map(item => (
                                <p key={item.name} style={{ color: item.color }}>{`${item.name}: ${item.value}`}</p>
                              ))}
                            </div>
                          );
                        }
                        return null;
                      }}
                   />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Line type="monotone" dataKey="residents" stroke="#9333EA" strokeWidth={2} activeDot={{ r: 6 }} name="Systems Change Residents" dot={false}/>
                  <Line type="monotone" dataKey="tools" stroke="#F97316" strokeWidth={2} activeDot={{ r: 6 }} name="Tools Created" dot={false}/>
                  <Line type="monotone" dataKey="custodians" stroke="#6366F1" strokeWidth={2} activeDot={{ r: 6 }} name="Custodians" dot={false}/>
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Key Milestones Timeline */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Key Milestones Timeline</h2>
            <div className="relative pl-8 border-l-2 border-indigo-200 ml-6 space-y-8">
              {[
                 { year: "2023-2024", title: "Foundation Building", description: "Initial 15 visa holders across each category, establish governance, test accreditation pathways." },
                 { year: "2025-2026", title: "Early Growth", description: "Expand to 120 visa holders per category, develop first 40 tools, initial case studies on relational economic impact." },
                 { year: "2027-2028", title: "Acceleration", description: "Network reaches critical mass with 400 visa holders per category, significant relationship formation across unlikely connections." },
                 { year: "2029-2030", title: "Maturity", description: "Demonstrate systemic impact with 800 visa holders per category and 130 tools, measure shifts in relationships with nature." },
                 { year: "2031-2032", title: "Legacy Transition", description: "Complete 1,000 visa holders per category, 150 tools, transition to permanent open-source legacy resources." }
               ].map((milestone, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-11 mt-1.5 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center shadow">
                    <span className="text-white text-xs font-semibold">{index + 1}</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-xs font-medium text-indigo-500 bg-indigo-100 px-2 py-0.5 rounded">{milestone.year}</span>
                    <h3 className="font-semibold text-gray-800 mt-1">{milestone.title}</h3>
                    <p className="text-sm text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'impact' && (
        <div className="space-y-6">
          {/* Projected Impact Pie Chart & Summary Cards */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Projected Impact by 2032</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={impactData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100} // Slightly larger radius
                      innerRadius={60} // Keep donut hole
                      fill="#8884d8"
                      dataKey="value"
                      label={({name, percent}) => `${name} (${(percent * 100).toFixed(0)}%)`}
                      labelStyle={{ fontSize: '10px', fill: '#4b5563'}} // Style labels
                    >
                      {impactData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="#fff" strokeWidth={1} /> // Add stroke for separation
                      ))}
                    </Pie>
                     <Tooltip 
                       content={({ active, payload }) => {
                         if (active && payload && payload.length) {
                           return (
                             <div className="bg-white p-2 border border-gray-200 rounded shadow-sm text-sm">
                               <p className="font-semibold">{payload[0].name}</p>
                               <p className="text-gray-600">{`${(payload[0].value / 1000000).toFixed(1)}M people reached`}</p>
                             </div>
                           );
                         }
                         return null;
                       }}
                     />
                     <Legend 
                       iconType="circle" 
                       wrapperStyle={{ fontSize: '12px', marginTop: '10px' }}
                     />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="space-y-4">
                {/* Total People Reached Card */}
                <div className="border border-gray-200 rounded-lg p-4 bg-gradient-to-tr from-indigo-50 to-blue-50 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800 flex items-center">
                      <Globe size={20} className="mr-2 text-indigo-500" />
                      Total People Reached
                    </h3>
                    <span className="text-2xl font-bold text-indigo-600">{(totalImpact/1000000).toFixed(0)}M</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Combined direct impact across all program areas, representing approximately 0.6% of the global population projected for 2032.
                  </p>
                </div>
                
                {/* Nature Repair Market Card */}
                <div className="border border-gray-200 rounded-lg p-4 bg-gradient-to-tr from-green-50 to-emerald-50 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800 flex items-center">
                      <Globe2 size={20} className="mr-2 text-green-500" />
                      Nature Repair Market Influence
                    </h3>
                    <span className="text-2xl font-bold text-green-600">$800B+</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Potential economic scale of the nature repair market that IMAGI-NATION participants will help shape and influence through new models.
                  </p>
                </div>
                
                {/* Legacy Tools Card */}
                <div className="border border-gray-200 rounded-lg p-4 bg-gradient-to-tr from-orange-50 to-yellow-50 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800 flex items-center">
                      <BookOpen size={20} className="mr-2 text-orange-500" />
                      Legacy Tools & Resources
                    </h3>
                    <span className="text-2xl font-bold text-orange-600">150+</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Open-source frameworks, tools, and documented methodologies created for ongoing global use.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Key Impact Areas */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Key Impact Areas</h2>
              <div className="space-y-4">
                 {[
                   { icon: RefreshCw, color: "text-indigo-500", title: "Relational Network Development", text: "Creation of 5,000+ networked nodes globally, bridging traditional boundaries through unlikely relationships." },
                   { icon: Globe2, color: "text-green-500", title: "Nature-Centered Economics", text: "Demonstration of viable economic models centering nature, influencing the $125T+ potential market." },
                   { icon: Lightbulb, color: "text-yellow-500", title: "Imagination Restoration", text: "Reversing the decline in 'genius level imagination' through practical, scalable frameworks." },
                   { icon: Users, color: "text-blue-500", title: "Indigenous Knowledge Integration", text: "Bringing Indigenous wisdom to the forefront of designing solutions for contemporary global challenges." }
                 ].map((area, index) => (
                   <div key={index} className="flex items-start space-x-3">
                     <div className={`mt-1 flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full ${area.color.replace('text-', 'bg-').replace('-500', '-100')}`}>
                       <area.icon size={14} className={area.color} />
                     </div>
                     <div>
                       <h3 className="font-semibold text-gray-800 text-base">{area.title}</h3>
                       <p className="text-sm text-gray-600">{area.text}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </div>
            
            {/* Gross Relational Potential (GRP) */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Gross Relational Potential (GRP) - Projected Growth</h2>
              <div className="p-3 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-lg border border-indigo-100 mb-4">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">GRP</span> aims to measure the value generated by relationships (human-human & human-nature) as a vital complement to traditional GDP metrics. Projections indicate significant potential increases.
                </p>
              </div>
              
              <div className="space-y-3">
                {[
                   { name: "Human-to-Human Relationships", increase: "+325%", color: "text-indigo-600" },
                   { name: "Human-to-Nature Relationships", increase: "+175%", color: "text-green-600" },
                   { name: "Knowledge Transfer Efficiency", increase: "+240%", color: "text-orange-600" },
                   { name: "Relational Network Resilience", increase: "+450%", color: "text-purple-600" }
                 ].map((metric, index) => (
                   <div key={index} className="flex items-center justify-between pb-2 border-b border-gray-100 last:border-b-0">
                     <span className="text-sm text-gray-700">{metric.name}</span>
                     <div className={`flex items-center ${metric.color}`}>
                       <ArrowUpRight size={14} className="mr-0.5" />
                       <span className="font-semibold text-sm">{metric.increase}</span>
                     </div>
                   </div>
                 ))}
              </div>
              
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start text-yellow-800 text-xs">
                <Zap size={14} className="mr-2 mt-0.5 flex-shrink-0 text-yellow-600" />
                <span>
                  GRP is an experimental metric under development. These figures represent aspirational targets based on program design and will be refined.
                </span>
              </div>
            </div>
          </div>
          
          {/* Legacy Impact Vision */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-700">Legacy Impact Vision (2032 & Beyond)</h2>
              <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-md text-sm font-medium flex items-center">
                <Anchor size={14} className="mr-1" /> Legacy Phase
              </span>
            </div>
            
            <blockquote className="border-l-4 border-indigo-500 pl-4 py-2 italic text-gray-700 mb-6 bg-indigo-50 rounded-r-lg">
              "We will leave behind rich texts openly and freely... open source the code of imagination... and a directory, that flight map of all of these relational hotspots, these imaginational embassies connected."
            </blockquote>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              {[
                 { text: "50+ published books & guides on methodologies" },
                 { text: "Open-source code for all digital platforms & tools" },
                 { text: "Global directory of 5,000+ relational nodes" },
                 { text: "Validated CoLab framework for multi-species communication" },
                 { text: "Refined Message Stick system for GRP measurement" },
                 { text: "Established accreditation pathways for relational practices"}
               ].map((item, index) => (
                 <div key={index} className="flex items-center space-x-3">
                   <ArrowRight size={16} className="text-indigo-500 flex-shrink-0" />
                   <div className="text-gray-700 text-sm">
                     <span className="font-semibold">{item.text.split(' ')[0]} {item.text.split(' ')[1]}</span> {item.text.split(' ').slice(2).join(' ')}
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagiNationDashboard; 