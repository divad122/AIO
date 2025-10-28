import React from 'react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  content: {
    dashboard: string;
    campaigns: string;
    brand: string;
    billing: string;
    analytics: string;
  };
}

const NavItem: React.FC<{
    label: string;
    isActive: boolean;
    onClick: () => void;
    // Fix: Changed JSX.Element to React.ReactElement to resolve namespace error.
    icon: React.ReactElement;
}> = ({ label, isActive, onClick, icon }) => (
    <li>
        <a
            href="#"
            onClick={(e) => { e.preventDefault(); onClick(); }}
            className={`flex items-center p-3 rounded-lg transition-colors text-base font-medium ${
                isActive 
                ? 'bg-brand-accent/10 text-brand-accent' 
                : 'text-gray-400 hover:bg-brand-light-dark hover:text-white'
            }`}
        >
            {icon}
            <span className="ml-3">{label}</span>
        </a>
    </li>
);

const Icons = {
    Dashboard: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>,
    Campaigns: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>,
    Brand: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>,
    Billing: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>,
    Analytics: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>,
}

const DashboardSidebar: React.FC<SidebarProps> = ({ currentPage, onNavigate, content }) => {
    return (
        <aside className="w-64 bg-brand-light-dark/50 border-r border-gray-800 p-4 flex-shrink-0 hidden md:block">
            <nav>
                <ul className="space-y-2">
                   <NavItem 
                        label={content.dashboard}
                        isActive={currentPage === 'dashboard'}
                        onClick={() => onNavigate('dashboard')}
                        icon={<Icons.Dashboard />}
                   />
                    <NavItem 
                        label={content.campaigns}
                        isActive={currentPage === 'campaigns'}
                        onClick={() => onNavigate('campaigns')}
                        icon={<Icons.Campaigns />}
                   />
                    <NavItem 
                        label={content.brand}
                        isActive={currentPage === 'brand'}
                        onClick={() => onNavigate('brand')}
                        icon={<Icons.Brand />}
                   />
                     <NavItem 
                        label={content.analytics}
                        isActive={currentPage === 'analytics'}
                        onClick={() => onNavigate('analytics')}
                        icon={<Icons.Analytics />}
                   />
                    <NavItem 
                        label={content.billing}
                        isActive={currentPage === 'billing'}
                        onClick={() => onNavigate('billing')}
                        icon={<Icons.Billing />}
                   />
                </ul>
            </nav>
        </aside>
    )
}

export default DashboardSidebar;