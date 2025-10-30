import React from 'react';
import { User } from '../types';

interface HeaderProps {
  onNavigate: (page: string, hash?: string) => void;
  isHomePage: boolean;
  lang: 'pl' | 'en';
  toggleLang: () => void;
  content: {
    nav: {
      features: string;
      pricing: string;
      faq: string;
    },
    cta: string;
    login: string;
    register: string;
    logout: string;
  };
  isAuthenticated: boolean;
  onLogout: () => void;
  user: User | null;
}

const LanguageSwitcher: React.FC<{ lang: 'pl' | 'en'; toggleLang: () => void; }> = ({ lang, toggleLang }) => (
    <button onClick={toggleLang} className="flex items-center text-gray-300 hover:text-brand-accent transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-brand-accent rounded-md px-2 py-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m-9 9h18" />
        </svg>
        <span className="font-semibold uppercase">{lang === 'pl' ? 'en' : 'pl'}</span>
    </button>
);

const UserMenu: React.FC<{ user: User; onLogout: () => void; logoutText: string }> = ({ user, onLogout, logoutText }) => (
  <div className="relative">
    {/* For simplicity, we just show name and logout. A dropdown could be added here. */}
    <div className="flex items-center space-x-3">
        <span className="text-sm text-gray-300 hidden sm:inline">{user.name}</span>
        <button onClick={onLogout} className="text-gray-300 hover:text-brand-accent transition-colors text-sm font-semibold">
          {logoutText}
        </button>
    </div>
  </div>
);


const Header: React.FC<HeaderProps> = ({ onNavigate, isHomePage, lang, toggleLang, content, isAuthenticated, onLogout, user }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string, hash?: string) => {
    e.preventDefault();
    if (isHomePage && hash) {
       const targetElement = document.getElementById(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      onNavigate(page, hash);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isAuthenticated) {
      onNavigate('dashboard');
    } else {
      onNavigate('home');
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-brand-dark/80 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" onClick={handleLogoClick} className="flex items-center text-white cursor-pointer">
                <svg width="85" height="28" viewBox="0 0 85 28" fill="currentColor" className="mr-1.5 h-7 w-auto">
                    {/* A */}
                    <path d="M17.5 0 L0 28 H8.5 L17.5 11 L26.5 28 H35 Z" />
                    {/* I */}
                    <rect x="41" width="8" height="28" />
                    {/* O */}
                    <path d="M71 28C78.7178 28 85 21.7178 85 14C85 6.28223 78.7178 0 71 0C63.2822 0 57 6.28223 57 14C57 21.7178 63.2822 28 71 28ZM71 22C75.4183 22 79 18.4183 79 14C79 9.58172 75.4183 6 71 6C66.5817 6 63 9.58172 63 14C63 18.4183 66.5817 22 71 22Z" fillRule="evenodd" clipRule="evenodd" />
                </svg>
                <span className="text-xl font-bold tracking-wider">AUTOMATE</span>
                <span className="text-brand-accent text-lg font-bold self-start">™</span>
            </a>
          </div>
          <div className="flex items-center space-x-4 md:space-x-8">
            {!isAuthenticated && isHomePage && (
              <div className="hidden md:block">
                <nav className="flex items-center space-x-8">
                  <a href="#features" onClick={(e) => handleNavClick(e, 'home', 'features')} className="text-gray-300 hover:text-brand-accent transition-colors">{content.nav.features}</a>
                  <a href="#pricing" onClick={(e) => handleNavClick(e, 'home', 'pricing')} className="text-gray-300 hover:text-brand-accent transition-colors">{content.nav.pricing}</a>
                  <a href="#faq" onClick={(e) => handleNavClick(e, 'home', 'faq')} className="text-gray-300 hover:text-brand-accent transition-colors">{content.nav.faq}</a>
                </nav>
              </div>
            )}
            <div className="flex items-center space-x-4">
              <LanguageSwitcher lang={lang} toggleLang={toggleLang} />
              {isAuthenticated && user ? (
                <UserMenu user={user} onLogout={onLogout} logoutText={content.logout} />
              ) : (
                null
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;