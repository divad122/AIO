import React from 'react';
import { User } from '../types';

interface DashboardPageProps {
  user: User;
  onNavigate: (page: string) => void;
  content: {
    title: string;
    description: string;
    steps: { name: string; description: string; cta: string; }[];
  }
}

const GettingStartedCard: React.FC<{
  step: number;
  title: string;
  description: string;
  cta: string;
  onClick: () => void;
}> = ({ step, title, description, cta, onClick }) => (
  <div className="bg-brand-light-dark p-6 rounded-lg border border-gray-800 flex flex-col">
    <div className="flex items-center mb-4">
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent font-bold mr-4">
        {step}
      </div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
    </div>
    <p className="text-gray-400 flex-grow mb-4">{description}</p>
    <button onClick={onClick} className="text-left text-brand-accent font-semibold hover:text-brand-accent-300">
        {cta} &rarr;
    </button>
  </div>
);


const DashboardPage: React.FC<DashboardPageProps> = ({ user, onNavigate, content }) => {
    const handleNavigation = (cta: string) => {
        const pageMap: { [key: string]: string } = {
            'Ustawienia marki': 'brand',
            'Nowa kampania': 'campaigns',
            'Zobacz kampanie': 'campaigns',
            'Ustawienia': 'settings', // Placeholder
            'Brand Settings': 'brand',
            'New Campaign': 'campaigns',
            'View Campaigns': 'campaigns',
            'Settings': 'settings' // Placeholder
        };
        const page = pageMap[cta];
        if (page) {
            onNavigate(page);
        }
    }
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        {content.title.replace('{{name}}', user.name.split(' ')[0])}
      </h1>
      <p className="mt-2 text-lg text-gray-300 max-w-2xl">
        {content.description}
      </p>

      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.steps.map((step, index) => (
                <GettingStartedCard 
                    key={index}
                    step={index + 1}
                    title={step.name}
                    description={step.description}
                    cta={step.cta}
                    onClick={() => handleNavigation(step.cta)}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
