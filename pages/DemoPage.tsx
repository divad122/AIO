import React from 'react';

interface SubPageProps {
  onBack: (hash?: string) => void;
  content: {
    back_button: string;
    title: string;
    description: string;
    video_alt: string;
    points: { title: string; description: string; }[];
    cta_title: string;
    cta_description: string;
    cta_button: string;
  }
}

const DemoPage: React.FC<SubPageProps> = ({ onBack, content }) => {
  return (
    <main className="flex-grow py-20 sm:py-28 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => onBack('hero')} className="text-gray-300 hover:text-brand-accent transition-colors mb-8 group flex items-center">
          <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">&larr;</span> {content.back_button}
        </button>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">{content.title}</h1>
          <p className="mt-4 text-xl text-gray-300">{content.description}</p>
          
          <div className="mt-10 aspect-video w-full bg-brand-light-dark border border-gray-800 rounded-2xl flex items-center justify-center overflow-hidden">
             {/* Placeholder for a video */}
             <div className="relative w-full h-full">
                <img src="https://picsum.photos/1280/720?grayscale" alt={content.video_alt} className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <button className="w-20 h-20 bg-brand-accent/80 rounded-full flex items-center justify-center hover:bg-brand-accent transition-colors group">
                        <svg className="w-10 h-10 text-brand-dark transform translate-x-0.5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </button>
                </div>
             </div>
          </div>

          <div className="mt-12 text-left grid md:grid-cols-3 gap-8">
            {content.points.map(point => (
              <div key={point.title}>
                <h2 className="text-xl font-bold text-white">{point.title}</h2>
                <p className="text-gray-400 mt-2">{point.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white">{content.cta_title}</h2>
            <p className="mt-2 text-gray-300">{content.cta_description}</p>
            <button onClick={() => onBack('cta')} className="mt-6 bg-gradient-to-r from-brand-accent-400 to-brand-accent-600 text-brand-dark font-bold py-3 px-8 rounded-full hover:scale-105 transform-gpu transition-transform focus:outline-none focus:ring-4 focus:ring-brand-accent/50">
                {content.cta_button}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DemoPage;