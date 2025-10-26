import React from 'react';

const SafetyGraphic = () => (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto flex items-center justify-center" aria-hidden="true">
        <div className="absolute inset-0 bg-brand-dark rounded-full border-4 border-gray-800"></div>
        <div className="absolute inset-4 bg-brand-accent/10 rounded-full animate-pulse"></div>
        <svg className="relative w-1/2 h-1/2 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    </div>
);


const LegalSafety: React.FC = () => {
  return (
    <section id="legal-safety" className="py-20 sm:py-28 bg-brand-light-dark/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-sm font-semibold text-brand-accent uppercase tracking-wider">Legal & Safety First</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Twórz bez obaw. Publikuj z pewnością.
            </p>
            <p className="mt-4 text-lg text-gray-300">
              W erze dezinformacji i chaosu prawnego, AIO AUTOMATE™ stawia na transparentność. Jesteśmy pierwszą platformą, która integruje standardy C2PA i SynthID na każdym etapie, dając Ci niepodważalny dowód pochodzenia i własności treści.
            </p>
            <div className="mt-6 space-y-2 text-gray-400">
                <p>✓ <span className="font-semibold text-gray-200">Certyfikaty C2PA/SynthID</span> dla każdego assetu</p>
                <p>✓ <span className="font-semibold text-gray-200">Automatyczny transfer praw</span> do użytku komercyjnego</p>
                <p>✓ <span className="font-semibold text-gray-200">Zgodność z RODO i UE AI Act</span></p>
                <p>✓ <span className="font-semibold text-gray-200">Transparentność modeli AI</span> użytych do generacji</p>
            </div>
            <div className="mt-8 bg-brand-dark p-4 rounded-lg border border-green-500/30">
              <p className="font-semibold text-green-300">Każdy asset otrzymuje C2PA/SynthID. Masz jasność praw komercyjnych.</p>
            </div>
          </div>
          <div className="flex justify-center">
            <SafetyGraphic />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalSafety;