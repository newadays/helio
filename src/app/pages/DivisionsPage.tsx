import { useParams } from 'react-router-dom';
import { PageHero } from '@/app/components/ui-workhelio/PageHero';
import { SectionContainer } from '@/app/components/ui-workhelio/SectionContainer';
import { CheckCircle2, Building2, Truck, Server, HardHat } from 'lucide-react';

const divisionsData = {
  'government-contracting': {
    title: 'Government Contracting',
    subtitle: 'Federal, State & Local Solutions',
    description: 'Supporting government agencies with compliant, mission-critical project execution across multiple domains.',
    icon: <Building2 className="h-12 w-12" />,
    whatWeDo: 'We provide comprehensive government contracting services including program management, compliance support, and project delivery for federal, state, and local agencies.',
    whoWeServe: [
      'Federal civilian and defense agencies',
      'State and local government entities',
      'Educational institutions',
      'Public-private partnerships',
    ],
    howWeDeliver: 'Through disciplined project management, regulatory compliance expertise, and proven delivery methodologies tailored to government requirements.',
    capabilities: [
      'FAR/DFARS compliance management',
      'Program and project management (PMO services)',
      'Grant administration and oversight',
      'Procurement support and contract administration',
      'Quality assurance and auditing',
      'Security clearance management',
    ],
  },
  'supply-chain': {
    title: 'Supply Chain & Logistics',
    subtitle: 'End-to-End Operations Management',
    description: 'Comprehensive supply chain management, procurement, and logistics optimization for complex operations.',
    icon: <Truck className="h-12 w-12" />,
    whatWeDo: 'We deliver supply chain strategy, procurement operations, inventory management, and logistics optimization for organizations with complex, high-volume requirements.',
    whoWeServe: [
      'Manufacturing and distribution companies',
      'Government agencies',
      'Healthcare organizations',
      'Retail and e-commerce operations',
    ],
    howWeDeliver: 'Using data-driven analytics, industry best practices, and proven operational frameworks to optimize performance and reduce costs.',
    capabilities: [
      'Supply chain strategy and design',
      'Procurement and vendor management',
      'Inventory optimization',
      'Logistics and distribution planning',
      'Warehouse operations management',
      'Supply chain analytics and reporting',
    ],
  },
  'technology': {
    title: 'Technology Solutions',
    subtitle: 'Data, AI & Digital Transformation',
    description: 'Data analytics, AI/ML implementation, and technology infrastructure modernization for enterprise clients.',
    icon: <Server className="h-12 w-12" />,
    whatWeDo: 'We deliver technology solutions including data analytics, machine learning, AI implementation, and digital transformation services.',
    whoWeServe: [
      'Enterprise organizations',
      'Government agencies',
      'Financial services firms',
      'Healthcare providers',
    ],
    howWeDeliver: 'Through agile methodologies, cloud-native architectures, and enterprise-grade security and compliance frameworks.',
    capabilities: [
      'Data analytics and business intelligence',
      'Machine learning and AI implementation',
      'Cloud infrastructure and migration',
      'Enterprise system integration',
      'Cybersecurity and compliance',
      'Digital transformation consulting',
    ],
  },
  'infrastructure': {
    title: 'Infrastructure Services',
    subtitle: 'Project Management & Delivery',
    description: 'Large-scale infrastructure delivery, program management, and facility operations support.',
    icon: <HardHat className="h-12 w-12" />,
    whatWeDo: 'We manage infrastructure projects from planning through execution, including facility operations, program management, and capital project delivery.',
    whoWeServe: [
      'Public works departments',
      'Transportation agencies',
      'Utility companies',
      'Commercial real estate developers',
    ],
    howWeDeliver: 'With experienced project managers, rigorous quality control, and proven delivery methodologies for large-scale infrastructure.',
    capabilities: [
      'Capital project management',
      'Infrastructure planning and design oversight',
      'Construction management',
      'Facility operations and maintenance',
      'Program management office (PMO) services',
      'Environmental and regulatory compliance',
    ],
  },
};

export function DivisionsPage() {
  const { division } = useParams<{ division: string }>();
  const divisionKey = division as keyof typeof divisionsData;
  const data = divisionsData[divisionKey];

  if (!data) {
    return <div>Division not found</div>;
  }

  return (
    <div>
      <PageHero
        subtitle={data.subtitle}
        title={data.title}
        description={data.description}
      />

      {/* What We Do */}
      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-[#0891b2]/10 text-[#0891b2]">
              {data.icon}
            </div>
            <h2 className="text-3xl font-bold text-gray-900">What We Do</h2>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            {data.whatWeDo}
          </p>
        </div>
      </SectionContainer>

      {/* Who We Serve */}
      <SectionContainer background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Who We Serve</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.whoWeServe.map((client) => (
              <div key={client} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-[#0891b2] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* How We Deliver */}
      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Deliver</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {data.howWeDeliver}
          </p>
          
          <div className="bg-gradient-to-br from-[#0891b2]/10 to-[#0e7490]/10 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Approach</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#0891b2]" />
                <span className="text-gray-700">Rigorous project planning and risk assessment</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#0891b2]" />
                <span className="text-gray-700">Transparent communication and reporting</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#0891b2]" />
                <span className="text-gray-700">Compliance-first execution</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#0891b2]" />
                <span className="text-gray-700">Measurable outcomes and continuous improvement</span>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Key Capabilities */}
      <SectionContainer background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Capabilities</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {data.capabilities.map((capability) => (
              <div key={capability} className="flex items-start gap-3 bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle2 className="h-6 w-6 text-[#0891b2] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-[#1a1f2e] to-[#2d3548] rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us to discuss how we can support your organization's objectives.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#0891b2] rounded-md hover:bg-[#0e7490] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </SectionContainer>
    </div>
  );
}
