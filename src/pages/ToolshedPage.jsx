import React from 'react';

const Section = ({ title, children }) => (
  <section className="mb-8">
    <h3 className="text-xl font-semibold text-gray-700 mb-3 border-b pb-1">{title}</h3>
    <div className="space-y-3 text-gray-600">{children}</div>
  </section>
);

const ToolshedPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow">
      <h2 className="text-3xl font-bold text-orange-700 mb-4">TOOLSHED: Creating Legacy Resources for Relational Change</h2>

      <Section title="Executive Summary">
        <p>The Toolshed represents IMAGI-NATION's commitment to creating 150 enduring resources—including books, films, methodologies, and protocols—that will outlast the organization's intentional 10-year lifespan. This business case outlines how the Toolshed will develop and distribute these tools to enable continued application of relational approaches to systemic challenges long after IMAGI-NATION itself has concluded.</p>
      </Section>

      <Section title="The Challenge">
        <p>Knowledge transfer for systemic change faces significant barriers:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Valuable methodologies often remain tacit rather than explicit</li>
          <li>Solutions stay within organizational boundaries rather than being widely shared</li>
          <li>Heroic narrative structures hide the "how-to" details of successful approaches</li>
          <li>Complex systems knowledge is rarely translated into accessible formats</li>
          <li>Organizational death limits legacy knowledge transfer</li>
          <li>Future generations lack access to proven approaches for relational change</li>
        </ul>
        <blockquote className="border-l-4 border-orange-200 pl-4 italic text-gray-500 mt-2">
          "We need to codify how do we collaborate with each other again, how do we have discourse, how do we have debate, how do we have conflict, how do we understand how to misunderstand and how do we create a level of complexity into our discourse." - Jack Manning Bancroft
        </blockquote>
      </Section>

      <Section title="The Opportunity">
        <p>The Toolshed initiative offers:</p>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Legacy Creation:</strong> Developing resources that ensure knowledge continues beyond IMAGI-NATION's 10-year lifespan.</li>
          <li><strong>Methodology Codification:</strong> Making tacit knowledge explicit through structured documentation.</li>
          <li><strong>Accessibility Design:</strong> Creating resources in multiple formats to reach diverse audiences.</li>
          <li><strong>Open Source Commitment:</strong> Ensuring knowledge is freely available rather than proprietary.</li>
          <li><strong>Cross-Cultural Translation:</strong> Building resources that bridge different knowledge systems.</li>
        </ul>
      </Section>

      <Section title="Tool Types & Development Approach">
        <p>The Toolshed will develop 150 tools across several categories:</p>
        <ul className="list-disc list-inside ml-4">
          <li><strong>How-To Manuals:</strong> Detailed guides, process maps (successes and failures).</li>
          <li><strong>Case Studies:</strong> In-depth examination, contextual analysis, transferable insights.</li>
          <li><strong>Books:</strong> Comprehensive texts, collaborative authorship, diverse perspectives.</li>
          <li><strong>Films & Media:</strong> Visual documentation, storytelling, accessible formats.</li>
          <li><strong>Protocols & Frameworks:</strong> Structured approaches, cross-cultural guidelines, knowledge exchange systems.</li>
        </ul>
      </Section>

      <Section title="Value Proposition">
        <p>The Toolshed creates value through:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Knowledge Democratization: Making methodologies accessible</li>
          <li>Implementation Support: Providing practical guides</li>
          <li>Legacy Preservation: Ensuring approaches continue</li>
          <li>Translation Enhancement: Creating bridges between knowledge systems</li>
          <li>Collective Authorship: Documenting diverse wisdom</li>
          <li>Open Source Availability: Ensuring free access</li>
        </ul>
      </Section>

       <Section title="Implementation Roadmap">
        <p>The Toolshed development follows several phases:</p>
        <ul className="space-y-2">
          <li><strong>Knowledge Mapping (Ongoing):</strong> Identification, Prioritization, Gap analysis</li>
          <li><strong>Tool Development (Ongoing):</strong> Collaborative creation, Multi-format dev, Audience testing</li>
          <li><strong>Distribution Planning (Years 5-10):</strong> Platform dev, Hosting partners, Preservation strategies</li>
          <li><strong>Legacy Transition (Final 2 years):</strong> Transfer to repositories, Governance establishment, Final documentation</li>
        </ul>
      </Section>

       <Section title="Impact Framework">
        <p>The Toolshed will create impact through:</p>
         <div className="grid md:grid-cols-3 gap-4 mt-2">
             <div className="bg-orange-50 p-3 rounded border border-orange-100">
                <h4 className="font-semibold text-orange-800 mb-1">Immediate Knowledge Transfer</h4>
                 <ul className="list-disc list-inside text-sm">
                    <li>Supporting participants</li>
                    <li>Enabling implementation</li>
                    <li>Frameworks for collab.</li>
                 </ul>
            </div>
            <div className="bg-orange-50 p-3 rounded border border-orange-100">
                <h4 className="font-semibold text-orange-800 mb-1">Long-term Legacy Creation</h4>
                <ul className="list-disc list-inside text-sm">
                    <li>Beyond org. lifespan</li>
                    <li>Future generations</li>
                    <li>Permanent repositories</li>
                 </ul>
            </div>
            <div className="bg-orange-50 p-3 rounded border border-orange-100">
                <h4 className="font-semibold text-orange-800 mb-1">Cross-Boundary Translation</h4>
                <ul className="list-disc list-inside text-sm">
                    <li>Knowledge system bridges</li>
                    <li>Accessible complex ideas</li>
                    <li>Shared vocabulary</li>
                 </ul>
            </div>
        </div>
      </Section>
      
      <Section title="Tool Examples">
         <p>Specific tools under development include:</p>
         <ul className="list-disc list-inside ml-4">
            <li><strong>The CoLab Book:</strong> Resource on collaboration across knowledge systems.</li>
            <li><strong>The Professor's TV Series:</strong> 8-year documentary on reclaiming imagination.</li>
            <li><strong>UNC5 Implementation Guide:</strong> Methodology for creating "Unlikely Connections of Five".</li>
            <li><strong>Joy Corp How-To Manual:</strong> Practical guide for shifting to relational economics.</li>
            <li><strong>Message Stick Measurement Framework:</strong> Indigenous-designed approach to measuring relational value.</li>
         </ul>
         <blockquote className="border-l-4 border-orange-200 pl-4 italic text-gray-500 mt-2">
            "If one of our few legacies in the nine years is we create a co-lab book of processes and protocols for humankind, how broadly the space of non-Indigenous people communicate with Indigenous people and in design and in systems design, then that will be a huge legacy." - Jack Manning Bancroft
         </blockquote>
      </Section>

      <Section title="Measurement Framework">
        <p>Toolshed impact will be tracked through:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Tool Completion Metrics (Target: 150)</li>
          <li>Adoption Indicators</li>
          <li>Accessibility Assessment</li>
          <li>Preservation Evaluation</li>
          <li>Knowledge Transfer Measurement</li>
        </ul>
      </Section>
      
      <Section title="Partner Engagement">
        <p>The Toolshed will engage partners through:</p>
        <ul className="list-disc list-inside ml-4">
            <li>Collaborative Authorship</li>
            <li>Distribution Networks</li>
            <li>Implementation Partners</li>
            <li>Preservation Allies</li>
            <li>Knowledge System Translators</li>
        </ul>
      </Section>

      <Section title="Resource Requirements">
        <p>The Toolshed requires:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Dedicated tool development team</li>
          <li>Documentation specialists</li>
          <li>Multi-format production capabilities</li>
          <li>Input from diverse knowledge holders</li>
          <li>Distribution and preservation infrastructure</li>
        </ul>
      </Section>

      <Section title="Conclusion">
        <p>The Toolshed represents IMAGI-NATION's commitment to lasting impact beyond its organizational lifespan. By creating 150 tools that document and share methodologies for relational approaches to systemic challenges, the initiative ensures that valuable knowledge continues to create impact for generations.</p>
        <blockquote className="border-l-4 border-orange-200 pl-4 italic text-gray-500 mt-2">
          "We're intentionally, by facing our death as a network, we're intentionally understanding that the tools are the things that shape everything into the future, and if we can leave behind these tools, that will be our greatest legacy." - Jack Manning Bancroft
        </blockquote>
        <p>The Toolshed isn't simply about documenting what IMAGI-NATION has done; it's about creating resources that enable others to apply, adapt, and evolve these approaches to meet future challenges. For a world facing increasingly complex systemic problems, these tools provide practical pathways toward more relational, collaborative, and effective solutions.</p>
         <blockquote className="border-l-4 border-orange-200 pl-4 italic text-gray-500 mt-2">
          "We don't want to be the only group that you ever learn from... each body of work is contributing to a collective set of tools... we're unashamedly borrowing from [Wikipedia] in creating co-created books for everybody to then leave that behind." - Jack Manning Bancroft
        </blockquote>
      </Section>

    </div>
  );
};

export default ToolshedPage; 