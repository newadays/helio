import { useEffect } from 'react';

interface OrganizationSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo?: string;
  description?: string;
  address?: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    '@type': string;
    telephone: string;
    contactType: string;
  };
  sameAs?: string[];
}

interface StructuredDataProps {
  schema: OrganizationSchema | Record<string, unknown>;
}

export function StructuredData({ schema }: StructuredDataProps) {
  useEffect(() => {
    const scriptId = 'structured-data-script';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement;

    if (scriptElement) {
      scriptElement.textContent = JSON.stringify(schema);
    } else {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      scriptElement.textContent = JSON.stringify(schema);
      document.head.appendChild(scriptElement);
    }

    return () => {
      const element = document.getElementById(scriptId);
      if (element) {
        element.remove();
      }
    };
  }, [schema]);

  return null;
}

export const workhelioOrganizationSchema: OrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Workhelio',
  url: 'https://workhelio.com',
  logo: 'https://workhelio.com/logo.png',
  description: 'Enterprise solutions provider specializing in government contracting, supply chain management, technology solutions, and infrastructure services.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '301 Congress Ave, #2200',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    postalCode: '78701',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-737-206-6210',
    contactType: 'customer service',
  },
  sameAs: [
    // Add social media URLs here when available
    // 'https://www.linkedin.com/company/workhelio',
    // 'https://twitter.com/workhelio',
  ],
};
