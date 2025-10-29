
import React from 'react';

interface IntegrationsProps {
    content: {
        title: string;
        description: string;
        logos: string[];
    }
}

const LogoPlaceholder: React.FC<{ name: string }> = ({ name }) => (
    <div className="flex items-center justify-center h-20 p-4 bg-brand-light-dark border border-gray-800 rounded-lg grayscale hover:grayscale-0 transition-all duration-300 filter group">
        <span className="text-xl font-bold text-gray-400 group-hover:text-white transition-colors">{name}</span>
    </div>
);

const Integrations: React.FC<IntegrationsProps> = ({ content }) => {
  return (
    <section id="integrations" className="py-20 sm:py-28 bg-brand-dark/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{content.title}</h2>
          <p className="mt-4 text-lg text-gray-300">
            {content.description}
          </p>
        </div>
        <div className="mt-16 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {content.logos.map(logoName => (
                    <LogoPlaceholder key={logoName} name={logoName} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
