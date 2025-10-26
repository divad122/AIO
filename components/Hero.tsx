import React from 'react';

const Hero: React.FC = () => {
  const handleDemoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    alert('Funkcja demonstracyjna jest w przygotowaniu!');
  };
  
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
          Automatyzacja marketingu
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-300 to-brand-accent-500"> od briefu do publikacji.</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
          Nasze autonomiczne agenty AI przejmują cały proces kampanii, a wbudowana warstwa legal-tech zapewnia pełne bezpieczeństwo prawne i transparentność.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#cta"
            className="w-full sm:w-auto bg-gradient-to-r from-brand-accent-400 to-brand-accent-600 text-brand-dark font-bold py-3 px-8 rounded-full hover:scale-105 transform-gpu transition-transform focus:outline-none focus:ring-4 focus:ring-brand-accent/50"
          >
            Rozpocznij pilotaż
          </a>
          <a
            href="#"
            onClick={handleDemoClick}
            className="w-full sm:w-auto bg-brand-light-dark/50 backdrop-blur-sm border border-gray-700 text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-800 hover:border-gray-600 transition-all transform-gpu hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-gray-500"
          >
            Zobacz demo (2 min)
            <span className="block text-xs text-gray-400 -mt-1">bez podawania karty</span>
          </a>
        </div>
        <div className="mt-8 text-sm text-gray-400 font-medium">
          <span className="inline-block bg-green-500/10 text-green-300 px-3 py-1 rounded-full">
            C2PA/SynthID w standardzie
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