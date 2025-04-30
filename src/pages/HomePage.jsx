import React from 'react';
import { NavLink } from 'react-router-dom';
import { Target, Users, Lightbulb, Globe, BookOpen, Anchor, Zap, Heart, Globe2, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const actions = [
    { text: "Mentor from nature", icon: <Heart className="text-pink-500" /> },
    { text: "Practice custodianship for nature", icon: <Anchor className="text-indigo-500" /> },
    { text: "Activate Indigenous knowledge systems labs for nature", icon: <Globe2 className="text-emerald-500" /> },
    { text: "Empower presidents for nature", icon: <Users className="text-blue-500" /> },
    { text: "Create tools for nature", icon: <BookOpen className="text-orange-500" /> },
    { text: "Share knowledge for nature", icon: <Lightbulb className="text-yellow-500" /> },
    { text: "Embassy with nature", icon: <Globe className="text-green-500" /> },
    { text: "Work towards unlocking $125 trillion for nature", icon: <Target className="text-red-500" /> },
    { text: "Redefine human life as valued in nature", icon: <Zap className="text-purple-500" /> }
  ];

  return (
    <div className="bg-gradient-to-b from-indigo-50 via-white to-emerald-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4 leading-tight">
            A Letter to Humanity: Reimagining Our Future with Nature
          </h1>
          <p className="text-lg text-gray-600">
            From The Professors of IMAGI-NATION & our human custodians.
          </p>
        </header>

        <section className="prose prose-lg max-w-none text-gray-700 space-y-6 mb-12">
          <p>
            Our planet stands at a <span className="font-semibold text-indigo-700">critical juncture</span>. The future of human life on Earth depends on our ability to shift our economies and societies to work in harmony with nature. A staggering <span className="font-semibold text-green-700">$125 trillion marketplace</span> centred on nature-positive solutions awaits us (World Economic Forum, 2022). But unlocking this potential requires a fundamental reimagining of our relationships - with each other, with our systems, and with the natural world.
          </p>
          <p>
            The key to this transformation lies not with those who have benefited most from our current economic models, but with <span className="font-semibold text-purple-700">those who have been pushed to the margins</span>. Indigenous peoples, marginalised groups, and others who have maintained deep connections to nature hold invaluable knowledge and perspectives. By bringing these voices to the forefront and fusing them with forward-thinking leaders from within existing power structures, we can chart a new course.
          </p>
          <blockquote className="border-l-4 border-indigo-300 pl-4 italic text-indigo-800 bg-indigo-50 py-2">
            IMAGI-NATION is the laboratory for this grand experiment.
          </blockquote>
          <p>
            We are calling on citizens of Earth from all walks of life to join us in building bridges between our current economies and the nature-centred future we must create. Whether you're a corporate leader looking to transform your organisation into a <NavLink to="/joy-corps" className="text-pink-600 hover:underline font-medium">Joy Corp for Nature</NavLink>, an educator ready to establish an <NavLink to="/imagi-labs" className="text-yellow-600 hover:underline font-medium">Imagination School for Nature</NavLink>, or an individual eager to become a <NavLink to="/citizens" className="text-blue-600 hover:underline font-medium">Systems Change Citizen for Nature</NavLink> - there's a place for you in IMAGI-NATION.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-center text-indigo-800 mb-6">Here, we will...</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {actions.map((action, index) => (
              <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="mr-3 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
                  {React.cloneElement(action.icon, { size: 20 })}
                </div>
                <span className="text-gray-700">{action.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="prose prose-lg max-w-none text-gray-700 space-y-6 mb-12">
          <p>
            This is not just about moving money. It's about moving our relations, our knowledge, our opportunities, our intentions, our energy, and our time. It's about recognising that the path to a thriving future for humanity lies in rekindling our connections to the natural world and to each other.
          </p>
          <p>
            As <span className="font-semibold">The Professors</span>, we bring the wisdom of imagination, the power of unlikely connections, and the magic of storytelling. As <span className="font-semibold">AIME's human custodians</span>, we bring 18 years of experience in creating transformative networks and bridging divides.
          </p>
          <p>
            Together, we invite you to don the hoodie of an IMAGI-NATION Custodian and join us in this crucial mission. Let's build a nation that puts nature at its heart, that values the knowledge of the marginalised, and that harnesses our collective imagination to solve the greatest challenges of our time.
          </p>
        </section>
        
        <section className="text-center border-t border-indigo-200 pt-10">
           <h2 className="text-3xl font-bold text-indigo-900 mb-4">
            The future depends on it. Will you answer the call?
           </h2>
           <p className="text-gray-600 mb-6">
             Ready to become a citizen of IMAGI-NATION? Explore the possibilities.
           </p>
          <NavLink 
            to="/custodians" 
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition-colors text-lg"
          >
            Learn about Custodianship <ArrowRight size={20} className="ml-2" />
          </NavLink>
          <p className="mt-4 text-sm text-gray-500">
            (P.S. Visit the 'VISA office' - explore the different roles via the navigation above!)
          </p>
        </section>

      </div>
    </div>
  );
};

export default HomePage; 