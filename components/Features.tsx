import React from 'react';

interface FeaturesProps {
    content: {
        title: string;
        description: string;
        featureList: { name: string; description: string; }[];
    }
}

const Features: React.FC<FeaturesProps> = ({ content }) => {
  return (
    <section id="features" className="py-20 sm:py-28 relative overflow-hidden">
       <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] bg-brand-secondary/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{content.title}</h2>
          <p className="mt-4 text-lg text-gray-300">
            {content.description}
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.featureList.map((feature) => (
            <div key={feature.name} className="bg-gradient-to-br from-brand-light-dark to-brand-dark p-6 rounded-lg border border-gray-800 transition-all duration-300 hover:border-brand-accent/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-accent/10">
              <h3 className="text-lg font-semibold text-white">{feature.name}</h3>
              <p className="mt-2 text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;