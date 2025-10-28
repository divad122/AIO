import React from 'react';

interface TrustProps {
    content: {
        title: string;
        description: string;
        badges: string[];
        box_title: string;
        box_content: string;
    }
}

const Trust: React.FC<TrustProps> = ({ content }) => {
  return (
    <section id="trust" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{content.title}</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                {content.description}
            </p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-gray-400">
            {content.badges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2"><BadgeIcon /> {badge}</div>
            ))}
        </div>
        <div className="mt-16 max-w-2xl mx-auto bg-brand-light-dark border border-gray-800 p-8 rounded-lg">
            <h3 className="text-lg font-bold text-white">{content.box_title}</h3>
            <p className="mt-3 text-gray-300">
                {content.box_content}
            </p>
        </div>
      </div>
    </section>
  );
};

const BadgeIcon: React.FC = () => (
    <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


export default Trust;