import React from 'react';

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

interface PlanPageProps {
  onBack: (hash?: string) => void;
  content: {
    back_button: string;
    title: string;
    description: string;
    price_label: string;
    credits_label: string;
    posts_brands_label: string;
    price: string;
    credits: string;
    posts_brands: string;
    features_title: string;
    features: { name: string, description: string }[];
    who_is_it_for_title: string;
    who_is_it_for_description: string;
    audience: string[];
    cta: string;
  }
}

const CreatorPlan: React.FC<PlanPageProps> = ({ onBack, content }) => {
  return (
    <main className="flex-grow py-20 sm:py-28 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => onBack('pricing')} className="text-gray-300 hover:text-brand-accent transition-colors mb-8 group flex items-center">
          <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">&larr;</span> {content.back_button}
        </button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">{content.title}</h1>
          <p className="mt-4 text-xl text-gray-300">{content.description}</p>
          
          <div className="mt-10 grid md:grid-cols-3 gap-8 p-8 bg-brand-light-dark border border-gray-800 rounded-2xl">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">{content.price_label}</p>
              <p><span className="text-4xl font-extrabold text-white">{content.price}</span></p>
            </div>
             <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">{content.credits_label}</p>
              <p><span className="text-4xl font-extrabold text-white">{content.credits}</span></p>
            </div>
             <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">{content.posts_brands_label}</p>
              <p><span className="text-4xl font-extrabold text-white">{content.posts_brands}</span></p>
            </div>
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-x-12 gap-y-10">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">{content.features_title}</h2>
              <ul className="space-y-4">
                {content.features.map(feature => (
                    <li key={feature.name} className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-brand-accent mr-3 mt-1 shrink-0" />
                    <div>
                        <h3 className="font-semibold text-white">{feature.name}</h3>
                        <p className="text-gray-400">{feature.description}</p>
                    </div>
                    </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="p-8 bg-brand-dark/50 border border-gray-800 rounded-lg h-full flex flex-col">
                <h2 className="text-2xl font-bold text-white mb-4">{content.who_is_it_for_title}</h2>
                <p className="text-gray-300 mb-6 flex-grow">{content.who_is_it_for_description}</p>
                <ul className="space-y-2 text-gray-400 list-disc list-inside mb-6">
                  {content.audience.map(item => <li key={item}>{item}</li>)}
                </ul>
                <button onClick={() => onBack('cta')} className="mt-auto block w-full text-center py-3 px-6 rounded-lg font-semibold transition-transform hover:scale-105 transform-gpu bg-gradient-to-r from-brand-accent-400 to-brand-accent-600 text-brand-dark">
                  {content.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreatorPlan;