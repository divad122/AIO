import React from 'react';

const Header: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-dark/80 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="text-xl font-bold text-white">
              AIO AUTOMATE<span className="text-brand-accent">™</span>
            </a>
          </div>
          <div className="hidden md:block">
            <nav className="flex items-center space-x-8">
              <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className="text-gray-300 hover:text-brand-accent transition-colors">Funkcje</a>
              <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="text-gray-300 hover:text-brand-accent transition-colors">Cennik</a>
              <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="text-gray-300 hover:text-brand-accent transition-colors">FAQ</a>
            </nav>
          </div>
          <div>
            <a href="#cta" onClick={(e) => handleNavClick(e, 'cta')} className="hidden sm:inline-block bg-brand-accent text-brand-dark font-semibold py-2 px-5 rounded-md hover:bg-brand-accent-400 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-brand-accent">
              Rozpocznij pilotaż
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;