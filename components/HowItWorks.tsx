import React from 'react';

const steps = [
  {
    name: '1. Brand Book',
    description: 'Wprowadź logo, kolory, fonty i ton głosu. Nasze AI uczy się Twojej marki, by zapewnić 100% spójności.',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
    ),
  },
  {
    name: '2. Precyzyjny brief',
    description: 'Określ cel, ofertę, target i CTA. Prześlij pliki PDF z dodatkowymi informacjami. Nasz Brief Intelligence Engine zrozumie kontekst.',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
       <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z"></path><path d="M15 2v5h5"></path><path d="M10 16s.8-1.4 2-1.4 2 1.4 2 1.4"></path><path d="M12 10a.5.5 0 0 0-.5.5v0a.5.5 0 0 0 .5.5h0a.5.5 0 0 0 .5-.5v0a.5.5 0 0 0-.5-.5Z"></path><path d="M14.5 10a.5.5 0 0 0-.5.5v0a.5.5 0 0 0 .5.5h0a.5.5 0 0 0 .5-.5v0a.5.5 0 0 0-.5-.5Z"></path><path d="M9.5 10a.5.5 0 0 0-.5.5v0a.5.5 0 0 0 .5.5h0a.5.5 0 0 0 .5-.5v0a.5.5 0 0 0-.5-.5Z"></path></svg>
    ),
  },
  {
    name: '3. Propozycje kampanii',
    description: 'W ciągu minut otrzymasz 2-3 warianty koncepcji kreatywnych, w pełni zgodnych z briefem i Twoim Brand Kitem.',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H5"></path></svg>
    ),
  },
  {
    name: '4. Generacja & Fine Control',
    description: 'Po akceptacji koncepcji, platforma generuje wszystkie potrzebne assety. Użyj panelu Fine Control do finalnych poprawek.',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
       <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.545 5-7 5c-4.454 0-7-5-7-5z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path></svg>
    ),
  },
  {
    name: '5. Publikacja',
    description: 'Zintegruj konta Meta, TikTok i inne. Zaplanuj publikacje, a nasz Media Automator zajmie się resztą.',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.33-.04-3.08.73-.73 2.24-.73 3.08-.04 1.26 1.5 5 2 5 2s-.5-3.74-2-5c-.84-.71-2.33-.7-3.08.04-.73-.73-.73-2.24.04-3.08 1.5-1.26 2-5 2-5s-3.74.5-5 2c-.71.84-.7 2.33.04 3.08-.73.73-2.24.73-3.08.04-1.26-1.5-5-2-5-2s.5 3.74 2 5c.84.71 2.33.7 3.08-.04.73.73.73 2.24-.04 3.08z"></path></svg>
    ),
  },
  {
    name: '6. Analiza i optymalizacja',
    description: 'Śledź wyniki w czasie rzeczywistym. AI Performance Engine analizuje dane i proponuje automatyczne korekty dla przyszłych kampanii.',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
       <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 2v6h6M2.6 15.57a10 10 0 1 0 .28-7.32l-1.42-1.42"></path></svg>
    ),
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-brand-light-dark/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Jak to działa? Sześć prostych kroków.</h2>
          <p className="mt-4 text-lg text-gray-300">
            Od pomysłu do globalnej kampanii w czasie, który do tej pory zajmowało napisanie jednego maila.
          </p>
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
            <div className="relative">
                <div 
                    className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-brand-accent to-transparent"
                    aria-hidden="true"
                ></div>

                {steps.map((step, index) => (
                    <div key={step.name} className="relative mb-12 last:mb-0">
                        <div className="flex items-center">
                            <div className={`z-10 flex items-center justify-center w-12 h-12 bg-brand-dark border-2 border-brand-accent rounded-full shadow-lg shadow-brand-accent/20 ${index % 2 === 0 ? 'ml-auto -mr-6' : 'mr-auto -ml-6'} md:mx-auto md:-ml-6`}>
                                <step.icon className="w-6 h-6 text-brand-accent" />
                            </div>
                            <div className={`w-1/2 p-6 bg-brand-dark/50 border border-gray-800 rounded-lg backdrop-blur-sm ${index % 2 === 0 ? 'pr-16' : 'pl-16 ml-auto'}`}>
                                <h3 className="text-lg font-semibold text-white">{step.name}</h3>
                                <p className="mt-2 text-gray-400">{step.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;