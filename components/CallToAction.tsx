import React from 'react';

const CallToAction: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Dziękujemy za zgłoszenie! Skontaktujemy się z Tobą wkrótce, aby umówić demo.');
    // Tutaj można dodać logikę wysyłania danych formularza
    (event.target as HTMLFormElement).reset();
  };

  return (
    <section id="cta" className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-gray-700/[0.05]"></div>
        <div className="absolute -top-1/2 left-0 w-[800px] h-[800px] bg-brand-secondary/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Gotów na rewolucję w marketingu?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Zacznij pilotaż (6-8 tygodni) lub umów się na indywidualne demo, by zobaczyć, jak AIO AUTOMATE™ może odmienić Twoją pracę.
          </p>
        </div>
        <div className="mt-12 max-w-xl mx-auto p-8 bg-brand-dark/50 border border-gray-800 rounded-2xl backdrop-blur-lg">
          <form className="grid grid-cols-1 gap-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="full-name" className="sr-only">Imię i nazwisko</label>
              <input type="text" name="full-name" id="full-name" autoComplete="name" required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 bg-brand-light-dark border border-gray-700 rounded-md focus:ring-brand-accent focus:border-brand-accent transition-colors" placeholder="Imię i nazwisko" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 bg-brand-light-dark border border-gray-700 rounded-md focus:ring-brand-accent focus:border-brand-accent transition-colors" placeholder="Adres email" />
            </div>
            <div>
              <label htmlFor="company" className="sr-only">Firma</label>
              <input type="text" name="company" id="company" autoComplete="organization" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 bg-brand-light-dark border border-gray-700 rounded-md focus:ring-brand-accent focus:border-brand-accent transition-colors" placeholder="Nazwa firmy" />
            </div>
            <div>
              <button type="submit" className="w-full justify-center py-3 px-6 border border-transparent shadow-sm text-base font-bold rounded-full text-brand-dark bg-gradient-to-r from-brand-accent-400 to-brand-accent-600 hover:scale-105 transform-gpu transition-transform focus:outline-none focus:ring-4 focus:ring-brand-accent/50">
                Umów demo
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;