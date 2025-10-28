import React from 'react';
import { User } from '../types';
import DashboardSidebar from './DashboardSidebar';
import DashboardPage from '../pages/DashboardPage';
import CampaignsPage from '../pages/CampaignsPage';
import BrandSettingsPage from '../pages/BrandSettingsPage';
import CampaignCreatorPage from '../pages/CampaignCreatorPage';
import { content as allContent } from '../content';

interface DashboardLayoutProps {
  page: string;
  onNavigate: (page: string) => void;
  user: User;
  content: {
    sidebar: {
      dashboard: string;
      campaigns: string;
      brand: string;
      billing: string;
      analytics: string;
    };
    welcome: any;
    gettingStarted: any;
    campaignsPage: any;
    brandSettingsPage: any;
  },
  lang: 'pl' | 'en';
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ page, onNavigate, user, content, lang }) => {

  const renderContent = () => {
    switch (page) {
      case 'dashboard':
        return <DashboardPage user={user} onNavigate={onNavigate} content={{...content.welcome, ...content.gettingStarted}} />;
      case 'campaigns':
        return <CampaignsPage user={user} onNavigate={onNavigate} content={content.campaignsPage} />;
      case 'brand':
        return <BrandSettingsPage user={user} content={content.brandSettingsPage} />;
      case 'campaign-creator':
        return <CampaignCreatorPage user={user} onNavigate={onNavigate} content={allContent[lang].campaignCreator} />
      // Add cases for 'billing', 'analytics' etc. later
      default:
        // Fallback to dashboard if page is unknown
        return <DashboardPage user={user} onNavigate={onNavigate} content={{...content.welcome, ...content.gettingStarted}} />;
    }
  };

  return (
    <div className="flex-grow flex">
      <DashboardSidebar 
        currentPage={page} 
        onNavigate={onNavigate} 
        content={content.sidebar}
      />
      <main className="flex-1 bg-brand-dark p-6 sm:p-8 lg:p-10">
        <div className="w-full max-w-7xl mx-auto">
            {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;