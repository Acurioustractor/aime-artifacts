import React from 'react';

const Section = ({ title, children }) => (
  <section className="mb-8">
    <h3 className="text-xl font-semibold text-gray-700 mb-3 border-b pb-1">{title}</h3>
    <div className="space-y-3 text-gray-600">{children}</div>
  </section>
);

const IkSLPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow">
      <h2 className="text-3xl font-bold text-emerald-700 mb-4">INDIGENOUS KNOWLEDGE SYSTEMS LABS (IKSL): Bringing Traditional Wisdom to the Design Queue</h2>

      <Section title="Executive Summary">
        <p>Indigenous Knowledge Systems Labs (IKSL) represents a paradigm shift in how we approach design, innovation, and problem-solving by bringing Indigenous knowledge from "bottom feeding at the end of the economy" to the front of the design queue. This business case outlines the opportunity for 1,000 Indigenous knowledge centers to become accredited IKSLs, creating a global network of wisdom that can address contemporary challenges through time-tested perspectives that have sustained communities for millennia.</p>
      </Section>

      <Section title="The Challenge">
        <p>Our current design and innovation approaches face fundamental limitations:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Indigenous knowledge is systematically marginalized in mainstream problem-solving</li>
          <li>Traditional wisdom is often treated as folkloric rather than practical and applicable</li>
          <li>Indigenous communities are positioned as problems rather than solution sources</li>
          <li>Knowledge holders lack economic pathways that value their wisdom</li>
          <li>Modern design processes lack integrated approaches to sustainability and regeneration</li>
          <li>Complex challenges require knowledge systems that can address interconnected problems</li>
        </ul>
        <blockquote className="border-l-4 border-emerald-200 pl-4 italic text-gray-500 mt-2">
          "We need to be able to get our designers to the start of the design queue before we start shaping the rules and containers that don't allow for health and wealth for everybody." - Jack Manning Bancroft
        </blockquote>
      </Section>

      <Section title="The Opportunity">
        <p>The IKSL initiative offers:</p>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Knowledge System Elevation:</strong> Moving Indigenous wisdom from marginal consideration to central design influence.</li>
          <li><strong>Economic Pathway Creation:</strong> Establishing formal mechanisms for Indigenous knowledge to be valued and compensated in modern economies.</li>
          <li><strong>Design Framework Development:</strong> Creating hybrid approaches that integrate traditional wisdom with contemporary challenges.</li>
          <li><strong>Interdisciplinary Translation:</strong> Building bridges between Indigenous knowledge systems and fields like healthcare, technology, conservation, and urban planning.</li>
          <li><strong>Practical Case Studies:</strong> Demonstrating how Indigenous approaches solve complex contemporary problems more effectively than conventional methods.</li>
        </ul>
      </Section>

      <Section title="Target Knowledge Centers">
        <p>The ideal IKSL candidates include:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Indigenous communities with living knowledge traditions</li>
          <li>Academic or community institutions focused on Indigenous knowledge systems</li>
          <li>Individual knowledge holders with deep expertise in specific domains</li>
          <li>Rangers and land managers applying traditional practices</li>
          <li>Organizations already working at the intersection of Indigenous wisdom and contemporary challenges</li>
          <li>Groups with capacity to document, translate, and apply traditional knowledge</li>
        </ul>
        <blockquote className="border-l-4 border-emerald-200 pl-4 italic text-gray-500 mt-2">
          "What's your case study knowledge of... how we sense that out might not be through... a lot of these people, I think, would not necessarily be tech native and I don't think that an application form is going to be their best form of understanding, their skill set." - Jack Manning Bancroft
        </blockquote>
      </Section>

      <Section title="The IKSL Methodology">
        <p>The IKSL accreditation involves:</p>
        <ul className="list-decimal list-inside ml-4 space-y-1">
          <li><strong>Knowledge Mapping:</strong> Documenting specific areas of wisdom and expertise within the community or organization.</li>
          <li><strong>Translation Framework Development:</strong> Creating processes for making Indigenous knowledge accessible and applicable to non-Indigenous contexts.</li>
          <li><strong>Application Identification:</strong> Identifying specific contemporary challenges where traditional knowledge offers unique solutions.</li>
          <li><strong>Partnership Building:</strong> Establishing connections with organizations that can benefit from Indigenous approaches.</li>
          <li><strong>Economic Model Creation:</strong> Developing mechanisms for fair recognition and compensation for knowledge contributions.</li>
        </ul>
      </Section>

      <Section title="Value Proposition">
        <p>For participating communities and organizations, IKSL accreditation delivers:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Economic Recognition: Formal valuation and compensation for knowledge</li>
          <li>Leadership Positioning: Recognition as authoritative voices in solving challenges</li>
          <li>Partnership Opportunities: Connections with organizations seeking sustainable approaches</li>
          <li>Intergenerational Continuity: Pathways for young people to value traditional knowledge</li>
          <li>Design Influence: Ability to shape how larger systems are developed</li>
          <li>Global Network Access: Connection with other knowledge holders</li>
        </ul>
      </Section>

      <Section title="Implementation Roadmap">
        <p>The IKSL journey follows several key phases:</p>
        <ul className="space-y-2">
          <li><strong>Recognition and Documentation (3-6 months):</strong> Identification, Documentation, Assessment</li>
          <li><strong>Translation Framework Development (6 months):</strong> Accessibility processes, Ethical guidelines, Communication approaches</li>
          <li><strong>Partnership Establishment (Ongoing):</strong> Connection, Project development, Economic model creation</li>
          <li><strong>Case Study Implementation (12-24 months):</strong> Application, Documentation, Refinement</li>
          <li><strong>Network Participation (Ongoing):</strong> Collaboration, Knowledge sharing, Events</li>
        </ul>
      </Section>

      <Section title="Impact Framework">
        <p>IKSLs will create impact through:</p>
        <div className="grid md:grid-cols-3 gap-4 mt-2">
             <div className="bg-emerald-50 p-3 rounded border border-emerald-100">
                <h4 className="font-semibold text-emerald-800 mb-1">Knowledge System Renewal</h4>
                 <ul className="list-disc list-inside text-sm">
                    <li>Documentation & preservation</li>
                    <li>Intergenerational transfer</li>
                    <li>Contemporary applications</li>
                 </ul>
            </div>
             <div className="bg-emerald-50 p-3 rounded border border-emerald-100">
                <h4 className="font-semibold text-emerald-800 mb-1">Economic Transformation</h4>
                 <ul className="list-disc list-inside text-sm">
                    <li>Fair compensation</li>
                    <li>Traditional livelihoods</li>
                    <li>Mainstream integration</li>
                 </ul>
            </div>
             <div className="bg-emerald-50 p-3 rounded border border-emerald-100">
                <h4 className="font-semibold text-emerald-800 mb-1">Design Influence</h4>
                 <ul className="list-disc list-inside text-sm">
                    <li>Reshaping processes</li>
                    <li>New solutions</li>
                    <li>Holistic approaches</li>
                 </ul>
            </div>
        </div>
      </Section>

      <Section title="Case Study Examples">
        <p>IKSLs might develop initiatives such as:</p>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Regenerative Land Management:</strong> Applying traditional burning and cultivation practices</li>
          <li><strong>Indigenous Bioregional Mapping:</strong> Creating economic/ecological frameworks</li>
          <li><strong>Natural Health Approaches:</strong> Integrating traditional medicine with healthcare</li>
          <li><strong>Sustainable Architecture:</strong> Applying Indigenous design principles to building</li>
          <li><strong>Relational Decision-Making:</strong> Implementing traditional governance approaches</li>
        </ul>
        <blockquote className="border-l-4 border-emerald-200 pl-4 italic text-gray-500 mt-2">
          "Who has deep LORE or the equivalent knowledge of nature and biodiversity, and who knows how to increase the health of natural ecosystems? Who can do what Uncle Noel can after bushfires, who really knows how to make land as healthy as possible and as wealthy as possible." - Jack Manning Bancroft
        </blockquote>
      </Section>

      <Section title="Measurement Framework">
        <p>IKSL impact will be tracked through:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Knowledge Preservation Metrics</li>
          <li>Application Indicators</li>
          <li>Economic Value Creation</li>
          <li>Network Contribution</li>
          <li>Message Stick Metrics</li>
        </ul>
      </Section>

      <Section title="Resource Requirements">
        <p>The IKSL program provides:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Initial financial support (~$10,000/lab annually)</li>
          <li>Documentation and translation support</li>
          <li>Connection to the global IMAGI-NATION network</li>
          <li>Pathways to partnerships</li>
          <li>Opportunities for knowledge exchange and travel</li>
        </ul>
      </Section>

      <Section title="Economic Context">
        <p>The IKSL initiative operates within significant opportunity spaces:</p>
        <ul className="list-disc list-inside ml-4">
          <li>$800 billion nature repair market</li>
          <li>$125 trillion centered nature market</li>
          <li>Growing market demand for sustainable approaches</li>
          <li>Increasing recognition of Indigenous rights and knowledge</li>
          <li>Emerging frameworks for intellectual property protection</li>
        </ul>
      </Section>
      
       <Section title="Implementation Considerations">
         <p>Key considerations for the IKSL program include:</p>
         <ul className="list-disc list-inside ml-4">
            <li>Accessibility: Creating pathways without tech sophistication</li>
            <li>Cultural Safety: Ensuring protection of sacred knowledge</li>
            <li>Appropriate Recognition: Acknowledging collective ownership</li>
            <li>Language Preservation: Supporting maintenance of Indigenous languages</li>
            <li>Flexible Documentation: Using diverse approaches beyond text</li>
         </ul>
          <blockquote className="border-l-4 border-emerald-200 pl-4 italic text-gray-500 mt-2">
          "They may not ever be able to apply online. They may not ever be able to meet online when they're a core part of the ecosystem... they may be able to have a representative that can rep them online." - Jack Manning Bancroft
        </blockquote>
      </Section>

      <Section title="Conclusion">
        <p>The Indigenous Knowledge Systems Labs represent a fundamental reimagining of how we value and integrate traditional wisdom in contemporary contexts. By bringing Indigenous knowledge to the front of the design queue, we create opportunities not only for more just recognition of traditional wisdom but for more effective solutions to our most pressing challenges.</p>
        <blockquote className="border-l-4 border-emerald-200 pl-4 italic text-gray-500 mt-2">
          "Deep, who has deep like LORE or the equivalent knowledge of nature and biodiversity, and who knows how to increase the health of natural ecosystems... who really knows how to make land as healthy as possible and as wealthy as possible, would be my description." - Jack Manning Bancroft (on ideal IKSL participants)
        </blockquote>
        <p>The IKSL initiative isn't simply about preserving or documenting Indigenous knowledge; it's about creating dynamic systems that position this wisdom at the center of how we address contemporary challenges. For Indigenous communities and organizations committed to sharing their knowledge in appropriate ways, the IKSL pathway offers both recognition and practical impact.</p>
         <blockquote className="border-l-4 border-emerald-200 pl-4 italic text-gray-500 mt-2">
          "The key play with Indigenous Knowledge Systems Labs is to bring Indigenous knowledge systems to the start of the design queue and not have us bottom feeding at the end of the economy on survival and being seen as a problem to be fixed." - Jack Manning Bancroft
        </blockquote>
      </Section>

    </div>
  );
};

export default IkSLPage; 