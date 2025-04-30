import React from 'react';

const Section = ({ title, children }) => (
  <section className="mb-8">
    <h3 className="text-xl font-semibold text-gray-700 mb-3 border-b pb-1">{title}</h3>
    <div className="space-y-3 text-gray-600">{children}</div>
  </section>
);

const CitizensPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">CITIZENS: From Entrepreneur to Relational Change-Maker</h2>

      <Section title="Executive Summary">
        <p>The Citizens program within IMAGI-NATION addresses a fundamental misalignment in how we conceptualize change-making in modern society. Moving beyond the limited "heroic entrepreneur" model, Citizens creates pathways for 1,000 systems change leaders to develop collaborative, relational approaches to societal transformation. This business case outlines the opportunity, methodology, and potential impact of the Citizens initiative.</p>
      </Section>

      <Section title="The Challenge">
        <p>Our current models of social impact and entrepreneurship face critical limitations:</p>
        <ul className="list-disc list-inside ml-4">
          <li>The entrepreneur obsession places disproportionate emphasis on individual heroic journeys</li>
          <li>Change-makers experience isolation and loneliness in their work</li>
          <li>Leaders struggle to admit what they don't know or acknowledge they aren't the most intelligent person in the room</li>
          <li>Many change agents have limited collaborative capabilities despite possessing individual talents</li>
          <li>The pursuit of recognition and awards often supersedes genuine impact</li>
          <li>Credit-seeking behavior undermines sustainable change potential</li>
        </ul>
        <blockquote className="border-l-4 border-blue-200 pl-4 italic text-gray-500 mt-2">
          "This idea that the entrepreneur, the individual hero's journey... has succeeded in lots of different ways. And got all the feedback loops, and has been lonely in that journey... and actually understanding that this is a facade." - Jack Manning Bancroft
        </blockquote>
      </Section>

      <Section title="The Opportunity">
        <p>The Citizens program offers:</p>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Relational Reorientation:</strong> Moving from individual hero narratives to collaborative, ecosystem-based approaches to change.</li>
          <li><strong>Authentic Connection:</strong> Creating spaces where leaders can admit vulnerability, uncertainty, and need for collaboration.</li>
          <li><strong>Superpower Amplification:</strong> Taking individual charisma and organizational talent and multiplying it through network effects.</li>
          <li><strong>Legacy Transformation:</strong> Shifting from award-seeking to creating change that lasts beyond individual recognition.</li>
          <li><strong>Systems Translation:</strong> Developing skills to connect with diverse stakeholders across traditional boundaries.</li>
        </ul>
      </Section>

      <Section title="Target Change-Makers">
        <p>The ideal Citizens program participants are:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Individuals who have experienced "entrepreneur journeys" and recognize their limitations</li>
          <li>Leaders who acknowledge they've "lived the facade" of outward-facing strength</li>
          <li>Change-makers with natural charisma or organizational ability who want greater impact</li>
          <li>Individuals seeking healthier, more collaborative approaches to social change</li>
          <li>Those who want to address patterns from the past and shape different models for the future</li>
          <li>Leaders tired of pursuing awards and recognition who now seek lasting impact</li>
        </ul>
        <blockquote className="border-l-4 border-blue-200 pl-4 italic text-gray-500 mt-2">
          "They don't want the awards anymore. They see the danger of those feedback loops. They're not in it for the status and the credit – they really want to actually create the change that lasts. That's all they're interested in." - IMAGI-NATION Documentation
        </blockquote>
      </Section>

      <Section title="The Citizens Methodology">
        <p>The Citizens journey involves:</p>
        <ul className="list-decimal list-inside ml-4 space-y-1">
          <li><strong>Default Settings Discovery:</strong> Examining inherited patterns of individualism, heroism, and isolation that limit true change potential.</li>
          <li><strong>Relational Mapping:</strong> Using indigenous knowledge systems to visualize and strengthen connections across stakeholder networks.</li>
          <li><strong>Collaborative Design:</strong> Learning processes for co-creating solutions that leverage collective intelligence rather than individual brilliance.</li>
          <li><strong>Systems Activation:</strong> Implementing approaches that address root causes rather than symptoms by engaging entire ecosystems.</li>
          <li><strong>Translation Development:</strong> Building capacity to move between different contexts, languages, and knowledge systems.</li>
          <li><strong>Mentorship Cultivation:</strong> Establishing reciprocal learning relationships that transform how knowledge flows.</li>
        </ul>
      </Section>

      <Section title="Value Proposition">
        <p>For participants, the Citizens program delivers:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Multiplied Impact: Transform individual charisma into network influence (100x-1000x amplification)</li>
          <li>Authentic Leadership: Freedom from performative entrepreneurship and hero narratives</li>
          <li>Connection Network: Access to unlikely collaborators that expand thinking and capabilities</li>
          <li>Deep Intelligence: Development of collective wisdom beyond individual knowledge</li>
          <li>Legacy Building: Creation of change that outlasts individual involvement</li>
          <li>Personal Well-being: Relief from isolation and burnout common in change-making roles</li>
        </ul>
      </Section>

      <Section title="Implementation Roadmap">
        <p>The Citizens journey follows key phases:</p>
        <ul className="space-y-2">
          <li><strong>Orientation (2 months):</strong> Assessment, Pattern identification, Baseline metrics</li>
          <li><strong>Transformation (6 months):</strong> Structured learning, Indigenous knowledge integration, Narrative reconstruction</li>
          <li><strong>Implementation (4 months):</strong> Application of relational approaches, Framework development, Measurement systems integration</li>
          <li><strong>Network Activation (Ongoing):</strong> Participation in events, Mentorship exchange, Contribution to resources</li>
        </ul>
      </Section>
      
      <Section title="Impact Framework">
         <p>Citizens participants will create impact through:</p>
         <div className="grid md:grid-cols-3 gap-4 mt-2">
            <div className="bg-blue-50 p-3 rounded border border-blue-100">
                <h4 className="font-semibold text-blue-800 mb-1">Personal Transformation</h4>
                <ul className="list-disc list-inside text-sm">
                    <li>Isolation to connection</li>
                    <li>Hero to collaborative</li>
                    <li>Knowledge hoarding to sharing</li>
                </ul>
            </div>
            <div className="bg-blue-50 p-3 rounded border border-blue-100">
                <h4 className="font-semibold text-blue-800 mb-1">Network Effects</h4>
                 <ul className="list-disc list-inside text-sm">
                    <li>Unlikely connections</li>
                    <li>Cross-group translation</li>
                    <li>Knowledge system bridging</li>
                </ul>
            </div>
            <div className="bg-blue-50 p-3 rounded border border-blue-100">
                <h4 className="font-semibold text-blue-800 mb-1">Systems Change</h4>
                 <ul className="list-disc list-inside text-sm">
                    <li>Root cause projects</li>
                    <li>Relational economics implementation</li>
                    <li>Legacy platform establishment</li>
                </ul>
            </div>
         </div>
      </Section>

      <Section title="Case Study: Potential Impact Model">
        <p>A Citizens participant working in climate innovation could:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Replace individual founder-centered approach with collaborative leadership</li>
          <li>Connect indigenous knowledge holders with technical specialists</li>
          <li>Develop solutions that address both environmental and social dimensions</li>
          <li>Create platforms for knowledge sharing rather than proprietary models</li>
          <li>Measure success through relationship strength and knowledge transfer</li>
          <li>Build legacy structures designed for continuity beyond personal involvement</li>
        </ul>
      </Section>

      <Section title="Measurement Framework">
        <p>Citizens impact will be tracked through:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Relational Health Metrics</li>
          <li>Knowledge Transfer Indicators</li>
          <li>Collaborative Project Outcomes</li>
          <li>Personal Transformation Markers</li>
          <li>Message Stick Integration</li>
        </ul>
      </Section>

      <Section title="Resource Requirements">
        <p>The Citizens program requires:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Participation commitment (12 months minimum)</li>
          <li>Openness to personal transformation</li>
          <li>Willingness to engage with unlikely connections</li>
          <li>Application of learnings to current work</li>
          <li>Contribution to collective knowledge resources</li>
        </ul>
      </Section>

      <Section title="Conclusion">
        <p>The Citizens program represents a fundamental shift in how we approach social change and leadership. By moving beyond the entrepreneurial hero's journey to embracing relational, collaborative models, participants can multiply their impact while finding greater personal fulfillment.</p>
        <blockquote className="border-l-4 border-blue-200 pl-4 italic text-gray-500 mt-2">
          "If they can invest in the node in the network, and how they relate to other people, they can invest in their ability to translate – that their superpower will be multiplied by forces of like a hundred to a thousand to a million, if they can just spend their time really listening deeply to people and to other creatures." - Jack Manning Bancroft
        </blockquote>
        <p>The Citizens program isn't simply about creating better individual change-makers; it's about restructuring how change happens through relational networks that can address complex challenges no individual could solve alone. For those ready to transcend the limitations of heroic entrepreneurship, the Citizens pathway offers both the framework and community to create meaningful, lasting change.</p>
        <blockquote className="border-l-4 border-blue-200 pl-4 italic text-gray-500 mt-2">
          "They acknowledge they've lived the facade... they really want to actually create the change that lasts, that's all they're interested in. They want to put their energy in the most effective space, and they acknowledge that to do that they have to connect with people they don't know and with things they don't know. But that's the only way they're gonna find that pass." - Jack Manning Bancroft
        </blockquote>
      </Section>

    </div>
  );
};

export default CitizensPage; 