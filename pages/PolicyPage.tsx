import React from 'react';

interface SubPageProps {
  onBack: (hash?: string) => void;
  content: {
    back_button: string;
    title: string;
    last_updated: string;
    placeholder: string;
    sections: string[];
  }
}

const PolicyPage: React.FC<SubPageProps> = ({ onBack, content }) => {
  const PlaceholderText = () => (
    <div className="space-y-4 text-gray-400">
      <p>{content.placeholder}</p>
      <p>{content.placeholder.split('. ').slice(1).join('. ')}</p>
    </div>
  );

  return (
    <main className="flex-grow py-20 sm:py-28 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => onBack()} className="text-gray-300 hover:text-brand-accent transition-colors mb-8 group flex items-center">
          <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">&larr;</span> {content.back_button}
        </button>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">{content.title}</h1>
          <p className="mt-4 text-lg text-gray-400">{content.last_updated}</p>
          
          <div className="mt-10 space-y-8 prose prose-invert prose-lg max-w-none">
            {content.sections.map((section, index) => (
                <section key={section}>
                <h2 className="text-2xl font-bold text-white">{index + 1}. {section}</h2>
                <PlaceholderText />
                </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PolicyPage;