import { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
}

export function PageHero({ title, subtitle, description, children }: PageHeroProps) {
  return (
    <div className="bg-gradient-to-br from-[#1a1f2e] to-[#2d3548] text-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {subtitle && (
            <p className="text-sm font-semibold uppercase tracking-wider text-[#0891b2] mb-4">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              {description}
            </p>
          )}
          {children && <div className="mt-10">{children}</div>}
        </div>
      </div>
    </div>
  );
}
