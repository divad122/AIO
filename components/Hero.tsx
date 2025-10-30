
import React from 'react';

interface HeroProps {
  onWaitlistClick: () => void;
  content: {
    title: string;
    subtitle: string;
    description: string;
    badge: string;
    cta: string;
  }
}

const Hero: React.FC<HeroProps> = ({ onWaitlistClick, content }) => {
  
  const AIGraphic = () => (
    <div className="relative w-full h-64 sm:h-80 lg:h-96 flex items-center justify-center" aria-hidden="true">
      <div className="absolute w-full h-full max-w-lg max-h-lg rounded-full bg-brand-accent/5 blur-3xl"></div>
      <div className="absolute w-3/4 h-3/4 max-w-md max-h-md rounded-full bg-brand-secondary/10 blur-3xl animate-pulse"></div>
      <div className="absolute w-1/2 h-1/2 max-w-sm max-h-sm rounded-full border border-brand-accent/20"></div>
      <div className="absolute w-1/4 h-1/4 max-w-xs max-h-xs rounded-full border border-brand-accent/30 animate-pulse delay-500"></div>
    </div>
  );

  return (
    <section id="hero" className="relative text-center py-24 sm:py-32 lg:py-40 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 -translate-x-1/4 w-[50vw] h-[50vh] bg-brand-accent/10 rounded-full blur-3xl animate-blob opacity-30" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 w-[50vw] h-[50vh] bg-brand-secondary/10 rounded-full blur-3xl animate-blob animation-delay-4000 opacity-30" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight">
          {content.title}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-300 to-brand-accent-500">{content.subtitle}</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
          {content.description}
        </p>
        <div className="mt-10">
          <a
            href="#waitlist"
            onClick={(e) => { e.preventDefault(); onWaitlistClick(); }}
            className="inline-block py-4 px-10 border border-transparent shadow-sm text-lg font-bold rounded-full text-brand-dark bg-gradient-to-r from-brand-accent-400 to-brand-accent-600 hover:scale-105 transform-gpu transition-transform focus:outline-none focus:ring-4 focus:ring-brand-accent/50"
          >
            {content.cta}
          </a>
        </div>
        <div className="mt-8 text-sm text-gray-400 font-medium">
          <span className="inline-block bg-green-500/10 text-green-300 px-3 py-1 rounded-full">
            {content.badge}
          </span>
        </div>
        <div className="mt-16 mx-auto max-w-4xl">
           <AIGraphic />
        </div>
      </div>
    </section>
  );
};

export default Hero;