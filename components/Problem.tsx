import React from 'react';

const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-20 sm:py-28 bg-brand-dark/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold text-brand-accent uppercase tracking-wider">Problem</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Marketing w erze AI to obietnica i chaos.
          </p>
          <p className="mt-4 text-lg text-gray-300">
            Zespoły marketingowe toną w dziesiątkach narzędzi, a presja na szybkość, koszty i jakość rośnie. Generatywne AI obiecuje rewolucję, ale wprowadza chaos prawny i ryzyko utraty kontroli nad marką.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-gradient-to-br from-brand-light-dark to-brand-dark border border-gray-800 transition-all duration-300 hover:border-brand-accent/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-accent/10">
            <h3 className="text-lg font-semibold text-white">Rozproszony stack</h3>
            <p className="mt-2 text-gray-400">Żonglowanie subskrypcjami, brak integracji i spójności danych. Czas ucieka na manualnej pracy, a nie na strategii.</p>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-br from-brand-light-dark to-brand-dark border border-gray-800 transition-all duration-300 hover:border-brand-accent/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-accent/10">
            <h3 className="text-lg font-semibold text-white">Presja i kompromisy</h3>
            <p className="mt-2 text-gray-400">Niekończąca się walka między szybkością, jakością a budżetem. Kreatywność ustępuje miejsca gaszeniu pożarów.</p>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-br from-brand-light-dark to-brand-dark border border-gray-800 transition-all duration-300 hover:border-brand-accent/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-accent/10">
            <h3 className="text-lg font-semibold text-white">Chaos prawny AI</h3>
            <p className="mt-2 text-gray-400">Kto jest właścicielem treści? Czy można jej użyć komercyjnie? Brak transparentności i standardów to realne ryzyko biznesowe.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;