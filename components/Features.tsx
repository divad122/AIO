import React from 'react';

const features = [
  { name: 'Brief Intelligence Engine', description: 'Analizuje briefy, dokumenty i URL-e, by w pełni zrozumieć kontekst kampanii.' },
  { name: 'Brand Kit Lock + Policy Engine', description: 'Gwarantuje 100% zgodności z identyfikacją wizualną i polityką marki (guardrails).' },
  { name: 'Creative Factory', description: 'Generuje tysiące wariantów kreacji (Mass) lub pojedyncze, dopracowane assety (High-End).' },
  { name: 'Feedback Loop Engine', description: 'Uczy się Twojego gustu i preferencji na podstawie ocen i edycji, by kolejne propozycje były jeszcze lepsze.' },
  { name: 'Media Automator', description: 'Planuje i publikuje treści na platformach społecznościowych, oszczędzając Twój czas.' },
  { name: 'AI Performance Engine', description: 'Analizuje wyniki kampanii i dostarcza rekomendacji optymalizacyjnych.' },
  { name: 'Legal & Rights Vault', description: 'Przechowuje certyfikaty C2PA/SynthID i dokumenty transferu praw autorskich dla każdego assetu.' },
  { name: 'Fine Control Panel', description: 'Intuicyjne narzędzia postprodukcyjne do precyzyjnej kontroli nad każdym detalem kreacji.' },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 sm:py-28 relative overflow-hidden">
       <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] bg-brand-secondary/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Stworzony dla efektywności i kontroli.</h2>
          <p className="mt-4 text-lg text-gray-300">
            Każda funkcja AIO AUTOMATE™ została zaprojektowana, by eliminować manualną pracę, zwiększać kreatywność i zapewniać pełne bezpieczeństwo.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="bg-gradient-to-br from-brand-light-dark to-brand-dark p-6 rounded-lg border border-gray-800 transition-all duration-300 hover:border-brand-accent/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-accent/10">
              <h3 className="text-lg font-semibold text-white">{feature.name}</h3>
              <p className="mt-2 text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;