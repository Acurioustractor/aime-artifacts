import React from 'react';

const Section = ({ title, children }) => (
  <section className="mb-8">
    <h3 className="text-xl font-semibold text-gray-700 mb-3 border-b pb-1">{title}</h3>
    <div className="space-y-3 text-gray-600">{children}</div>
  </section>
);

const JoyCorpsPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow">
      <h2 className="text-3xl font-bold text-pink-700 mb-4">JOY CORPS: Transforming Organizations Through Relational Economics</h2>
      
      <Section title="Executive Summary">
        <p>Joy Corps represents a paradigm shift in how organizations operate, moving from purely transactional economics to relational economics. This business case outlines the opportunity for 1,000 organizations to become accredited Joy Corps, centering their operations around imagination, mentoring, and custodianship to create sustainable impact while maintaining economic viability.</p>
      </Section>

      <Section title="The Challenge">
        <p>Organizations today face multiple intersecting challenges:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Motivating and engaging staff in remote/hybrid environments</li>
          <li>Creating genuine risk appetite at board and executive levels</li>
          <li>Balancing profit with purpose in increasingly complex stakeholder environments</li>
          <li>Addressing environmental sustainability beyond tokenistic efforts</li>
          <li>Finding meaning in organizational existence beyond perpetuity for its own sake</li>
        </ul>
        <blockquote className="border-l-4 border-pink-200 pl-4 italic text-gray-500 mt-2">
          "Does your organization need to live forever? Maybe if there was an intentional death that you'd attack the problem of bankruptcy." - Jack Manning Bancroft
        </blockquote>
      </Section>

      <Section title="The Opportunity">
        <p>The Joy Corps model enables organizations to:</p>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Reimagine Staff Engagement:</strong> Move beyond traditional employee engagement metrics to create authentic relational connections, particularly addressing the challenges of hybrid and remote work environments.</li>
          <li><strong>Develop Risk Appetite:</strong> Cultivate boards and executive teams that embrace calculated risk toward meaningful innovation rather than preservation of the status quo.</li>
          <li><strong>Center Joy in Operations:</strong> Connect organizational purpose to well-being economics, where the value of health, peace, and talent development becomes central to business objectives.</li>
          <li><strong>Access New Markets:</strong> Tap into emerging "peace economy" and "well-being economy" opportunities estimated to be worth trillions globally.</li>
          <li><strong>Become Exemplars in Relational Economics:</strong> Position as outliers in their industry who demonstrate how relational models outperform purely transactional ones.</li>
        </ul>
      </Section>

      <Section title="Target Organizations">
        <p>The ideal Joy Corps candidates are:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Executive or board-level decision-makers</li>
          <li>From both publicly listed and private companies</li>
          <li>"Outliers" within their ecosystem or nation-state</li>
          <li>Leaders with the ability to move people "from spaces where it was short-term unpopular to apply long-term action"</li>
          <li>Organizations with capacity for independent thought and proven ability to navigate complexity</li>
          <li>Businesses with strong sense of grace, equity, and dignity</li>
        </ul>
        <blockquote className="border-l-4 border-pink-200 pl-4 italic text-gray-500 mt-2">
          "They're interested in the long term and have the ability to utilize story to move people there. They're not afraid of short-term unpopularity. In fact, they thrive in it." - IMAGI-NATION documentation
        </blockquote>
      </Section>
      
      <Section title="The Joy Corps Methodology">
        <p>The Joy Corps accreditation involves a structured journey through:</p>
        <ul className="list-decimal list-inside ml-4 space-y-1">
            <li><strong>Default Settings Assessment:</strong> Organizations evaluate their current relational orientation and begin the process of identifying inherited patterns that may limit their potential.</li>
            <li><strong>Relational Reorientation:</strong> Using Indigenous knowledge systems, organizations map their relationships with stakeholders, communities, and the environment, creating new frameworks for decision-making.</li>
            <li><strong>Systems Design Implementation:</strong> Leaders learn to see their organization as part of interconnected systems and develop strategies that work with, rather than against, these connections.</li>
            <li><strong>Action Planning:</strong> Organizations create specific, measurable actions to shift from transactional to relational economics in their operations.</li>
            <li><strong>Measurement Framework:</strong> Implementation of Gross Relational Potential (GRP) metrics alongside traditional GDP/profit metrics to create holistic impact measurement.</li>
        </ul>
      </Section>

      <Section title="Value Proposition">
        <p>For participating organizations, Joy Corps accreditation delivers:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Competitive Differentiation: Stand out as an industry outlier with innovative approaches to business challenges</li>
          <li>Talent Attraction and Retention: Address motivation challenges through deeper purpose connection</li>
          <li>Risk Management: Develop frameworks for healthy risk-taking that drives innovation</li>
          <li>New Market Access: Tap into emerging peace, well-being, and relational economies</li>
          <li>Legacy Building: Create lasting impact beyond the organization's lifespan</li>
        </ul>
      </Section>
      
      <Section title="Implementation Roadmap">
        <p>The Joy Corps journey follows several key phases:</p>
        <ul className="space-y-2">
            <li><strong>Accreditation Preparation (3 months):</strong> Organization assessment, Leadership alignment, Baseline relationship mapping</li>
            <li><strong>River Run Accreditation (6 months):</strong> Navigation through structured learning, Completion of modules, Development of relational metrics</li>
            <li><strong>Implementation Support (12 months):</strong> Practical application, Mentoring, Regular evaluation</li>
            <li><strong>Ongoing Accreditation (Annual):</strong> Measurement against GRP, Contribution to knowledge base, Network participation</li>
        </ul>
      </Section>

      <Section title="Economic Impact">
        <p>Joy Corps participation opens access to:</p>
        <ul className="list-disc list-inside ml-4">
          <li>$125 trillion centered nature market</li>
          <li>Emerging well-being economy opportunities</li>
          <li>Peace economy investments (estimated at 10% of the current $50 trillion war economy)</li>
          <li>Talent and recruitment market restructuring</li>
          <li>Intellectual capital optimization through knowledge sharing</li>
        </ul>
      </Section>

      <Section title="Case Study: Potential Impact Model">
         <p>A mid-sized technology company implementing Joy Corps principles could expect:</p>
         <ul className="list-disc list-inside ml-4">
            <li>30% increase in employee retention</li>
            <li>25% reduction in recruitment costs through mentoring programs</li>
            <li>15% productivity improvement through enhanced relational networks</li>
            <li>Access to new market segments focused on peace and well-being</li>
            <li>Enhanced community standing and brand perception</li>
            <li>Long-term sustainability planning that increases investor confidence</li>
         </ul>
      </Section>

      <Section title="Measurement Framework">
        <p>Joy Corps organizations will be evaluated through:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Message Stick Metrics: Indigenous-designed measurement tools</li>
          <li>Hoodie Stock Exchange: Real-time tracking of value creation</li>
          <li>Qualitative Storytelling: Documentation through narrative formats</li>
          <li>Traditional Business Metrics: Integration with existing indicators</li>
        </ul>
      </Section>

      <Section title="Conclusion">
        <p>The Joy Corps represents a transformative opportunity for organizations to reimagine their purpose and operations through relational economics. By centering joy, mentoring, and custodianship, these organizations can achieve meaningful impact while remaining economically viable and competitive.</p>
        <p>The invitation to become a Joy Corp is not simply about obtaining a certification; it's about becoming part of a movement to fundamentally reshape how organizations create value in society. It's for leaders who recognize, as Jack Manning Bancroft phrases it: "What's the energy marketplace around the world? Could you unlock an energy market that doesn't exist?"</p>
        <p>For forward-thinking organizations ready to embrace this challenge, the Joy Corps pathway offers both the framework and the community to succeed.</p>
         <blockquote className="border-l-4 border-pink-200 pl-4 italic text-gray-500 mt-2">
          "Joy is well-being. What's a well-being economy worth? What's it worth to have health?" - Jack Manning Bancroft
        </blockquote>
      </Section>
      
    </div>
  );
};

export default JoyCorpsPage; 