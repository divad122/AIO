import React from 'react';

const monthlyPrices = { creator: 299, pro: 890, enterprise: 3500, studioplus: 6500 };
const yearlyPrices = { 
    creator: Math.round(299 * 12 * 0.85), 
    pro: Math.round(890 * 12 * 0.85), 
    enterprise: Math.round(3500 * 12 * 0.85), 
    studioplus: Math.round(6500 * 12 * 0.85) 
};


interface PricingProps {
  isYearly: boolean;
  setIsYearly: (isYearly: boolean) => void;
  onPlanSelect: (planId: string) => void;
  content: {
    title: string;
    description: string;
    monthly: string;
    yearly: string;
    yearly_save: string;
    popular: string;
    plans: { id: string; name: string; posts: string; credits: string; brand: string; popular?: boolean; features: string[]; }[];
    billed_yearly: string;
    billed_monthly: string;
    per_month: string;
    cta: string;
    footnotes: {
        overage: string;
        overage_details: string;
        prepaid: string;
        prepaid_details: string;
        onboarding: string;
        onboarding_details: string;
        estimator_note: string;
    }
  };
}

const Pricing: React.FC<PricingProps> = ({ isYearly, setIsYearly, onPlanSelect, content }) => {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-brand-light-dark/70 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-700/[0.05] [mask-image:linear-gradient(to_bottom,white_5%,transparent_80%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{content.title}</h2>
          <p className="mt-4 text-lg text-gray-300">
            {content.description}
          </p>
        </div>

        <div className="mt-10 flex justify-center items-center space-x-4">
          <span className={`font-medium ${!isYearly ? 'text-white' : 'text-gray-400'}`}>{content.monthly}</span>
          <button onClick={() => setIsYearly(!isYearly)} className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-light-dark focus:ring-brand-accent">
            <span className={`${isYearly ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}/>
          </button>
          <span className={`font-medium ${isYearly ? 'text-white' : 'text-gray-400'}`}>{content.yearly} <span className="text-brand-accent">{content.yearly_save}</span></span>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {content.plans.map(plan => (
            <div key={plan.name} className={`relative flex flex-col p-8 rounded-2xl border ${plan.popular ? 'border-brand-accent shadow-2xl shadow-brand-accent/20' : 'border-gray-800'} bg-brand-dark/50 backdrop-blur-sm`}>
                {plan.popular && <div className="absolute top-0 -translate-y-1/2 bg-brand-accent text-brand-dark px-3 py-1 text-sm font-semibold rounded-full self-center">{content.popular}</div>}
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-4">
                <span className="text-4xl font-extrabold text-white">${isYearly ? Math.round(yearlyPrices[plan.id as keyof typeof yearlyPrices] / 12) : monthlyPrices[plan.id as keyof typeof monthlyPrices]}</span>
                <span className="text-base font-medium text-gray-400">{content.per_month}</span>
              </p>
              <p className="mt-1 text-sm text-gray-400">{isYearly ? `${content.billed_yearly} $${yearlyPrices[plan.id as keyof typeof yearlyPrices]}` : content.billed_monthly}</p>
              <ul className="mt-6 space-y-3 text-gray-300 flex-grow">
                <li className="flex"><CheckIcon className="h-5 w-5 text-brand-accent mr-2 mt-0.5 shrink-0" /> {plan.posts}</li>
                <li className="flex"><CheckIcon className="h-5 w-5 text-brand-accent mr-2 mt-0.5 shrink-0" /> {plan.credits}</li>
                <li className="flex"><CheckIcon className="h-5 w-5 text-brand-accent mr-2 mt-0.5 shrink-0" /> {plan.brand}</li>
                {plan.features.map(f => <li key={f} className="flex"><CheckIcon className="h-5 w-5 text-brand-accent mr-2 mt-0.5 shrink-0" />{f}</li>)}
              </ul>
              <button onClick={() => onPlanSelect(plan.id)} className={`mt-8 block w-full text-center py-3 px-6 rounded-lg font-semibold transition-transform hover:scale-105 transform-gpu ${plan.popular ? 'bg-gradient-to-r from-brand-accent-400 to-brand-accent-600 text-brand-dark' : 'bg-brand-light-dark text-white hover:bg-gray-800 border border-gray-700'}`}>
                {content.cta}
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-sm text-gray-400 max-w-4xl mx-auto space-y-2">
            <p><span className="font-semibold text-gray-200">{content.footnotes.overage}</span> {content.footnotes.overage_details}</p>
            <p><span className="font-semibold text-gray-200">{content.footnotes.prepaid}</span> {content.footnotes.prepaid_details}</p>
            <p><span className="font-semibold text-gray-200">{content.footnotes.onboarding}</span> {content.footnotes.onboarding_details}</p>
            <div className="pt-4">
                <p className="font-medium text-gray-200">{content.footnotes.estimator_note}</p>
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