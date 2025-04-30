import React from 'react';

const Section = ({ title, children }) => (
  <section className="mb-8">
    <h3 className="text-xl font-semibold text-gray-700 mb-3 border-b pb-1">{title}</h3>
    <div className="space-y-3 text-gray-600">{children}</div>
  </section>
);

const ResidentsPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow">
      <h2 className="text-3xl font-bold text-purple-700 mb-4">SYSTEMS CHANGE RESIDENTS: Incubating Earth-Shot Solutions</h2>

      <Section title="Executive Summary">
        <p>The Systems Change Residents program will support 130 visionary change-makers with ambitious "Earth-shot" projects tackling planetary-scale challenges. This business case outlines how these residents will receive specialized support to develop transformative solutions and communicate complex ideas effectively, creating practical pathways toward addressing our most significant systemic challenges.</p>
      </Section>

      <Section title="The Challenge">
        <p>Our approach to complex, systemic challenges faces critical limitations:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Visionary solutions often remain isolated from mainstream implementation</li>
          <li>Complex ideas struggle to gain traction due to communication barriers</li>
          <li>Individual change-makers lack the collaborative networks needed for systemic impact</li>
          <li>Promising approaches remain theoretical without practical demonstration</li>
          <li>The hero entrepreneur model limits potential for true systems change</li>
          <li>Knowledge silos prevent cross-disciplinary approaches needed for complex problems</li>
        </ul>
        <blockquote className="border-l-4 border-purple-200 pl-4 italic text-gray-500 mt-2">
          "Applying systems design is almost impossible in isolation... You can't hold the whole map of the earth in your head, you can only hold a puzzle piece of as much as what you can know." - Jack Manning Bancroft
        </blockquote>
      </Section>

      <Section title="The Opportunity">
        <p>The Systems Change Residents program offers:</p>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Incubation Support:</strong> Providing structured developmental assistance for ambitious Earth-shot projects.</li>
          <li><strong>Indigenous Knowledge Integration:</strong> Connecting contemporary innovation with traditional wisdom through place-based learning experiences.</li>
          <li><strong>Communication Tool Development:</strong> Creating resources that translate complex systems ideas into accessible formats.</li>
          <li><strong>Network Power Activation:</strong> Building collaborative connections across disciplinary and cultural boundaries.</li>
          <li><strong>Case Study Documentation:</strong> Developing detailed frameworks that enable replication and scaling.</li>
        </ul>
      </Section>

      <Section title="Target Participants">
        <p>The ideal Systems Change Residents include:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Innovators with well-formed concepts addressing systemic challenges</li>
          <li>Collaborative leaders seeking to move beyond the hero entrepreneur model</li>
          <li>Visionaries connecting technological innovation with natural systems</li>
          <li>Bridge-builders working across disciplinary boundaries</li>
          <li>Experimenters developing practical applications of theoretical frameworks</li>
          <li>Knowledge translators able to make complex ideas accessible</li>
        </ul>
      </Section>

      <Section title="Program Methodology">
        <p>The Systems Change Residents journey involves:</p>
        <ul className="list-decimal list-inside ml-4 space-y-1">
          <li><strong>Immersive Knowledge Exchange:</strong> A one-week on-country experience in Australia connecting with Indigenous knowledge holders and systems.</li>
          <li><strong>Project Refinement:</strong> Structured support to clarify and strengthen project foundations.</li>
          <li><strong>Communication Tool Creation:</strong> Development of resources that make complex ideas accessible to broader audiences.</li>
          <li><strong>Network Activation:</strong> Connection with potential collaborators and implementation partners.</li>
          <li><strong>Case Study Formalization:</strong> Documentation of methodologies for replication and scaling.</li>
        </ul>
      </Section>

      <Section title="Value Proposition">
        <p>For participants, the Systems Change Residents program delivers:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Knowledge Access: Connection to Indigenous systems thinking</li>
          <li>Tool Development: Support in creating communication resources</li>
          <li>Network Extension: Relationships with unlikely collaborators</li>
          <li>Implementation Pathways: Structured approach from concept to reality</li>
          <li>Global Visibility: Platform for sharing work</li>
          <li>Legacy Creation: Framework for knowledge transfer</li>
        </ul>
      </Section>
      
      <Section title="Implementation Roadmap">
        <p>The Systems Change Residents journey follows key phases:</p>
        <ul className="space-y-2">
          <li><strong>Preparation (2 months):</strong> Project assessment, Preliminary exchange, Readiness evaluation</li>
          <li><strong>Immersion (1 week):</strong> On-country experience, Indigenous connection, Collaborative ideation</li>
          <li><strong>Development (6 months):</strong> Implementation support, Tool creation, Network building</li>
          <li><strong>Legacy Planning (Ongoing):</strong> Case study documentation, Dissemination framework, Replication strategy</li>
        </ul>
      </Section>

       <Section title="Case Study: Heliogenesis">
          <p>One example of a Systems Change Residency project already in development is Heliogenesis, which Jack Manning Bancroft describes:</p>
         <blockquote className="border-l-4 border-purple-200 pl-4 italic text-gray-500 mt-2">
           "Thomas's theory of change or premise is that... we don't know how to [capture the sun's energy effectively] but plants do, and they do that with photosynthesis every single day, so he wants to look at how by tapping into the plant network that can power life on Earth, that the plant becomes a conductor to move the energy from the sun through. And, you know, he solves that, then maybe that's our energy problem solved."
         </blockquote>
         <p>This project exemplifies the ambitious scope of Systems Change Residency projects - addressing fundamental planetary challenges through innovative approaches that bridge natural and technological systems.</p>
      </Section>

      <Section title="Impact Framework">
        <p>Systems Change Residents will create impact through:</p>
         <div className="grid md:grid-cols-3 gap-4 mt-2">
             <div className="bg-purple-50 p-3 rounded border border-purple-100">
                <h4 className="font-semibold text-purple-800 mb-1">Concept Translation</h4>
                 <ul className="list-disc list-inside text-sm">
                    <li>Accessible ideas</li>
                    <li>Implementation resources</li>
                    <li>Inspiring narratives</li>
                 </ul>
            </div>
             <div className="bg-purple-50 p-3 rounded border border-purple-100">
                <h4 className="font-semibold text-purple-800 mb-1">Solution Development</h4>
                <ul className="list-disc list-inside text-sm">
                    <li>Practical approaches</li>
                    <li>Demonstration cases</li>
                    <li>Scaling pathways</li>
                 </ul>
            </div>
             <div className="bg-purple-50 p-3 rounded border border-purple-100">
                <h4 className="font-semibold text-purple-800 mb-1">Knowledge System Integration</h4>
                <ul className="list-disc list-inside text-sm">
                    <li>Indigenous + contemporary</li>
                    <li>Hybrid approaches</li>
                    <li>New frameworks</li>
                 </ul>
            </div>
        </div>
      </Section>

      <Section title="Project Examples">
        <p>In addition to Heliogenesis, Systems Change Residents might develop projects such as:</p>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Bioregional Economic Design:</strong> Economic frameworks based on ecological boundaries</li>
          <li><strong>Interspecies Communication Systems:</strong> Technologies enhancing human/non-human understanding</li>
          <li><strong>Alternative Currency Models:</strong> Value exchange systems accounting for eco/social factors</li>
          <li><strong>Regenerative Infrastructure:</strong> Reimagining systems based on living systems principles</li>
          <li><strong>Collaborative Governance Frameworks:</strong> Decision-making approaches balancing diverse needs</li>
        </ul>
      </Section>

      <Section title="Measurement Framework">
        <p>Systems Change Resident impact will be tracked through:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Tool Effectiveness</li>
          <li>Knowledge Transfer</li>
          <li>Network Development</li>
          <li>Implementation Progress</li>
          <li>Systemic Influence</li>
        </ul>
      </Section>

      <Section title="Resource Requirements">
        <p>The Systems Change Residents program provides:</p>
        <ul className="list-disc list-inside ml-4">
          <li>One-week immersive experience in Australia</li>
          <li>Connection to Indigenous knowledge holders</li>
          <li>Support for communication tool development</li>
          <li>Networking with potential implementation partners</li>
          <li>Structured case study documentation support</li>
          <li>Participation in the IMAGI-NATION network</li>
        </ul>
      </Section>

      <Section title="Conclusion">
        <p>The Systems Change Residents program addresses a critical gap between visionary ideas and practical implementation. By supporting 130 ambitious Earth-shot projects with specialized resources for development and communication, the program creates pathways for transformative approaches to gain traction.</p>
        <blockquote className="border-l-4 border-purple-200 pl-4 italic text-gray-500 mt-2">
          "They'll get to come and have a connection with an Indigenous knowledge systems holder on land and an on-land lab and bring their problem that they're trying to solve onto the land with some of the longest continuous labs on planet Earth." - Jack Manning Bancroft (on the immersive experience)
        </blockquote>
        <p>The Systems Change Residents initiative isn't simply about supporting individual innovators; it's about creating an ecosystem where ambitious systemic solutions can be developed, communicated, and implemented effectively. For visionaries committed to addressing our most significant planetary challenges, the Systems Change Residents pathway offers both the framework and community to translate bold ideas into practical action.</p>
         <blockquote className="border-l-4 border-purple-200 pl-4 italic text-gray-500 mt-2">
          "Those 130 will experience a system change physical residency in Australia and then we'll support them with the creation of tools to help communicate this complexity of big ideas so it can get back into the existing system and move the capital and behavior and create the movement that they need around them." - Jack Manning Bancroft
        </blockquote>
      </Section>

    </div>
  );
};

export default ResidentsPage; 