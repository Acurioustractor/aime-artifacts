import React from 'react';

const Section = ({ title, children }) => (
  <section className="mb-8">
    <h3 className="text-xl font-semibold text-gray-700 mb-3 border-b pb-1">{title}</h3>
    <div className="space-y-3 text-gray-600">{children}</div>
  </section>
);

const PresidentsPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow">
      <h2 className="text-3xl font-bold text-green-700 mb-4">PRESIDENTS: Young Leaders Reimagining Custodial Economies</h2>

      <Section title="Executive Summary">
        <p>The Presidents program within IMAGI-NATION creates pathways for 1,000 young people—with a focus on Indigenous youth and those from marginalized communities—to become leaders in establishing custodial economies that center on nature and regenerative relationships. This business case outlines how these Imagination Presidents will develop case studies that demonstrate how economic systems can be reoriented to value environmental stewardship, intergenerational equity, and regenerative practices.</p>
      </Section>

      <Section title="The Challenge">
        <p>Young people today face intersecting crises:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Inherited environmental disasters requiring urgent action</li>
          <li>Limited pathways from protest to constructive action</li>
          <li>Economic systems that devalue nature and traditional knowledge</li>
          <li>Marginalization of youth perspectives in designing solutions</li>
          <li>Burned-out climate activists seeking new approaches</li>
          <li>Lack of economic opportunities that align with environmental values</li>
        </ul>
        <blockquote className="border-l-4 border-green-200 pl-4 italic text-gray-500 mt-2">
          "What's the next move for young people that want to fight back? And I think the next move is like, can you play the nature game?" - Jack Manning Bancroft
        </blockquote>
      </Section>

      <Section title="The Opportunity">
        <p>The Presidents program offers:</p>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Pathway from Protest to Creation:</strong> Moving young climate leaders from resistance to designing and implementing alternative systems.</li>
          <li><strong>Nature-Centered Economic Models:</strong> Developing case studies that demonstrate how the $800 billion nature repair market can function in practice.</li>
          <li><strong>Indigenous Leadership Recognition:</strong> Positioning Indigenous youth as pioneers in custodial economics rather than beneficiaries of aid.</li>
          <li><strong>Generational Stamp Creation:</strong> Enabling young people to define their contribution to addressing planetary challenges.</li>
          <li><strong>Practical Hope Generation:</strong> Creating tangible examples of economic systems that honor both human and non-human flourishing.</li>
        </ul>
      </Section>

      <Section title="Target Participants">
        <p>The ideal Presidents program participants include:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Young people from climate movements seeking constructive paths forward</li>
          <li>Indigenous youth with connection to traditional knowledge systems</li>
          <li>Young leaders from marginalized communities with entrepreneurial drive</li>
          <li>Individuals with capacity to hustle and implement practical solutions</li>
          <li>Those seeking to establish their "generational stamp" through impossible problem-solving</li>
          <li>Youth with the ability to code-switch between different contexts and knowledge systems</li>
        </ul>
        <blockquote className="border-l-4 border-green-200 pl-4 italic text-gray-500 mt-2">
          "This isn't someone that's passive. We're not going to the person who's like we need to turn their arm... it's a super high performing person. That doesn't mean they're not marginalized... they will do what they need. They know how to hustle stuff. They know how to move stuff, but they're really deeply driven." - IMAGI-NATION Documentation
        </blockquote>
      </Section>

      <Section title="The Presidents Methodology">
        <p>The Presidents journey involves:</p>
        <ul className="list-decimal list-inside ml-4 space-y-1">
          <li><strong>Custodial Orientation:</strong> Learning frameworks for understanding human-nature relationships through Indigenous knowledge systems.</li>
          <li><strong>Economic Mapping:</strong> Identifying opportunities for nature-centered economic development within specific bioregions.</li>
          <li><strong>Case Study Development:</strong> Creating practical examples of custodial economic principles in action.</li>
          <li><strong>Network Activation:</strong> Building connections with other Presidents and the broader IMAGI-NATION network.</li>
          <li><strong>Legacy Planning:</strong> Designing for sustainability and knowledge transfer beyond individual leadership.</li>
        </ul>
      </Section>

      <Section title="Value Proposition">
        <p>For participants, the Presidents program delivers:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Leadership Platform: Opportunity to pioneer new economic models with global visibility</li>
          <li>Knowledge Access: Connection to Indigenous and other knowledge systems</li>
          <li>Network Power: Relationships with unlikely collaborators across traditional boundaries</li>
          <li>Implementation Support: Resources and mentorship to turn vision into reality</li>
          <li>Economic Opportunity: Ability to generate livelihoods through regenerative practices</li>
          <li>Legacy Creation: Chance to establish lasting contributions to sustainable futures</li>
        </ul>
      </Section>

      <Section title="Implementation Roadmap">
        <p>The Presidents journey follows key phases:</p>
        <ul className="space-y-2">
          <li><strong>Discovery (3 months):</strong> Context assessment, Focus identification, Knowledge holder connection</li>
          <li><strong>Design (3 months):</strong> Project concept development, Implementation plan, Partnership assembly</li>
          <li><strong>Implementation (6 months):</strong> Project launch, Process documentation, Adaptive learning</li>
          <li><strong>Scale (Ongoing):</strong> Stakeholder connection, Replication framework, Knowledge contribution</li>
        </ul>
      </Section>

      <Section title="Impact Framework">
        <p>Presidents participants will create impact through:</p>
        <div className="grid md:grid-cols-3 gap-4 mt-2">
             <div className="bg-green-50 p-3 rounded border border-green-100">
                <h4 className="font-semibold text-green-800 mb-1">Economic Transformation</h4>
                 <ul className="list-disc list-inside text-sm">
                    <li>Nature-centered models</li>
                    <li>Regenerative livelihoods</li>
                    <li>Value beyond extraction</li>
                 </ul>
            </div>
            <div className="bg-green-50 p-3 rounded border border-green-100">
                <h4 className="font-semibold text-green-800 mb-1">Knowledge System Integration</h4>
                <ul className="list-disc list-inside text-sm">
                    <li>Indigenous approaches</li>
                    <li>Cross-framework translation</li>
                    <li>New hybrid knowledge</li>
                 </ul>
            </div>
            <div className="bg-green-50 p-3 rounded border border-green-100">
                <h4 className="font-semibold text-green-800 mb-1">Youth Leadership</h4>
                <ul className="list-disc list-inside text-sm">
                    <li>Solution creators</li>
                    <li>Protest to creation pathways</li>
                    <li>Intergenerational models</li>
                 </ul>
            </div>
        </div>
      </Section>

      <Section title="Case Study Examples">
        <p>Presidents participants might develop projects such as:</p>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Indigenous Ranger Programs:</strong> Expanding traditional land management as economic development</li>
          <li><strong>Regenerative Agriculture:</strong> Creating youth-led food systems based on traditional knowledge</li>
          <li><strong>Nature Repair Markets:</strong> Establishing local trading systems for ecosystem restoration</li>
          <li><strong>Bioregional Economic Design:</strong> Mapping and implementing place-based economic systems</li>
          <li><strong>Climate Adaptation Enterprises:</strong> Building businesses around helping communities adapt to climate impacts</li>
        </ul>
      </Section>

      <Section title="Measurement Framework">
        <p>Presidents impact will be tracked through:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Ecological Health Indicators</li>
          <li>Economic Value Creation</li>
          <li>Knowledge Transfer Metrics</li>
          <li>Network Strength Assessment</li>
          <li>Youth Agency Indicators</li>
        </ul>
      </Section>

      <Section title="Resource Requirements">
        <p>The Presidents program provides:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Initial $10,000 project funding per participant</li>
          <li>Access to knowledge holders and mentors</li>
          <li>Connection to the global IMAGI-NATION network</li>
          <li>Documentation and storytelling support</li>
          <li>Opportunities for travel and knowledge exchange</li>
          <li>Pathways to additional funding and partnerships</li>
        </ul>
      </Section>

      <Section title="Economic Context">
        <p>The Presidents program operates within significant opportunity spaces:</p>
        <ul className="list-disc list-inside ml-4">
          <li>$800 billion nature repair market identified by the World Economic Forum</li>
          <li>$125 trillion centered nature market</li>
          <li>Growing investor interest in regenerative practices</li>
          <li>Policy shifts toward valuing natural capital</li>
          <li>Consumer demand for environmentally responsible products and services</li>
        </ul>
      </Section>

      <Section title="Conclusion">
        <p>The Presidents program represents a critical bridge between environmental awareness and practical action, providing pathways for young people to move from protest to creation. By supporting 1,000 young leaders to develop case studies in custodial economics, the program creates both immediate impact and blueprints for broader system change.</p>
        <blockquote className="border-l-4 border-green-200 pl-4 italic text-gray-500 mt-2">
          "From a generation of young people who've had to protest to a generation of young people who can then have some slither of hope to go, okay, if I can prove this case study, then this network will help take this case study to the World Economic Forum and then work with governments to create measurement systems." - Jack Manning Bancroft
        </blockquote>
        <p>The Presidents initiative isn't simply about supporting individual young leaders; it's about creating a movement of practical hope through tangible examples of nature-centered economics in action. For young people seeking to define their generation's contribution to addressing planetary challenges, the Presidents pathway offers both the framework and community to create meaningful change.</p>
        <blockquote className="border-l-4 border-green-200 pl-4 italic text-gray-500 mt-2">
          "You're looking for someone who's looking for their generational stamp and their generational stamp... opportunity is like, Here's the gap. This is super hard like this is almost impossible to solve and throwing down the gauntlet to people that want to solve an impossible problem." - Jack Manning Bancroft
        </blockquote>
      </Section>

    </div>
  );
};

export default PresidentsPage; 