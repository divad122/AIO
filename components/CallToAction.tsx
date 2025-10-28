import React from 'react';

interface CTAProps {
    onRegisterClick: () => void;
    content: {
        title: string;
        description: string;
        form: {
            fullName: string;
            email: string;
            company: string;
            submit: string;
            success: string;
        }
    }
}

const CallToAction: React.FC<CTAProps> = ({ onRegisterClick, content }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onRegisterClick();
  };

  return (
    <section id="cta" className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-gray-700/[0.05]"></div>
        <div className="absolute -top-1/2 left-0 w-[800px] h-[800px] bg-brand-secondary/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {content.title}
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            {content.description}
          </p>
        </div>
        <div className="mt-12 max-w-xl mx-auto p-8 bg-brand-dark/50 border border-gray-800 rounded-2xl backdrop-blur-lg">
          <form className="grid grid-cols-1 gap-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="full-name" className="sr-only">{content.form.fullName}</label>
              <input type="text" name="full-name" id="full-name" autoComplete="name" required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 bg-brand-light-dark border border-gray-700 rounded-md focus:ring-brand-accent focus:border-brand-accent transition-colors" placeholder={content.form.fullName} />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">{content.form.email}</label>
              <input id="email" name="email" type="email" autoComplete="email" required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 bg-brand-light-dark border border-gray-700 rounded-md focus:ring-brand-accent focus:border-brand-accent transition-colors" placeholder={content.form.email} />
            </div>
            <div>
              <label htmlFor="company" className="sr-only">{content.form.company}</label>
              <input type="text" name="company" id="company" autoComplete="organization" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 bg-brand-light-dark border border-gray-700 rounded-md focus:ring-brand-accent focus:border-brand-accent transition-colors" placeholder={content.form.company} />
            </div>
            <div>
              <button type="submit" className="w-full justify-center py-3 px-6 border border-transparent shadow-sm text-base font-bold rounded-full text-brand-dark bg-gradient-to-r from-brand-accent-400 to-brand-accent-600 hover:scale-105 transform-gpu transition-transform focus:outline-none focus:ring-4 focus:ring-brand-accent/50">
                {content.form.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
