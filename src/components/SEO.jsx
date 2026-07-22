import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords }) => {
  const location = useLocation();

  useEffect(() => {
    const siteTitle = title
      ? `${title} | Indal Awalaikal`
      : 'Indal Awalaikal — Full-Stack & Backend Developer';
    
    const metaDescription =
      description ||
      'Indal Awalaikal — Full-Stack & Backend Developer dan Mahasiswa Teknik Informatika & Komputer di Universitas Negeri Makassar (UNM). Spesialis Golang, Python, React, dan AI Systems.';

    const metaKeywords =
      keywords ||
      'Indal Awalaikal, Indal, Awalaikal, Full Stack Developer, Backend Engineer, Teknik Informatika & Komputer, UNM, Makassar, Golang, Python, React';

    const currentUrl = `https://indalawalaikal.my.id${location.pathname}`;

    // Update document title
    document.title = siteTitle;

    // Helper function to set or create meta tags
    const updateMetaTag = (selector, attribute, attributeValue, content) => {
      let element = document.querySelector(`${selector}[${attribute}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update standard meta tags
    updateMetaTag('meta', 'name', 'description', metaDescription);
    updateMetaTag('meta', 'name', 'keywords', metaKeywords);

    // Update Open Graph meta tags
    updateMetaTag('meta', 'property', 'og:title', siteTitle);
    updateMetaTag('meta', 'property', 'og:description', metaDescription);
    updateMetaTag('meta', 'property', 'og:url', currentUrl);

    // Update Twitter meta tags
    updateMetaTag('meta', 'name', 'twitter:title', siteTitle);
    updateMetaTag('meta', 'name', 'twitter:description', metaDescription);
    updateMetaTag('meta', 'name', 'twitter:url', currentUrl);

    // Update Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

  }, [title, description, keywords, location]);

  return null;
};

export default SEO;
