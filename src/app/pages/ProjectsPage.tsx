import { PageHero } from '@/app/components/ui-workhelio/PageHero';
import { SectionContainer } from '@/app/components/ui-workhelio/SectionContainer';
import { Building2, TrendingUp, Users, Calendar } from 'lucide-react';

const projects = [
  {
    title: 'Federal IT Modernization Program',
    category: 'Technology Solutions',
    description: 'Led a multi-year digital transformation initiative for a federal civilian agency, migrating legacy systems to cloud infrastructure.',
    outcomes: ['40% reduction in operational costs', 'Enhanced security posture', '99.9% system availability'],
    duration: '24 months',
    scale: '$25M+ contract value',
  },
  {
    title: 'State Transportation Infrastructure',
    category: 'Infrastructure Services',
    description: 'Program management for a statewide transportation infrastructure improvement project across multiple counties.',
    outcomes: ['On-time, on-budget delivery', '15+ miles of roadway improvements', 'Zero safety incidents'],
    duration: '36 months',
    scale: '$150M+ program value',
  },
  {
    title: 'Enterprise Supply Chain Optimization',
    category: 'Supply Chain & Logistics',
    description: 'Redesigned supply chain operations for a Fortune 500 manufacturer, implementing advanced analytics and automation.',
    outcomes: ['30% inventory reduction', '25% faster order fulfillment', '$12M annual cost savings'],
    duration: '18 months',
    scale: 'Multi-facility deployment',
  },
  {
    title: 'Defense Logistics Support Services',
    category: 'Government Contracting',
    description: 'Comprehensive logistics and supply support for a Department of Defense facility, managing complex procurement and distribution operations.',
    outcomes: ['100% compliance rating', '98% on-time delivery rate', 'Enhanced readiness metrics'],
    duration: 'Ongoing (5-year contract)',
    scale: 'Multi-site operations',
  },
];

const deliveryMetrics = [
  { metric: '98%', label: 'On-Time Delivery Rate', icon: <Calendar className="h-6 w-6" /> },
  { metric: '100%', label: 'Compliance Score', icon: <Building2 className="h-6 w-6" /> },
  { metric: '95%', label: 'Client Satisfaction', icon: <Users className="h-6 w-6" /> },
  { metric: '$500M+', label: 'Projects Delivered', icon: <TrendingUp className="h-6 w-6" /> },
];

export function ProjectsPage() {
  return (
    <div>
      <PageHero
        subtitle="Our Work"
        title="Projects & Capabilities"
        description="Representative examples of our work across government, enterprise, and infrastructure domains."
      />

      {/* Featured Projects */}
      <SectionContainer>
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            While we maintain client confidentiality, these representative examples illustrate 
            the scale, complexity, and outcomes of our project portfolio.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#0891b2]/10 text-[#0891b2] mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
                <div className="flex-shrink-0 space-y-2 text-sm">
                  <div className="text-gray-500">
                    <span className="font-semibold">Duration:</span> {project.duration}
                  </div>
                  <div className="text-gray-500">
                    <span className="font-semibold">Scale:</span> {project.scale}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Outcomes:</h4>
                <ul className="grid sm:grid-cols-3 gap-3">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#0891b2]" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Delivery Approach */}
      <SectionContainer background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Delivery Approach</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Planning & Design',
                description: 'Comprehensive project planning, risk assessment, and stakeholder alignment.',
              },
              {
                title: 'Execution & Control',
                description: 'Disciplined project management with continuous monitoring and quality assurance.',
              },
              {
                title: 'Closeout & Transition',
                description: 'Formal closeout procedures, knowledge transfer, and post-project support.',
              },
            ].map((phase, index) => (
              <div key={phase.title} className="text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0891b2] text-white text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Quality and Risk Management */}
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Quality Management</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Every project includes built-in quality control processes, regular audits, and 
              continuous improvement mechanisms to ensure deliverables meet or exceed expectations.
            </p>
            <ul className="space-y-3">
              {[
                'ISO-aligned quality management systems',
                'Independent quality assurance reviews',
                'Documented processes and procedures',
                'Regular performance metrics reporting',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#0891b2] mt-2" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Risk Management</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Proactive risk identification, assessment, and mitigation strategies are integrated 
              into every phase of project execution.
            </p>
            <ul className="space-y-3">
              {[
                'Comprehensive risk registers and mitigation plans',
                'Regular risk review meetings with stakeholders',
                'Contingency planning for critical path items',
                'Lessons learned and continuous improvement',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#0891b2] mt-2" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Performance Metrics */}
      <SectionContainer background="dark">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Delivery Performance</h2>
          <p className="text-xl text-gray-300">
            Our track record speaks to our commitment to excellence
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {deliveryMetrics.map((item) => (
            <div key={item.label} className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#0891b2]/20 text-[#0891b2]">
                {item.icon}
              </div>
              <div className="text-4xl font-bold mb-2">{item.metric}</div>
              <div className="text-gray-300">{item.label}</div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
