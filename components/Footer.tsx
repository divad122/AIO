import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
  content: {
    links: {
      policy: string;
      gdpr: string;
      c2pa: string;
      contact: string;
    },
    copyright: string;
  }
}

const Footer: React.FC<FooterProps> = ({ onNavigate, content }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, pageName: string) => {
    e.preventDefault();
    onNavigate(pageName);
  };

  return (
    <footer className="bg-brand-light-dark">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex flex-wrap justify-center space-x-6 md:order-2">
            <a href="#" onClick={(e) => handleNavClick(e, 'policy')} className="text-gray-400 hover:text-gray-300">{content.links.policy}</a>
            <a href="#" onClick={(e) => handleNavClick(e, 'gdpr')} className="text-gray-400 hover:text-gray-300">{content.links.gdpr}</a>
            <a href="#" onClick={(e) => handleNavClick(e, 'c2pa')} className="text-gray-400 hover:text-gray-300">{content.links.c2pa}</a>
            <a href="#" onClick={(e) => handleNavClick(e, 'contact')} className="text-gray-400 hover:text-gray-300">{content.links.contact}</a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; {currentYear} AIO AUTOMATE™. {content.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;