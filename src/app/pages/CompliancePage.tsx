import { PageHero } from '@/app/components/ui-workhelio/PageHero';
import { SectionContainer } from '@/app/components/ui-workhelio/SectionContainer';
import { FileCheck, Shield, Award, CheckCircle } from 'lucide-react';

const certifications = [
  'FAR/DFARS compliance',
  'ISO 9001:2015 Quality Management',
  'NIST cybersecurity framework alignment',
  'State and local procurement certifications',
];

const complianceAreas = [
  {
    icon: <FileCheck className="h-8 w-8" />,
    title: 'Procurement Readiness',
    description: 'Maintained registrations and certifications for federal, state, and local contracting.',
    items: [
      'SAM.gov registration (active)',
      'NAICS codes and classifications',
      'Representations and certifications',
      'Past performance documentation',
    ],
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Regulatory Compliance',
    description: 'Adherence to all applicable laws, regulations, and industry standards.',
    items: [
      'Federal Acquisition Regulation (FAR)',
      'Defense Federal Acquisition Regulation Supplement (DFARS)',
      'State and local procurement regulations',
      'Industry-specific compliance requirements',
    ],
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Security and Data Protection',
    description: 'Comprehensive security protocols and data protection measures.',
    items: [
      'NIST 800-171 compliance for CUI',
      'Information security policies and procedures',
      'Personnel security clearances',
      'Secure facility and system access controls',
    ],
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: 'Quality Standards',
    description: 'Quality management systems aligned with industry best practices.',
    items: [
      'ISO 9001:2015 quality management',
      'Project management frameworks (PMI, PRINCE2)',
      'Six Sigma and Lean methodologies',
      'Continuous improvement programs',
    ],
  },
];

export function CompliancePage() {
  return (
    <div>
      <PageHero
        subtitle="Compliance & Standards"
        title="Built for Accountability"
        description="Workhelio maintains rigorous compliance and quality standards to meet the requirements of government agencies and regulated industries."
      />

      {/* Overview */}
      <SectionContainer>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Operating in government contracting and regulated industries requires strict adherence 
            to compliance requirements, security protocols, and quality standards. Workhelio maintains 
            comprehensive compliance programs across all business operations.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {certifications.map((cert) => (
              <div key={cert} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <CheckCircle className="h-8 w-8 text-[#0891b2] mx-auto mb-3" />
                <p className="text-sm font-medium text-gray-900">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Compliance Areas */}
      <SectionContainer background="gray">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Compliance Framework</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our compliance program covers procurement readiness, regulatory adherence, security, and quality management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {complianceAreas.map((area) => (
            <div key={area.title} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-[#0891b2]/10 text-[#0891b2] mb-4">
                {area.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{area.title}</h3>
              <p className="text-gray-600 mb-6">{area.description}</p>
              <ul className="space-y-3">
                {area.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#0891b2] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Audit and Oversight */}
      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Audit and Oversight</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="mb-4">
              Workhelio maintains a robust internal audit program with regular reviews of compliance, 
              financial controls, and operational procedures. We work closely with external auditors 
              and regulatory bodies to ensure full transparency and accountability.
            </p>
            <p className="mb-6">
              Our audit program includes:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Annual financial audits by independent CPA firms',
                'Regular internal compliance reviews',
                'Quality management system audits',
                'Security and data protection assessments',
                'Project-specific audits as required by contracts',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#0891b2] mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Ethics and Training */}
      <SectionContainer background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ethics and Training</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            All Workhelio employees complete mandatory compliance and ethics training. We maintain 
            a code of conduct that emphasizes integrity, transparency, and accountability in all 
            business dealings.
          </p>
          
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Training Program Components</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                'Ethics and code of conduct',
                'FAR/DFARS compliance requirements',
                'Information security and data protection',
                'Conflict of interest policies',
                'Quality management procedures',
                'Anti-fraud and waste prevention',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#0891b2] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Contact CTA */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-[#1a1f2e] to-[#2d3548] rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Questions About Compliance?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us to discuss our compliance capabilities and certifications.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#0891b2] rounded-md hover:bg-[#0e7490] transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </SectionContainer>
    </div>
  );
}
