import React from 'react';

const Section = ({ title, children }) => (
  <section className="mb-8">
    <h3 className="text-xl font-semibold text-gray-700 mb-3 border-b pb-1">{title}</h3>
    <div className="space-y-3 text-gray-600">{children}</div>
  </section>
);

const ImagiLabsPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow">
      <h2 className="text-3xl font-bold text-yellow-700 mb-4">IMAGI-LABS (SCHOOLS): Transforming Education Through Imagination and Custodianship</h2>

      <Section title="Executive Summary">
        <p>IMAGI-Labs represents a revolutionary approach to education, transforming 1,000 schools—particularly those serving marginalized communities—into centers of imagination, innovation, and real-world problem-solving. By becoming "imagination labs," these schools will shift from passive knowledge consumption to active design and problem-solving, positioning students as valuable contributors to addressing global challenges while simultaneously creating new economic opportunities.</p>
      </Section>

      <Section title="The Challenge">
        <p>Today's education system faces critical limitations:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Schools often operate as production lines preparing students for outdated economic models</li>
          <li>Young people's natural imagination is systematically diminished rather than cultivated</li>
          <li>Students in marginalized communities are viewed as problems rather than sources of solutions</li>
          <li>Educators feel isolated in their attempts to innovate against standardized systems</li>
          <li>Schools are disconnected from real-world challenges and economic opportunities</li>
          <li>Students graduate without the collaborative, creative capacities needed for an uncertain future</li>
        </ul>
        <blockquote className="border-l-4 border-yellow-200 pl-4 italic text-gray-500 mt-2">
          "We can't imagine as grown-ups because we're distracted, not because our eyes can't see trillions of years away. So what we need to do is ask ourselves some pretty serious questions about the default settings we have inherited right now." - Jack Manning Bancroft
        </blockquote>
      </Section>

      <Section title="The Opportunity">
        <p>IMAGI-Labs provides a pathway to transform schools into:</p>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Centers of Creative Problem-Solving:</strong> Positioning schools as design hubs where students tackle real challenges faced by industry and society.</li>
          <li><strong>Economic Transformation Engines:</strong> Making schools the heart of their local economies through knowledge creation and solution development.</li>
          <li><strong>Imagination Incubators:</strong> Reversing the decline in creative thinking (from "genius level imagination at age 5" to "3% having genius level imagination by age 35").</li>
          <li><strong>Global Collaborative Networks:</strong> Connecting marginalized students with unlikely collaborators worldwide.</li>
          <li><strong>Practical Hope Generators:</strong> Creating concrete examples of student-led solutions that demonstrate young people's capacity to create positive change.</li>
        </ul>
      </Section>

      <Section title="Target Educational Leaders">
        <p>The ideal IMAGI-Labs candidates are:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Visionary principals and educators who maintain their imagination despite system constraints</li>
          <li>Leaders who believe wholeheartedly in every student's intelligence and potential</li>
          <li>Educators working in marginalized communities with limited resources but unlimited vision</li>
          <li>School leaders who see education's potential to transform entire regional economies</li>
          <li>Educators who feel isolated in their innovative approaches and seek a global community</li>
          <li>Leaders ready to position their students as designers rather than passive recipients</li>
        </ul>
        <blockquote className="border-l-4 border-yellow-200 pl-4 italic text-gray-500 mt-2">
          "You're that case study anomaly principal. You're Chris, Sara, going to Sherburg, you know, one teacher in the state that has managed to keep your imagination and your child alive." - IMAGI-NATION Documentation
        </blockquote>
      </Section>

      <Section title="The IMAGI-Labs Methodology">
        <p>The IMAGI-Labs transformation involves:</p>
        <ul className="list-decimal list-inside ml-4 space-y-1">
          <li><strong>Imagination Declaration Commitment:</strong> Schools commit to the principles outlined in the Imagination Declaration, placing creativity and student agency at the center of learning.</li>
          <li><strong>Design Ecosystem Development:</strong> Creation of processes and structures that enable students to function as designers and problem-solvers.</li>
          <li><strong>Real-World Challenge Integration:</strong> Establishing connections with industry, government, and community partners to bring authentic challenges into the classroom.</li>
          <li><strong>Economic Model Implementation:</strong> Developing frameworks for schools to participate in knowledge economies through student-generated solutions.</li>
          <li><strong>Global Network Participation:</strong> Connecting with other IMAGI-Labs schools to collaborate across traditional boundaries.</li>
          <li><strong>Imagination Metrics Development:</strong> Creating new ways to measure and validate student creativity and problem-solving beyond standardized testing.</li>
        </ul>
      </Section>

      <Section title="Value Proposition">
        <p>For participating schools, IMAGI-Labs accreditation delivers:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Student Engagement: Dramatic increases in student motivation through authentic purpose and agency</li>
          <li>Teacher Fulfillment: Renewed sense of purpose and creativity among educators</li>
          <li>Community Impact: Positioning schools as solution centers for local and global challenges</li>
          <li>Economic Opportunity: New funding streams through industry partnerships and solution development</li>
          <li>Global Recognition: Visibility as education innovators within a prestigious international network</li>
          <li>Genuine Student Pathways: Real-world credentials for students based on demonstrated capabilities</li>
        </ul>
      </Section>

       <Section title="Implementation Roadmap">
        <p>The IMAGI-Labs journey follows several key phases:</p>
        <ul className="space-y-2">
          <li><strong>Discovery and Commitment (3 months):</strong> School assessment, Leadership alignment, Declaration commitment</li>
          <li><strong>Design Ecosystem Creation (6 months):</strong> Structural adaptations, Teacher PD, Partnership development</li>
          <li><strong>Implementation (Ongoing):</strong> Challenge integration, Student leadership, Documentation</li>
          <li><strong>Network Participation (Ongoing):</strong> Collaboration, Knowledge sharing, Global challenges</li>
        </ul>
      </Section>

      <Section title="Impact Framework">
        <p>IMAGI-Labs schools will create impact through:</p>
        <div className="grid md:grid-cols-3 gap-4 mt-2">
            <div className="bg-yellow-50 p-3 rounded border border-yellow-100">
                <h4 className="font-semibold text-yellow-800 mb-1">Student Transformation</h4>
                 <ul className="list-disc list-inside text-sm">
                    <li>Creative confidence</li>
                    <li>Real-world capabilities</li>
                    <li>Collaborative leadership</li>
                 </ul>
            </div>
             <div className="bg-yellow-50 p-3 rounded border border-yellow-100">
                <h4 className="font-semibold text-yellow-800 mb-1">Educational Innovation</h4>
                <ul className="list-disc list-inside text-sm">
                    <li>Replicable models</li>
                    <li>Alternative assessments</li>
                    <li>Education for economic dev.</li>
                </ul>
            </div>
             <div className="bg-yellow-50 p-3 rounded border border-yellow-100">
                <h4 className="font-semibold text-yellow-800 mb-1">Community & Economic Impact</h4>
                <ul className="list-disc list-inside text-sm">
                    <li>Local solutions</li>
                    <li>New economic opportunities</li>
                    <li>Community innovation hubs</li>
                </ul>
            </div>
        </div>
      </Section>

      <Section title="Case Study: Potential Impact Model">
        <p>An IMAGI-Labs school in a marginalized community could:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Partner with energy companies to tackle sustainability challenges</li>
          <li>Enable students to develop innovative solutions to local water management issues</li>
          <li>Create community-based applications of emerging technologies</li>
          <li>Establish micro-enterprises based on student innovations</li>
          <li>Document and share successful methodologies with other schools</li>
          <li>Generate alternative income streams through knowledge creation</li>
        </ul>
        <blockquote className="border-l-4 border-yellow-200 pl-4 italic text-gray-500 mt-2">
          "This school won the contract from this company that was trying to solve this impossible problem on energy. And we worked it out." - Jack Manning Bancroft
        </blockquote>
      </Section>

      <Section title="Measurement Framework">
        <p>IMAGI-Labs impact will be tracked through:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Imagination Metrics</li>
          <li>Solution Development Indicators</li>
          <li>Economic Impact Measures</li>
          <li>Network Contribution Evaluations</li>
          <li>Student Agency Assessments</li>
        </ul>
      </Section>

      <Section title="Resource Requirements">
        <p>The IMAGI-Labs program requires:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Leadership commitment to imagination-centered education</li>
          <li>Willingness to reimagine traditional school structures</li>
          <li>Educator capacity for facilitation rather than instruction</li>
          <li>Community and industry partnership development</li>
          <li>Documentation and sharing of methodologies</li>
        </ul>
      </Section>

      <Section title="Conclusion">
        <p>IMAGI-Labs represents a fundamental reimagining of education's purpose and potential. By transforming schools from knowledge consumption centers to imagination laboratories, we can simultaneously address the critical challenges of student engagement, educator fulfillment, and relevant preparation for an uncertain future.</p>
        <blockquote className="border-l-4 border-yellow-200 pl-4 italic text-gray-500 mt-2">
          "You believe genuinely that human beings can change the world. And you want to inspire your kids to a world where they have agency, power, and that their intelligence is valued." - Jack Manning Bancroft
        </blockquote>
        <p>The IMAGI-Labs initiative isn't simply about making schools more engaging; it's about positioning education as the engine of economic and social transformation. For visionary educators ready to embrace this challenge, the IMAGI-Labs pathway offers both the framework and the community to succeed.</p>
         <blockquote className="border-l-4 border-yellow-200 pl-4 italic text-gray-500 mt-2">
          "You see the imagination labs as like one of the 1st times at scale where a thousand schools could be a part of an experiment that showcase a decentralized ecosystem of schools that can solve real problems. And you prove to educators, administrators, principals, etc. that it can be changed." - Jack Manning Bancroft
        </blockquote>
      </Section>

    </div>
  );
};

export default ImagiLabsPage; 