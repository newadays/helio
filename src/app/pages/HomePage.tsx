import { Building2, Truck, Server, HardHat, CheckCircle2, FileCheck, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/app/components/ui-workhelio/Button';
import { SectionContainer } from '@/app/components/ui-workhelio/SectionContainer';
import { ServiceCard } from '@/app/components/ui-workhelio/ServiceCard';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { SEO } from '@/app/components/seo/SEO';

const sectors = [
  {
    title: 'Government Contracting',
    description: 'Supporting federal, state, and local agencies with compliant, mission-critical project execution.',
    icon: <Building2 className="h-8 w-8" />,
    href: '/divisions/government-contracting',
    image: 'https://images.unsplash.com/photo-1662728132385-11fee9b3db9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY4MjkyNDI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Supply Chain and Logistics',
    description: 'End-to-end supply chain management, procurement, and logistics optimization for complex operations.',
    icon: <Truck className="h-8 w-8" />,
    href: '/divisions/supply-chain',
    image: 'https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBtb2Rlcm58ZW58MXx8fHwxNzY4MzAyMDMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Technology and Digital Solutions',
    description: 'Data analytics, AI/ML implementation, and technology infrastructure modernization for enterprise clients.',
    icon: <Server className="h-8 w-8" />,
    href: '/divisions/technology',
    image: 'https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZGF0YSUyMGNlbnRlcnxlbnwxfHx8fDE3NjgyMjQ5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Infrastructure and Project Services',
    description: 'Large-scale infrastructure delivery, program management, and facility operations support.',
    icon: <HardHat className="h-8 w-8" />,
    href: '/divisions/infrastructure',
    image: 'https://images.unsplash.com/photo-1527335988388-b40ee248d80c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZyYXN0cnVjdHVyZSUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjgzMTk2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const capabilities = [
  'Government and enterprise project delivery',
  'Procurement and compliance readiness',
  'Supply chain operations and optimization',
  'Technology-enabled solutions',
  'Program and risk management',
  'Quality assurance and auditing',
];

const differentiators = [
  {
    icon: <CheckCircle2 className="h-6 w-6" />,
    title: 'Disciplined Execution',
    description: 'Rigorous project management and quality control across all deliverables.',
  },
  {
    icon: <FileCheck className="h-6 w-6" />,
    title: 'Compliance First',
    description: 'Built-in regulatory compliance and audit readiness from day one.',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Risk Management',
    description: 'Proactive identification and mitigation of operational and compliance risks.',
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'Long-term Value',
    description: 'Focus on sustainable outcomes and measurable performance metrics.',
  },
];

export function HomePage() {
  return (
    <div>
      <SEO
        title="Workhelio - Enterprise Solutions for Government & Industry"
        description="Workhelio delivers enterprise solutions in government contracting, supply chain management, technology solutions, and infrastructure services. Headquartered in Austin, TX."
        keywords="government contracting, supply chain management, logistics, technology solutions, infrastructure services, enterprise solutions, Austin TX"
        canonical="https://workhelio.com"
      />
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#1a1f2e] to-[#2d3548] pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0891b2]/10 px-4 py-2 text-sm font-medium text-[#0891b2] mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0891b2] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0891b2]"></span>
              </span>
              Trusted by Government and Enterprise
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Workhelio
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              Delivering reliable solutions across government contracting, supply chain, technology, and infrastructure.
            </p>
            <p className="mt-6 text-lg leading-7 text-gray-400">
              We partner with public-sector and enterprise organizations to deliver complex projects with accountability and results.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button href="/contact" size="lg">
                Partner With Us
              </Button>
              <Button href="/about" variant="outline" size="lg">
                About Us
              </Button>
            </div>
          </div>
          <div className="absolute right-0 top-0 -z-10 w-[40%] h-full opacity-20">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1a1f2e]" />
            <div className="h-full w-full bg-[radial-gradient(circle_at_center,#0891b2_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />
          </div>
        </div>
      </section>

      {/* Core Sectors Section */}
      <SectionContainer className="py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions across four core business divisions
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector) => (
            <a
              key={sector.title}
              href={sector.href}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/3] relative">
                <ImageWithFallback
                  src={sector.image}
                  alt={sector.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#0891b2]">
                  {sector.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{sector.title}</h3>
                <p className="text-sm text-gray-200">{sector.description}</p>
              </div>
            </a>
          ))}
        </div>
      </SectionContainer>

      {/* Why Workhelio Section */}
      <SectionContainer background="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Built for Complex Work
          </h2>
          <div className="h-1 w-20 bg-[#0891b2] mx-auto mb-8" />
          <p className="text-lg text-gray-700 leading-relaxed">
            Workhelio operates in regulated and high-accountability environments. We focus on disciplined execution, 
            compliance, and long-term value. Our approach prioritizes transparency, risk management, and measurable outcomes.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#0891b2]/10 text-[#0891b2]">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Capabilities Snapshot */}
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Capabilities Snapshot
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We deliver comprehensive services across multiple domains, with deep expertise 
              in government contracting, supply chain operations, and enterprise technology.
            </p>
            <ul className="space-y-4">
              {capabilities.map((capability) => (
                <li key={capability} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#0891b2] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{capability}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200"
                alt="Team collaboration"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#0891b2]/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-[#0891b2]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Call to Action */}
      <SectionContainer background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Let's Build What Matters
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Partner with Workhelio to deliver projects that require structure, scale, and accountability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg" className="bg-[#0891b2] hover:bg-[#0e7490]">
              Start a Conversation
            </Button>
            <Button href="/projects" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#1a1f2e]">
              View Our Work
            </Button>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
