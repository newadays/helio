import { PageHero } from '@/app/components/ui-workhelio/PageHero';
import { SectionContainer } from '@/app/components/ui-workhelio/SectionContainer';
import { Users, TrendingUp, Award, Heart, Briefcase } from 'lucide-react';

const values = [
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Professional Growth',
    description: 'Opportunities to work on complex, high-impact projects that advance your career.',
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: 'Challenging Work',
    description: 'Meaningful projects in government contracting, technology, and infrastructure.',
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: 'Competitive Benefits',
    description: 'Comprehensive benefits package including health, retirement, and professional development.',
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: 'Work-Life Balance',
    description: 'Flexible work arrangements and a commitment to employee well-being.',
  },
];

const openPositions = [
  {
    title: 'Senior Project Manager',
    department: 'Project Management Office',
    location: 'Washington, DC / Hybrid',
    type: 'Full-time',
    description: 'Leading federal government contracts with complex delivery requirements.',
  },
  {
    title: 'Compliance Analyst',
    department: 'Compliance & Risk',
    location: 'Remote',
    type: 'Full-time',
    description: 'Supporting FAR/DFARS compliance and audit readiness across projects.',
  },
  {
    title: 'Supply Chain Consultant',
    department: 'Supply Chain & Logistics',
    location: 'Various Locations',
    type: 'Full-time',
    description: 'Optimizing supply chain operations for government and enterprise clients.',
  },
  {
    title: 'Data Analytics Engineer',
    department: 'Technology Solutions',
    location: 'Remote',
    type: 'Full-time',
    description: 'Developing data analytics and ML solutions for federal agencies.',
  },
];

export function CareersPage() {
  return (
    <div>
      <PageHero
        subtitle="Careers"
        title="Join Our Team"
        description="Build your career with a company focused on complex, mission-critical work in government contracting and enterprise services."
      />

      {/* Working at Workhelio */}
      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Working at Workhelio</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="mb-4">
              Workhelio offers professionals the opportunity to work on challenging, high-stakes projects 
              in government contracting, supply chain management, technology implementation, and infrastructure delivery.
            </p>
            <p className="mb-4">
              We're looking for disciplined, detail-oriented professionals who thrive in regulated environments 
              and are committed to delivering exceptional results for government and enterprise clients.
            </p>
            <p>
              Our work requires strong project management skills, compliance expertise, and the ability to 
              navigate complex stakeholder relationships. If you value accountability, transparency, and 
              measurable outcomes, Workhelio may be the right fit.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Culture and Values */}
      <SectionContainer background="gray">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work Here</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a professional environment focused on meaningful work, continuous learning, and career development.
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

      {/* Benefits */}
      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits and Perks</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Comprehensive health, dental, and vision insurance',
              '401(k) with company match',
              'Professional development and training budget',
              'Flexible work arrangements',
              'Paid time off and holidays',
              'Life and disability insurance',
              'Tuition reimbursement',
              'Employee assistance program',
            ].map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <div className="h-2 w-2 rounded-full bg-[#0891b2] mt-2 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Open Positions */}
      <SectionContainer background="gray">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Opportunities</h2>
          <p className="text-lg text-gray-600">
            Explore open positions across our business divisions.
          </p>
        </div>

        <div className="space-y-6">
          {openPositions.map((position) => (
            <div key={position.title} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:border-[#0891b2] transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Briefcase className="h-5 w-5 text-[#0891b2]" />
                    <span className="text-sm font-medium text-gray-500">{position.department}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{position.title}</h3>
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                      {position.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                      {position.type}
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#0891b2] rounded-md hover:bg-[#0e7490] transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Don't see the right role? We're always looking for talented professionals.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center text-[#0891b2] font-semibold hover:text-[#0e7490]"
          >
            Submit Your Resume
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </SectionContainer>
    </div>
  );
}
