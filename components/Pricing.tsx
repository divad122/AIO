import React from 'react';

interface PricingProps {
  isYearly: boolean;
  setIsYearly: (isYearly: boolean) => void;
}

const plans = [
    { name: 'Creator', monthly: 299, yearly: 299 * 12 * 0.85, posts: 25, credits: '500', brand: 1, features: ['Brief Intelligence Engine', 'Creative Factory (Mass)', 'Legal & Rights Vault'] },
    { name: 'Pro', monthly: 890, yearly: 890 * 12 * 0.85, posts: 100, credits: '2 500', brand: 'Multi-brand', popular: true, features: ['Wszystko w Creator', 'Media Automator', 'ROI Reports', 'Feedback Loop Engine'] },
    { name: 'Enterprise', monthly: 3500, yearly: 3500 * 12 * 0.85, posts: 500, credits: '10 000', brand: 'Unlimited', features: ['Wszystko w Pro', 'Integracje CRM/VFX', 'Audyt prawny', 'SSO/SLA', 'Brand Policy Engine'] },
    { name: 'Studio+', monthly: 6500, yearly: 6500 * 12 * 0.85, posts: 'Unlimited', credits: '20 000', brand: 'Unlimited', features: ['Wszystko w Enterprise', 'Onboarding VIP', 'Priorytetowy support', 'Dedykowany ekspert AIOPOST'] }
];

const Pricing: React.FC<PricingProps> = ({ isYearly, setIsYearly }) => {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-brand-light-dark/70 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-700/[0.05] [mask-image:linear-gradient(to_bottom,white_5%,transparent_80%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Prosty cennik. Potężne możliwości.</h2>
          <p className="mt-4 text-lg text-gray-300">
            Wybierz plan, który rośnie razem z Tobą. Zacznij dziś i skaluj bez ograniczeń.
          </p>
        </div>

        <div className="mt-10 flex justify-center items-center space-x-4">
          <span className={`font-medium ${!isYearly ? 'text-white' : 'text-gray-400'}`}>Miesięcznie</span>
          <button onClick={() => setIsYearly(!isYearly)} className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-light-dark focus:ring-brand-accent">
            <span className={`${isYearly ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}/>
          </button>
          <span className={`font-medium ${isYearly ? 'text-white' : 'text-gray-400'}`}>Rocznie <span className="text-brand-accent">(-15%)</span></span>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {plans.map(plan => (
            <div key={plan.name} className={`relative flex flex-col p-8 rounded-2xl border ${plan.popular ? 'border-brand-accent shadow-2xl shadow-brand-accent/20' : 'border-gray-800'} bg-brand-dark/50 backdrop-blur-sm`}>
                {plan.popular && <div className="absolute top-0 -translate-y-1/2 bg-brand-accent text-brand-dark px-3 py-1 text-sm font-semibold rounded-full self-center">Najpopularniejszy</div>}
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-4">
                <span className="text-4xl font-extrabold text-white">${isYearly ? Math.round(plan.yearly / 12) : plan.monthly}</span>
                <span className="text-base font-medium text-gray-400">/mies.</span>
              </p>
              <p className="mt-1 text-sm text-gray-400">{isYearly ? `Płatne rocznie $${Math.round(plan.yearly)}` : 'Płatne miesięcznie'}</p>
              <ul className="mt-6 space-y-3 text-gray-300 flex-grow">
                <li className="flex"><CheckIcon className="h-5 w-5 text-brand-accent mr-2 mt-0.5 shrink-0" /> {plan.posts} postów</li>
                <li className="flex"><CheckIcon className="h-5 w-5 text-brand-accent mr-2 mt-0.5 shrink-0" /> {plan.credits} kredytów</li>
                <li className="flex"><CheckIcon className="h-5 w-5 text-brand-accent mr-2 mt-0.5 shrink-0" /> {plan.brand} marka/i</li>
                {plan.features.map(f => <li key={f} className="flex"><CheckIcon className="h-5 w-5 text-brand-accent mr-2 mt-0.5 shrink-0" />{f}</li>)}
              </ul>
              <a href="#cta" className={`mt-8 block w-full text-center py-3 px-6 rounded-lg font-semibold transition-transform hover:scale-105 transform-gpu ${plan.popular ? 'bg-gradient-to-r from-brand-accent-400 to-brand-accent-600 text-brand-dark' : 'bg-brand-light-dark text-white hover:bg-gray-800 border border-gray-700'}`}>
                Wybierz plan
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-sm text-gray-400 max-w-4xl mx-auto space-y-2">
            <p><span className="font-semibold text-gray-200">Koszty dodatkowe (overage):</span> Obraz $0.04/szt., Wideo $0.18–$0.35/sek., Głos $0.06/100 znaków.</p>
            <p><span className="font-semibold text-gray-200">Pakiety Pre-paid:</span> Kup $1000 w kredytach, otrzymaj 12 000 (bonus 20%).</p>
            <p><span className="font-semibold text-gray-200">Opłaty wdrożeniowe (onboarding fee):</span> Pro $1,500 / Enterprise $6,000 / Studio+ $10,000.</p>
            <div className="pt-4">
                <p className="font-medium text-gray-200">Wideo liczone jest sekundowo. Nasz estymator zawsze pokaże koszt przed renderowaniem.</p>
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

export default Pricing;