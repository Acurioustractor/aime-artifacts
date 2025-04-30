import React from 'react';

const Section = ({ title, children }) => (
  <section className="mb-8">
    <h3 className="text-xl font-semibold text-gray-700 mb-3 border-b pb-1">{title}</h3>
    <div className="space-y-3 text-gray-600">{children}</div>
  </section>
);

const CustodiansPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4">CUSTODIANS: Governing the Relational Network</h2>

      <Section title="Executive Summary">
        <p>The Custodians program establishes a distributed governance system for IMAGI-NATION, engaging 150 individuals annually to take responsibility for specific aspects of the network. This business case outlines how these Custodians will ensure the health, integrity, and effectiveness of IMAGI-NATION through shared leadership based on both scientific research (Dunbar's number) and indigenous kinship systems.</p>
      </Section>

      <Section title="The Challenge">
        <p>Traditional governance approaches face significant limitations in relational network contexts:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Centralized leadership creates bottlenecks and single points of failure</li>
          <li>Small teams cannot effectively govern large, complex networks</li>
          <li>Conventional corporate structures reinforce hero narratives and individualism</li>
          <li>Accountability becomes diffused without specific responsibility assignments</li>
          <li>Cross-cultural and cross-disciplinary networks require diverse governance perspectives</li>
          <li>Digital platforms often lack meaningful human accountability</li>
        </ul>
        <blockquote className="border-l-4 border-indigo-200 pl-4 italic text-gray-500 mt-2">
          "35 of us, even if we're extraordinary inside of AIM, cannot govern this thing alone." - Jack Manning Bancroft
        </blockquote>
      </Section>

      <Section title="The Opportunity">
        <p>The Custodians program offers:</p>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Distributed Responsibility:</strong> Creating a governance system where 150 individuals take specific ownership for network health.</li>
          <li><strong>Relational Leadership:</strong> Building governance based on relationship quality rather than hierarchical authority.</li>
          <li><strong>Collective Accountability:</strong> Establishing shared responsibility for both successes and failures.</li>
          <li><strong>Knowledge Diversity:</strong> Ensuring governance includes perspectives from various disciplines and cultures.</li>
          <li><strong>Legacy Continuity:</strong> Creating an intergenerational governance model that can persist beyond individual leadership.</li>
        </ul>
      </Section>
      
      <Section title="Theoretical Foundation">
        <p>The Custodians program is built on two complementary frameworks:</p>
        <ul className="list-disc list-inside ml-4">
            <li><strong>Dunbar's Number:</strong> Robin Dunbar's anthropological research indicates that 150 represents a cognitive limit to the number of people with whom one can maintain stable social relationships. IMAGI-NATION's governance model embraces this natural limit.</li>
            <li><strong>Indigenous Kinship Systems:</strong> Traditional Indigenous governance approaches emphasize relationship networks and distributed responsibility. The Custodians model integrates these approaches.</li>
        </ul>
         <blockquote className="border-l-4 border-indigo-200 pl-4 italic text-gray-500 mt-2">
          "We've looked at Robin Dunbar and how to how many relations we can actually hold of value and then we've mapped that with indigenous kinship models as well." - Jack Manning Bancroft
        </blockquote>
      </Section>

      <Section title="The Custodian Role">
        <p>Custodians hold several key responsibilities:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Network Segment Stewardship: Taking responsibility for a specific aspect</li>
          <li>Cultural Integrity Maintenance: Ensuring alignment with core values</li>
          <li>Relational Health Monitoring: Attending to connection quality</li>
          <li>Problem Resolution: Stepping forward when challenges arise</li>
          <li>Knowledge Transfer: Ensuring wisdom is passed on</li>
        </ul>
      </Section>

      <Section title="Selection and Recognition">
        <p>The Custodians process involves:</p>
        <div className="mt-2">
            <h4 className="font-semibold text-gray-700">Selection Criteria</h4>
            <ul className="list-disc list-inside ml-4 text-sm">
                <li>Demonstrated commitment to relational principles</li>
                <li>Completion of preparatory IMAGI-NATION experiences</li>
                <li>Capacity for responsible leadership</li>
                <li>Relationship quality within network segment</li>
                <li>Diversity across knowledge systems and contexts</li>
            </ul>
        </div>
        <div className="mt-2">
            <h4 className="font-semibold text-gray-700">Recognition Mechanism</h4>
            <p>Custodians receive a physical "Custodian Hoodie" that serves as both recognition and responsibility marker.</p>
            <blockquote className="border-l-4 border-indigo-200 pl-4 italic text-gray-500 mt-1 text-sm">
              "These hoodies will be relationally made, relationally credited and relationally gifted so that energy can carry on." - Jack Manning Bancroft
            </blockquote>
        </div>
      </Section>

      <Section title="Implementation Approach">
        <p>The Custodians program follows key phases:</p>
        <ul className="space-y-2">
          <li><strong>Preparation (Varies):</strong> Completion of journeys, Relationship building, Understanding principles</li>
          <li><strong>Selection (Annual):</strong> Identification, Peer recommendation, Commitment confirmation</li>
          <li><strong>Responsibility Assignment (Annual):</strong> Allocation, Expectation setting, Predecessor connection</li>
          <li><strong>Active Custodianship (1 year):</strong> Health check-ins, Collective governance, Problem resolution</li>
          <li><strong>Legacy Transfer (Final months):</strong> Documentation, Successor ID, Handover</li>
        </ul>
      </Section>

      <Section title="Value Creation">
        <p>The Custodians program creates value through:</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
             <div className="bg-indigo-50 p-3 rounded border border-indigo-100">
                <h4 className="font-semibold text-indigo-800 mb-1">Network Integrity</h4>
                 <ul className="list-disc list-inside text-sm">
                    <li>Alignment</li>
                    <li>Quality</li>
                    <li>Prevents drift</li>
                 </ul>
            </div>
             <div className="bg-indigo-50 p-3 rounded border border-indigo-100">
                <h4 className="font-semibold text-indigo-800 mb-1">Distributed Intelligence</h4>
                 <ul className="list-disc list-inside text-sm">
                    <li>Diverse perspectives</li>
                    <li>Multiple sensors</li>
                    <li>Contextual decisions</li>
                 </ul>
            </div>
             <div className="bg-indigo-50 p-3 rounded border border-indigo-100">
                <h4 className="font-semibold text-indigo-800 mb-1">Relationship Quality</h4>
                 <ul className="list-disc list-inside text-sm">
                    <li>Focus on connection</li>
                    <li>Personal accountability</li>
                    <li>Intergenerational continuity</li>
                 </ul>
            </div>
             <div className="bg-indigo-50 p-3 rounded border border-indigo-100">
                <h4 className="font-semibold text-indigo-800 mb-1">Operational Effectiveness</h4>
                 <ul className="list-disc list-inside text-sm">
                    <li>No bottlenecks</li>
                    <li>Rapid response</li>
                    <li>Clear responsibility</li>
                 </ul>
            </div>
        </div>
      </Section>

      <Section title="Case Study: Governance in Action">
        <p>One example of Custodian governance in practice:</p>
        <p>When a conflict emerges between different IMAGI-NATION participants, rather than escalating to a centralized authority, the relevant Custodians would come together to:</p>
        <ul className="list-decimal list-inside ml-4">
          <li>Acknowledge shared responsibility</li>
          <li>Facilitate appropriate dialogue</li>
          <li>Support relationship repair</li>
          <li>Document learning for future prevention</li>
          <li>Ensure appropriate follow-through</li>
        </ul>
        <p>This approach maintains relational integrity while addressing problems effectively.</p>
      </Section>

      <Section title="Measurement Framework">
        <p>Custodian effectiveness will be tracked through:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Relationship Health Metrics</li>
          <li>Problem Resolution Indicators</li>
          <li>Knowledge Transfer Assessment</li>
          <li>Network Alignment Evaluation</li>
          <li>Collective Responsibility Measures</li>
        </ul>
      </Section>
      
      <Section title="Legacy Planning">
          <p>The Custodians model is designed for intergenerational continuity through:</p>
          <ul className="list-disc list-inside ml-4">
             <li>Documentation: Each cohort captures learnings</li>
             <li>Physical Symbols: Hoodies can be passed on</li>
             <li>Relationship Networks: Connections persist</li>
             <li>Directory Access: Lifetime access</li>
             <li>Knowledge Exchange: Regular gatherings</li>
          </ul>
      </Section>

      <Section title="Conclusion">
        <p>The Custodians program represents a fundamental reimagining of governance for relational networks. By establishing 150 individuals with specific responsibility for network health, IMAGI-NATION creates a system that balances accountability with distribution, authority with relationship, and current leadership with intergenerational continuity.</p>
        <blockquote className="border-l-4 border-indigo-200 pl-4 italic text-gray-500 mt-2">
          "When something goes wrong, I'll definitely put my hand up, but I'm hoping there'll be 149 people alongside me that'll say, yeah, I was also responsible for that and we missed that. So you'll be able to see a proper coalition of shared leadership and responsibility, not just your traditional kind of CEO hiding away in some office somewhere." - Jack Manning Bancroft
        </blockquote>
        <p>The Custodians model isn't simply about managing a network; it's about creating a living example of how governance can function through relationship rather than hierarchy. For those committed to reimagining leadership beyond conventional corporate models, the Custodians pathway offers both a framework and community to develop new approaches to responsible stewardship.</p>
         <blockquote className="border-l-4 border-indigo-200 pl-4 italic text-gray-500 mt-2">
          "So it won't necessarily, when something goes wrong, I'll definitely put my hand up, but I'm hoping there'll be 149 people alongside me that'll say, yeah, I was also responsible for that and we missed that. So you'll be able to see a proper coalition of shared leadership and responsibility." - Jack Manning Bancroft
        </blockquote>
      </Section>

    </div>
  );
};

export default CustodiansPage; 