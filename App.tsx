


import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Integrations from './components/Integrations';
import LegalSafety from './components/LegalSafety';
import Pricing from './components/Pricing';
import IdealCustomerProfile from './components/IdealCustomerProfile';
import Waitlist from './components/Waitlist';
import Trust from './components/Trust';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CreatorPlan from './pages/CreatorPlan';
import ProPlan from './pages/ProPlan';
import EnterprisePlan from './pages/EnterprisePlan';
import StudioPlusPlan from './pages/StudioPlusPlan';
import DemoPage from './pages/DemoPage';
import PolicyPage from './pages/PolicyPage';
import GdprPage from './pages/GdprPage';
import C2paPage from './pages/C2paPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardLayout from './components/DashboardLayout';
import { content } from './content';
import { User } from './types';

const App: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [page, setPage] = useState('home');
  const [lang, setLang] = useState<'pl' | 'en'>('pl');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    document.documentElement.lang = lang;
    const pageTitle = document.getElementById('page-title');
    const pageDescription = document.getElementById('page-description');
    if (pageTitle) {
      pageTitle.textContent = content[lang].meta.title;
    }
    if (pageDescription) {
      pageDescription.setAttribute('content', content[lang].meta.description);
    }
  }, [lang]);

  const toggleLang = () => setLang(prev => prev === 'pl' ? 'en' : 'pl');

  const navigateTo = (pageName: string, hash?: string) => {
    setPage(pageName);
    window.scrollTo(0, 0);
    if (pageName === 'home' && hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    setIsAuthenticated(true);
    navigateTo('dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    navigateTo('home');
  };

  const handlePlanSelect = (planId: string) => {
    navigateTo(planId);
  };

  const currentContent = content[lang];

  const renderPublicPages = () => {
    const handleBackToHome = (hash?: string) => navigateTo('home', hash);

    switch (page) {
      case 'creator':
        return <CreatorPlan onBack={handleBackToHome} content={currentContent.creatorPlan} />;
      case 'pro':
        return <ProPlan onBack={handleBackToHome} content={currentContent.proPlan} />;
      case 'enterprise':
        return <EnterprisePlan onBack={handleBackToHome} content={currentContent.enterprisePlan} />;
      case 'studioplus':
        return <StudioPlusPlan onBack={handleBackToHome} content={currentContent.studioPlusPlan} />;
      case 'demo':
        return <DemoPage onBack={handleBackToHome} content={currentContent.demoPage} />;
      case 'policy':
        return <PolicyPage onBack={handleBackToHome} content={currentContent.policyPage} />;
      case 'gdpr':
        return <GdprPage onBack={handleBackToHome} content={currentContent.gdprPage} />;
      case 'c2pa':
        return <C2paPage onBack={handleBackToHome} content={currentContent.c2paPage} />;
      case 'contact':
        return <ContactPage onBack={handleBackToHome} content={currentContent.contactPage} />;
      case 'login':
        return <LoginPage onLogin={handleLogin} onNavigate={navigateTo} content={currentContent.loginPage} />;
      case 'register':
        return <RegisterPage onRegister={handleLogin} onNavigate={navigateTo} content={currentContent.registerPage} />;
      default:
        return (
          <main className="flex-grow">
            <Hero onWaitlistClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })} content={currentContent.hero} />
            <Problem content={currentContent.problem} />
            <Solution content={currentContent.solution} />
            <HowItWorks content={currentContent.howItWorks} />
            <Features content={currentContent.features} />
            <Integrations content={currentContent.integrations} />
            <LegalSafety content={currentContent.legalSafety} />
            <IdealCustomerProfile content={currentContent.icp} />
            <Pricing
              isYearly={isYearly}
              setIsYearly={setIsYearly}
              onPlanSelect={handlePlanSelect}
              content={currentContent.pricing} />
            <Trust content={currentContent.trust} />
            <FAQ content={currentContent.faq} />
            <Waitlist content={currentContent.waitlistForm} />
          </main>
        );
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        onNavigate={navigateTo} 
        isHomePage={page === 'home'} 
        lang={lang} 
        toggleLang={toggleLang} 
        content={currentContent.header}
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
        user={currentUser}
      />
      {isAuthenticated && currentUser ? (
        <DashboardLayout 
          page={page} 
          onNavigate={navigateTo} 
          user={currentUser} 
          content={currentContent.dashboard} 
          lang={lang}
        />
      ) : (
        <>
          {renderPublicPages()}
          <Footer onNavigate={navigateTo} content={currentContent.footer} />
        </>
      )}
    </div>
  );
};

export default App;