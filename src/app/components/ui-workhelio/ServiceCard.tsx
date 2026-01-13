import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  href?: string;
}

export function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  const content = (
    <>
      {icon && (
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-[#0891b2]/10 text-[#0891b2]">
          {icon}
        </div>
      )}
      <h3 className="mb-3 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </>
  );
  
  if (href) {
    return (
      <a
        href={href}
        className="group block rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-[#0891b2] hover:shadow-lg"
      >
        {content}
        <div className="mt-4 flex items-center text-[#0891b2] font-medium group-hover:gap-2 transition-all">
          Learn more
          <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </a>
    );
  }
  
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
      {content}
    </div>
  );
}
