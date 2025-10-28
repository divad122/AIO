import React from 'react';

interface HowItWorksProps {
    content: {
        title: string;
        description: string;
        steps: { name: string; description: string; }[];
    }
}

const MockupUI: React.FC<{ step: number }> = ({ step }) => {
    // A component to render different, highly detailed UI mockups for each step
    const stepStyles = [
        // 1. Brand Book
        <div className="p-3 bg-gray-900/50 rounded-lg text-left w-full h-full overflow-hidden text-xs">
            <h1 className="text-base font-bold text-white tracking-tight">Ustawienia marki</h1>
            <p className="mt-1 text-xs text-gray-400 max-w-2xl">Wprowadź kluczowe elementy, aby AI tworzyło spójne kampanie.</p>
            <div className="mt-4 space-y-4">
                <fieldset>
                    <legend className="text-xs font-semibold text-brand-accent/70 mb-2">PODSTAWOWE INFORMACJE</legend>
                    <div className="space-y-2">
                        <div>
                            <label className="text-xs font-medium text-gray-400 block mb-1">Nazwa Marki</label>
                            <div className="w-full shadow-sm py-1.5 px-2 bg-brand-dark border border-gray-700 rounded-md text-xs text-white">AIO AUTOMATE™</div>
                        </div>
                        <div>
                            <label className="text-xs font-medium text-gray-400 block mb-1">Branża</label>
                            <div className="w-full shadow-sm py-1.5 px-2 bg-brand-dark border border-gray-700 rounded-md text-xs text-white">Technologia, Marketing</div>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend className="text-xs font-semibold text-brand-accent/70 mb-2">IDENTYFIKACJA WIZUALNA</legend>
                    <div className="space-y-2">
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                 <label className="text-xs font-medium text-gray-400 block mb-1">Kolor główny</label>
                                 <div className="w-full h-8 p-1 bg-brand-dark border border-gray-700 rounded-md flex items-center">
                                    <div className="w-full h-full rounded-sm" style={{ backgroundColor: '#00f2c3' }}></div>
                                 </div>
                            </div>
                            <div>
                                <label className="text-xs font-medium text-gray-400 block mb-1">Kolor dodatkowy</label>
                                <div className="w-full h-8 p-1 bg-brand-dark border border-gray-700 rounded-md flex items-center">
                                    <div className="w-full h-full rounded-sm" style={{ backgroundColor: '#6366f1' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>,
        // 2. Brief
        <div className="p-4 bg-gray-900/50 rounded-lg text-left w-full h-full">
            <div className="text-sm font-semibold text-white mb-2">New Campaign Brief</div>
             <div className="text-xs text-gray-400 mb-1">Campaign Name</div>
             <div className="w-full h-5 bg-gray-800 rounded-sm mb-2"></div>
             <div className="text-xs text-gray-400 mb-1">Goal</div>
             <div className="flex space-x-1.5 mb-2">
                <div className="px-1.5 py-0.5 text-xs bg-brand-accent/20 text-brand-accent rounded-full">Awareness</div>
                <div className="px-1.5 py-0.5 text-xs bg-gray-700 text-gray-300 rounded-full">Sales</div>
             </div>
             <div className="text-xs text-gray-400 mb-1">Attachments</div>
             <div className="w-full p-2 border border-dashed border-gray-600 rounded-md text-center">
                <span className="text-xs text-gray-500">Upload PDF/DOCX</span>
            </div>
        </div>,
        // 3. Concepts
        <div className="p-4 bg-gray-900/50 rounded-lg w-full h-full space-y-2">
            <div className="p-2 border border-gray-700 rounded-md bg-gray-800/50">
                <div className="w-3/4 h-3 bg-gray-600 rounded-full mb-1"></div>
                <div className="w-full h-2 bg-gray-700 rounded-full"></div>
            </div>
             <div className="p-2 border-2 border-brand-accent rounded-md bg-brand-accent/10 relative">
                <div className="absolute -top-2 right-2 px-1.5 py-0.5 text-xs bg-brand-accent text-brand-dark rounded-full font-bold">Selected</div>
                <div className="w-3/4 h-3 bg-brand-accent/50 rounded-full mb-1"></div>
                <div className="w-full h-2 bg-brand-accent/30 rounded-full"></div>
            </div>
        </div>,
        // 4. Generation
        <div className="p-2 bg-gray-900/50 rounded-lg flex space-x-2 w-full h-full">
            <div className="w-2/3 aspect-square bg-gray-800 rounded-md flex items-center justify-center">
                <svg className="w-10 h-10 text-brand-accent opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
            <div className="w-1/3 space-y-2">
                <div className="text-xs text-gray-400">Contrast</div>
                <div className="w-full h-1.5 bg-gray-700 rounded-full"></div>
                <div className="text-xs text-gray-400">Saturation</div>
                <div className="w-full h-1.5 bg-gray-700 rounded-full"></div>
                 <div className="text-xs text-gray-400">Music Vol.</div>
                <div className="w-full h-1.5 bg-gray-700 rounded-full"></div>
            </div>
        </div>,
        // 5. Publishing
        <div className="p-3 bg-gray-900/50 rounded-lg w-full h-full">
            <div className="text-xs font-semibold text-white mb-2">Publishing Calendar</div>
            <div className="grid grid-cols-3 gap-1 text-xs text-center text-gray-500">
                <div>MON</div><div>TUE</div><div>WED</div>
            </div>
            <div className="grid grid-cols-3 gap-1 mt-1 h-16">
                 <div className="bg-gray-800 rounded-sm"></div>
                 <div className="bg-gray-800 rounded-sm p-0.5 space-y-0.5">
                    <div className="w-full h-2 rounded-sm bg-indigo-500/50"></div>
                    <div className="w-full h-2 rounded-sm bg-pink-500/50"></div>
                 </div>
                 <div className="bg-gray-800 rounded-sm"></div>
            </div>
        </div>,
        // 6. Analysis
        <div className="p-3 bg-gray-900/50 rounded-lg w-full h-full">
            <div className="grid grid-cols-3 gap-1.5 mb-2">
                <div className="p-1 rounded bg-gray-800"><div className="text-xs text-gray-400">CTR</div><div className="text-sm font-bold text-white">2.1%</div></div>
                <div className="p-1 rounded bg-gray-800"><div className="text-xs text-gray-400">ROAS</div><div className="text-sm font-bold text-white">4.3x</div></div>
                <div className="p-1 rounded bg-gray-800"><div className="text-xs text-gray-400">Views</div><div className="text-sm font-bold text-white">1.2M</div></div>
            </div>
            <div className="flex items-end space-x-1 h-10">
                <div className="w-full h-1/2 bg-brand-accent/30 rounded-t-sm"></div>
                <div className="w-full h-3/4 bg-brand-accent/50 rounded-t-sm"></div>
                <div className="w-full h-full bg-brand-accent/70 rounded-t-sm"></div>
                <div className="w-full h-1/3 bg-brand-accent/20 rounded-t-sm"></div>
            </div>
             <div className="text-xs text-brand-accent mt-1">▲ AI Suggestion: Shorten hook...</div>
        </div>
    ];

    return (
        <div className="w-full h-full min-h-[240px] bg-brand-dark border-2 border-gray-800 rounded-xl shadow-lg shadow-brand-dark/50 flex items-center justify-center p-2">
            {stepStyles[step] || null}
        </div>
    );
};


const HowItWorks: React.FC<HowItWorksProps> = ({ content }) => {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-brand-light-dark/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{content.title}</h2>
          <p className="mt-4 text-lg text-gray-300">
            {content.description}
          </p>
        </div>

        <div className="mt-20 max-w-5xl mx-auto space-y-24">
            {content.steps.map((step, index) => (
              <div key={step.name} className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Text Column */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-brand-dark border-2 border-brand-accent">
                      <span className="font-bold text-white text-lg">{index + 1}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{step.name}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {/* Mockup Column */}
                <div>
                  <MockupUI step={index} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;