import React from 'react';

interface SubPageProps {
  onBack: (hash?: string) => void;
  content: {
    back_button: string;
    title: string;
    description: string;
    section1_title: string;
    section1_content: string;
    section2_title: string;
    section2_content: string;
    section2_points: string[];
    section3_title: string;
    section3_points: { name: string; text: string; }[];
  }
}

const C2paPage: React.FC<SubPageProps> = ({ onBack, content }) => {
  return (
    <main className="flex-grow py-20 sm:py-28 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => onBack()} className="text-gray-300 hover:text-brand-accent transition-colors mb-8 group flex items-center">
          <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">&larr;</span> {content.back_button}
        </button>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">{content.title}</h1>
          <p className="mt-4 text-xl text-gray-300">{content.description}</p>
          
          <div className="mt-10 space-y-8">
            <div className="p-8 bg-brand-light-dark border border-gray-800 rounded-lg">
              <h2 className="text-2xl font-bold text-white">{content.section1_title}</h2>
              <p className="mt-2 text-gray-400">{content.section1_content}</p>
            </div>
             <div className="p-8 bg-brand-light-dark border border-gray-800 rounded-lg">
              <h2 className="text-2xl font-bold text-white">{content.section2_title}</h2>
              <p className="mt-2 text-gray-400">{content.section2_content}</p>
              <ul className="mt-4 list-disc list-inside text-gray-400 space-y-2">
                {content.section2_points.map(point => <li key={point}>{point}</li>)}
              </ul>
            </div>
             <div className="p-8 bg-brand-light-dark border border-gray-800 rounded-lg">
              <h2 className="text-2xl font-bold text-white">{content.section3_title}</h2>
               <ul className="mt-4 text-gray-300 space-y-3">
                  {content.section3_points.map(point => (
                     <li key={point.name} className="flex items-start"><span className="text-brand-accent mr-3 mt-1">✓</span><div><span className="font-semibold text-white">{point.name}</span> {point.text}</div></li>
                  ))}
               </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default C2paPage;