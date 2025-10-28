import React from 'react';

interface ProblemProps {
    content: {
        pretitle: string;
        title: string;
        description: string;
        cards: { title: string; description: string; }[];
    }
}

const Problem: React.FC<ProblemProps> = ({ content }) => {
  return (
    <section id="problem" className="py-20 sm:py-28 bg-brand-dark/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold text-brand-accent uppercase tracking-wider">{content.pretitle}</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {content.title}
          </p>
          <p className="mt-4 text-lg text-gray-300">
            {content.description}
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.cards.map((card, index) => (
                <div key={index} className="p-6 rounded-lg bg-gradient-to-br from-brand-light-dark to-brand-dark border border-gray-800 transition-all duration-300 hover:border-brand-accent/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-accent/10">
                    <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                    <p className="mt-2 text-gray-400">{card.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;