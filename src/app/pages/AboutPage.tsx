import { PageHero } from '@/app/components/ui-workhelio/PageHero';
import { SectionContainer } from '@/app/components/ui-workhelio/SectionContainer';
import { Target, Eye, Shield, Users, Award, Globe } from 'lucide-react';

const values = [
  {
    icon: <Target className="h-8 w-8" />,
    title: 'Accountability',
    description: 'We deliver on our commitments with transparency and measurable results.',
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Integrity',
    description: 'Ethical conduct and compliance are non-negotiable in everything we do.',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Collaboration',
    description: 'We work closely with clients and partners to achieve shared objectives.',
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: 'Excellence',
    description: 'We maintain the highest standards of quality in project execution.',
  },
];

export function AboutPage() {
  return (
    <div>
      <PageHero
        subtitle="About Workhelio"
        title="Built for Complex, High-Stakes Projects"
        description="We're a diversified group company delivering data analytics, machine learning, and AI services across government contracting, education, supply chain and logistics, technology solutions, and infrastructure project services."
      />

      {/* Company Overview */}
      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Overview</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="mb-4">
              Workhelio is a professional services organization specializing in government contracting, 
              supply chain management, technology implementation, and infrastructure project delivery. 
              We serve federal, state, and local agencies, as well as enterprise clients in regulated industries.
            </p>
            <p className="mb-4">
              Our work is characterized by disciplined execution, regulatory compliance, and a focus on 
              long-term value. We operate in environments where accountability, transparency, and risk 
              management are essential to success.
            </p>
            <p>
              With deep expertise across multiple domains, we help organizations navigate complex 
              procurement processes, modernize operations, and deliver mission-critical projects on time and within budget.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Mission and Vision */}
      <SectionContainer background="gray">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-[#0891b2]/10 text-[#0891b2] mb-6">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver reliable, compliant, and high-quality solutions that enable government agencies 
              and enterprise organizations to achieve their strategic objectives. We build trust through 
              disciplined execution, transparency, and measurable outcomes.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-[#0891b2]/10 text-[#0891b2] mb-6">
              <Eye className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the trusted partner of choice for organizations operating in regulated, 
              high-accountability environments—recognized for our expertise, integrity, and ability 
              to deliver complex projects that create lasting value.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Leadership and Governance */}
      <SectionContainer>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership and Governance</h2>
          <p className="text-lg text-gray-600">
            Workhelio is led by experienced executives with backgrounds in government contracting, 
            program management, and enterprise operations. Our leadership team brings decades of 
            combined experience in delivering large-scale, mission-critical projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { role: 'Executive Leadership', description: 'Strategic direction and organizational oversight' },
            { role: 'Board of Advisors', description: 'Industry expertise and governance guidance' },
            { role: 'Compliance Officers', description: 'Regulatory adherence and risk management' },
          ].map((item) => (
            <div key={item.role} className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#0891b2]/10">
                <Globe className="h-8 w-8 text-[#0891b2]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.role}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Values */}
      <SectionContainer background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These principles guide our work and define how we engage with clients, partners, and stakeholders.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.title} className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#0891b2]/10 text-[#0891b2] mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Ethics and Compliance */}
      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ethics, Transparency, and Compliance</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="mb-4">
              Workhelio maintains strict ethical standards and compliance protocols across all operations. 
              We are committed to transparency in our business practices and maintain open lines of 
              communication with clients, regulators, and stakeholders.
            </p>
            <p className="mb-4">
              Our compliance program includes regular audits, employee training, and adherence to all 
              applicable federal, state, and local regulations. We maintain certifications and clearances 
              required for government contracting and work in regulated industries.
            </p>
            <div className="mt-8 bg-gray-50 border-l-4 border-[#0891b2] p-6">
              <p className="font-semibold text-gray-900 mb-2">Commitment to Accountability</p>
              <p className="text-gray-700">
                Every project is managed with built-in quality controls, risk mitigation strategies, 
                and transparent reporting mechanisms to ensure accountability at every level.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
