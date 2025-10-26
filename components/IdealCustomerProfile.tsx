import React from 'react';

const profiles = [
  {
    name: 'Agencje Marketingowe',
    description: 'Od pitchu do publikacji, samodzielnie i szybciej. Zaskocz klienta tempem i jakością, jednocześnie redukując koszty operacyjne. Skaluj obsługę bez powiększenia zespołu.',
    cta: 'Wzmocnij swoją agencję',
  },
  {
    name: 'Marki D2C / eCommerce',
    description: 'Twórz nieograniczoną liczbę wariantów performance contentu. Wbudowana pętla optymalizacji i analiza ROI pozwolą Ci maksymalizować konwersję i wyprzedzić konkurencję.',
    cta: 'Zwiększ sprzedaż',
  },
  {
    name: 'Małe Firmy i Twórcy',
    description: 'Twoje osobiste centrum marketingowe. Zarządzaj całym marketingiem samodzielnie, bez potrzeby zatrudniania agencji czy freelancerów. Od strategii po codzienne posty.',
    cta: 'Zautomatyzuj swój marketing',
  },
];

const IdealCustomerProfile: React.FC = () => {
  return (
    <section id="icp" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Zbudowane dla liderów. Skalowalne dla każdego.</h2>
          <p className="mt-4 text-lg text-gray-300">
            Niezależnie od wielkości Twojego zespołu, AIO AUTOMATE™ dostosowuje się do Twoich potrzeb, stając się potężnym narzędziem w rękach strategów.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {profiles.map((profile) => (
            <div key={profile.name} className="group flex flex-col bg-gradient-to-br from-brand-light-dark to-brand-dark p-8 rounded-lg border border-gray-800 transition-all duration-300 hover:border-brand-secondary/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-secondary/10">
              <h3 className="text-xl font-bold text-white">{profile.name}</h3>
              <p className="mt-3 text-gray-400 flex-grow">{profile.description}</p>
              <a href="#cta" className="mt-6 text-brand-accent font-semibold hover:text-brand-accent-300">
                {profile.cta} <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdealCustomerProfile;