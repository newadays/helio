import { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'dark';
}

export function SectionContainer({ 
  children, 
  className = '', 
  background = 'white' 
}: SectionContainerProps) {
  const bgStyles = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-[#1a1f2e] text-white',
  };
  
  return (
    <section className={`py-16 sm:py-24 ${bgStyles[background]} ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
