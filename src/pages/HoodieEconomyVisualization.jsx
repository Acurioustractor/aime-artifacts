import React, { useState } from 'react';
import { Heart, Users, Lightbulb, Globe, Zap, BookOpen, Anchor, ArrowRight, ChevronDown, ChevronUp, RefreshCw, Globe2 } from 'lucide-react';

const HoodieEconomyVisualization = () => {
  const [activeHoodie, setActiveHoodie] = useState('custodian');
  const [expandedSection, setExpandedSection] = useState('what');
  
  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  
  const hoodieTypes = [
    {
      id: 'joy',
      name: 'Joy Corps',
      icon: <Heart size={24} className="text-pink-500" />,
      color: 'bg-pink-500',
      borderColor: 'border-pink-200',
      textColor: 'text-pink-700',
      bgColor: 'bg-pink-50',
      description: 'Awarded to organizations shifting from transactional to relational economics',
      benefits: [
        'Access to relational network of potential partners',
        'Recognition as industry outlier pioneering new approaches',
        'Methodologies for addressing staff motivation challenges',
        'Frameworks for healthy risk-taking'
      ]
    },
    {
      id: 'citizen',
      name: 'Systems Change Citizen',
      icon: <Users size={24} className="text-blue-500" />,
      color: 'bg-blue-500',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-700',
      bgColor: 'bg-blue-50',
      description: 'Awarded to leaders evolving beyond the entrepreneur hero journey',
      benefits: [
        'Tools for collaborative rather than heroic leadership',
        'Access to unlikely connections across disciplines',
        'Frameworks for addressing root causes systemically',
        'Pathways to multiply individual charisma through networks'
      ]
    },
    {
      id: 'imagilab',
      name: 'IMAGI-Lab',
      icon: <Lightbulb size={24} className="text-yellow-500" />,
      color: 'bg-yellow-500',
      borderColor: 'border-yellow-200',
      textColor: 'text-yellow-700',
      bgColor: 'bg-yellow-50',
      description: 'Awarded to schools functioning as imagination incubators',
      benefits: [
        'Methodologies for student-led problem-solving',
        'Connections to real-world challenge providers',
        'Recognition as educational innovator',
        'Tools for measuring imagination development'
      ]
    },
    {
      id: 'president',
      name: 'President',
      icon: <Globe size={24} className="text-green-500" />,
      color: 'bg-green-500',
      borderColor: 'border-green-200',
      textColor: 'text-green-700',
      bgColor: 'bg-green-50',
      description: 'Awarded to young leaders reimagining custodial economies',
      benefits: [
        'Platform for pioneering nature-centered economic models',
        'Access to knowledge from Indigenous systems',
        'Pathway from protest to constructive action',
        'Recognition as generational leader'
      ]
    },
    {
      id: 'iksl',
      name: 'IKSL',
      icon: <Globe2 size={24} className="text-emerald-500" />,
      color: 'bg-emerald-500',
      borderColor: 'border-emerald-200',
      textColor: 'text-emerald-700',
      bgColor: 'bg-emerald-50',
      description: 'Awarded to Indigenous knowledge systems labs bringing wisdom to the design queue',
      benefits: [
        'Economic pathways for traditional knowledge',
        'Recognition of knowledge system value',
        'Protection frameworks for cultural IP',
        'Connection to implementation partnerships'
      ]
    },
    {
      id: 'resident',
      name: 'Systems Change Resident',
      icon: <Zap size={24} className="text-purple-500" />,
      color: 'bg-purple-500',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-700',
      bgColor: 'bg-purple-50',
      description: 'Awarded to visionaries incubating Earth-shot solutions',
      benefits: [
        'Week-long immersive experience with Indigenous knowledge holders',
        'Support for complex idea communication',
        'Connection to implementation partners',
        'Documentation framework for methodologies'
      ]
    },
    {
      id: 'toolmaker',
      name: 'Toolmaker',
      icon: <BookOpen size={24} className="text-orange-500" />,
      color: 'bg-orange-500',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-700',
      bgColor: 'bg-orange-50',
      description: 'Awarded to contributors creating legacy resources',
      benefits: [
        'Framework for creating enduring knowledge assets',
        'Support for multiple format resource development',
        'Connection to diverse knowledge contributors',
        'Distribution network for tools created'
      ]
    },
    {
      id: 'custodian',
      name: 'Custodian',
      icon: <Anchor size={24} className="text-indigo-500" />,
      color: 'bg-indigo-500',
      borderColor: 'border-indigo-200',
      textColor: 'text-indigo-700',
      bgColor: 'bg-indigo-50',
      description: 'Awarded to 150 individuals annually responsible for network governance',
      benefits: [
        'Recognition as network steward',
        'Leadership role in specific network domain',
        'Connection to fellow custodians',
        'Intergenerational legacy opportunity'
      ]
    }
  ];
  
  const selectedHoodie = hoodieTypes.find(h => h.id === activeHoodie);
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">The Hoodie Economy</h2>
      <p className="text-gray-600 mb-8">
        IMAGI-NATION uses "hoodies" as its primary token of recognition, achievement, and exchange - 
        creating a parallel credit system that values relational capacity.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1">
          <div className="bg-white rounded-lg shadow p-4 mb-4">
            <h3 className="font-bold text-gray-700 mb-2 flex items-center cursor-pointer" 
                onClick={() => toggleSection('what')}>
              {expandedSection === 'what' ? <ChevronUp size={18} className="mr-2" /> : <ChevronDown size={18} className="mr-2" />}
              What are Hoodies?
            </h3>
            
            {expandedSection === 'what' && (
              <div className="space-y-3 text-sm text-gray-600 mt-2">
                <p>
                  Hoodies are both digital and physical tokens within the IMAGI-NATION ecosystem that represent 
                  achievement, contribution, and reputational capital.
                </p>
                <p>
                  <span className="font-semibold">Digital Hoodies</span> are earned through completion of specific 
                  actions and milestones within the accreditation pathways.
                </p>
                <p>
                  <span className="font-semibold">Physical Hoodies</span> are tangible garments awarded for major 
                  achievements, handcrafted and personalized to reflect specific contributions.
                </p>
                <p className="italic border-l-2 border-gray-200 pl-3">
                  "These hoodies will be relationally made, relationally credited and relationally gifted so that 
                  energy can carry on." - Jack Manning Bancroft
                </p>
              </div>
            )}
          </div>
          
          <div className="bg-white rounded-lg shadow p-4 mb-4">
            <h3 className="font-bold text-gray-700 mb-2 flex items-center cursor-pointer" 
                onClick={() => toggleSection('why')}>
              {expandedSection === 'why' ? <ChevronUp size={18} className="mr-2" /> : <ChevronDown size={18} className="mr-2" />}
              Why Hoodies?
            </h3>
            
            {expandedSection === 'why' && (
              <div className="space-y-3 text-sm text-gray-600 mt-2">
                <p>
                  Hoodies serve multiple functions within the IMAGI-NATION ecosystem:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Create a parallel credit system that values relationship quality</li>
                  <li>Provide visible recognition for contribution and achievement</li>
                  <li>Establish tradable tokens of reputation within the network</li>
                  <li>Serve as physical reminders of responsibility (especially for Custodians)</li>
                  <li>Create intergenerational legacy items that can be passed down</li>
                </ul>
                <p>
                  The hoodie was chosen as a symbol that represents both protection and accessibility, 
                  contrasting with exclusive symbols like suits or formal uniforms.
                </p>
              </div>
            )}
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-gray-700 mb-2 flex items-center cursor-pointer" 
                onClick={() => toggleSection('how')}>
              {expandedSection === 'how' ? <ChevronUp size={18} className="mr-2" /> : <ChevronDown size={18} className="mr-2" />}
              How It Works
            </h3>
            
            {expandedSection === 'how' && (
              <div className="space-y-4 text-sm text-gray-600 mt-2">
                <div className="flex items-start">
                  <div className="rounded-full bg-indigo-100 p-1 mr-3 mt-1">
                    <span className="w-5 h-5 flex items-center justify-center font-semibold text-indigo-600">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Accreditation Pathways</h4>
                    <p>Participants navigate "River Runs" - structured accreditation pathways specific to their visa type.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="rounded-full bg-indigo-100 p-1 mr-3 mt-1">
                    <span className="w-5 h-5 flex items-center justify-center font-semibold text-indigo-600">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Digital Hoodies</h4>
                    <p>Digital hoodies are earned for completing specific milestones and contributions along the pathway.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="rounded-full bg-indigo-100 p-1 mr-3 mt-1">
                    <span className="w-5 h-5 flex items-center justify-center font-semibold text-indigo-600">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Physical Hoodies</h4>
                    <p>Physical hoodies are awarded for major achievements, handcrafted with specific badges and markers.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="rounded-full bg-indigo-100 p-1 mr-3 mt-1">
                    <span className="w-5 h-5 flex items-center justify-center font-semibold text-indigo-600">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Trading Value</h4>
                    <p>Hoodies enable access to the "club" - IMAGI-NATION's trading platform for jobs, opportunities, and mentoring.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="rounded-full bg-indigo-100 p-1 mr-3 mt-1">
                    <span className="w-5 h-5 flex items-center justify-center font-semibold text-indigo-600">5</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Legacy Creation</h4>
                    <p>Physical hoodies become intergenerational legacy items that can be passed down through families.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="col-span-1 md:col-span-2">
          <div className="bg-white rounded-lg shadow p-4 mb-6">
            <h3 className="font-bold text-gray-700 mb-4">Hoodie Types</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
              {hoodieTypes.map(hoodie => (
                <div 
                  key={hoodie.id}
                  className={`p-2 rounded-lg cursor-pointer transition-all ${ 
                    activeHoodie === hoodie.id 
                      ? `${hoodie.borderColor} border-2 ${hoodie.bgColor}` 
                      : 'border border-gray-200 bg-gray-50'
                  }`}
                  onClick={() => setActiveHoodie(hoodie.id)}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`rounded-full p-2 mb-1 ${hoodie.bgColor}`}>
                      {hoodie.icon}
                    </div>
                    <span className={`text-xs font-semibold ${activeHoodie === hoodie.id ? hoodie.textColor : 'text-gray-600'}`}>
                      {hoodie.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={`p-4 rounded-lg border-2 ${selectedHoodie.borderColor} ${selectedHoodie.bgColor}`}>
              <div className="flex items-center mb-3">
                <div className={`rounded-full p-2 mr-3 bg-white`}>
                  {selectedHoodie.icon}
                </div>
                <h3 className={`font-bold ${selectedHoodie.textColor} text-lg`}>{selectedHoodie.name} Hoodie</h3>
              </div>
              
              <p className="text-gray-700 mb-4">{selectedHoodie.description}</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Benefits & Access</h4>
                  <ul className="space-y-2">
                    {selectedHoodie.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <ArrowRight size={16} className={selectedHoodie.textColor + " mt-1 mr-2 flex-shrink-0"} />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <h5 className="text-sm font-semibold text-gray-700 mb-1">Digital Form</h5>
                    <p className="text-xs text-gray-600">
                      Badges and recognition within the IMAGI-NATION platform, enabling access to specific resources.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <h5 className="text-sm font-semibold text-gray-700 mb-1">Physical Form</h5>
                    <p className="text-xs text-gray-600">
                      Handcrafted garment with specific badges and markers indicating achievements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-gray-700 mb-4">The Hoodie Economy</h3>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 p-4 border border-gray-200 rounded-lg bg-gray-50">
                <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                  <RefreshCw size={18} className="mr-2 text-indigo-500" />
                  Economic Circulation
                </h4>
                <p className="text-sm text-gray-600">
                  Hoodies circulate through IMAGI-NATION's economy as tokens of relational capital, providing:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-gray-600 list-disc list-inside">
                  <li>Access to exclusive network resources</li>
                  <li>Peer recognition of achievement</li>
                  <li>Trading value for opportunities</li>
                  <li>External credibility (like a CV)</li>
                  <li>Connection to related networks</li>
                </ul>
              </div>
              
              <div className="flex-1 p-4 border border-gray-200 rounded-lg bg-gray-50">
                <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                  <Globe size={18} className="mr-2 text-indigo-500" />
                  Legacy Value
                </h4>
                <p className="text-sm text-gray-600">
                  Hoodies create intergenerational value through:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-gray-600 list-disc list-inside">
                  <li>Physical items that can be passed down</li>
                  <li>Connection to the IMAGI-NATION directory</li>
                  <li>Story carriers across generations</li>
                  <li>Reminders of relational responsibility</li>
                  <li>Embodiment of knowledge transfer</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg border border-indigo-100">
              <p className="text-gray-700 italic">
                "We've got about 20,000 hoodies in storage... We feel very confident that we can deliver the stimulus needed inside imagination with physical hoodies with at most 7,000 to 8,000 of those hoodies... And what will make those special will be the human touch."
              </p>
              <p className="text-right text-gray-500 text-xs mt-2">- Jack Manning Bancroft</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoodieEconomyVisualization; 