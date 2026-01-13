import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export function SEO({
  title = 'Workhelio - Enterprise Solutions for Government & Industry',
  description = 'Workhelio delivers enterprise solutions in government contracting, supply chain management, technology solutions, and infrastructure services. Headquartered in Austin, TX.',
  keywords = 'government contracting, supply chain management, logistics, technology solutions, infrastructure services, enterprise solutions, Austin TX',
  ogImage = 'https://workhelio.com/og-image.jpg',
  canonical = 'https://workhelio.com',
}: SEOProps) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Update standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', canonical, true);

    // Update Twitter tags
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', ogImage, true);
    updateMetaTag('twitter:url', canonical, true);

    // Update canonical link
    let linkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (linkElement) {
      linkElement.href = canonical;
    } else {
      linkElement = document.createElement('link');
      linkElement.rel = 'canonical';
      linkElement.href = canonical;
      document.head.appendChild(linkElement);
    }
  }, [title, description, keywords, ogImage, canonical]);

  return null;
}
