import React from 'react';

const AIGraphicSolution = () => (
  <div className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center rounded-lg overflow-hidden border border-gray-800 bg-brand-dark" aria-hidden="true">
    <div className="absolute inset-0 bg-grid-gray-700/[0.05]"></div>
    <div className="absolute w-full h-full rounded-full bg-brand-accent/10 blur-3xl animate-pulse"></div>
    <div className="absolute w-2/3 h-2/3 rounded-full bg-brand-secondary/10 blur-2xl"></div>
    <svg className="relative w-1/2 h-1/2 text-brand-accent/50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 10V40M50 60V90M10 50H40M60 50H90M21.2 21.2L42.4 42.4M57.6 57.6L78.8 78.8M21.2 78.8L42.4 57.6M57.6 42.4L78.8 21.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="50" cy="50" r="12" stroke="currentColor" strokeWidth="2"/>
    </svg>
  </div>
);

interface SolutionProps {
    content: {
        pretitle: string;
        title: string;
        description: string;
        points: { title: string; description: string; }[];
    }
}

const Solution: React.FC<SolutionProps> = ({ content }) => {
  return (
    <section id="solution" className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h2 className="text-sm font-semibold text-brand-accent uppercase tracking-wider">{content.pretitle}</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {content.title}
            </p>
            <p className="mt-4 text-lg text-gray-300">
              {content.description}
            </p>
            <div className="mt-6 space-y-4">
              {content.points.map((point, index) => (
                 <div key={index} className="flex items-start">
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-brand-accent" />
                    <p className="ml-3 text-gray-300">
                    <span className="font-semibold text-white">{point.title}</span> {point.description}
                    </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <AIGraphicSolution />
          </div>
        </div>
      </div>
    </section>
  );
};

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);


export default Solution;