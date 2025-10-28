import React from 'react';

interface SubPageProps {
  onBack: (hash?: string) => void;
  content: {
    back_button: string;
    title: string;
    description: string;
    form_title: string;
    form: {
      fullName: string;
      email: string;
      message: string;
      submit: string;
      success: string;
    };
    sales_title: string;
    sales_email: string;
    support_title: string;
    support_email: string;
    address_title: string;
    address_lines: string[];
  }
}

const ContactPage: React.FC<SubPageProps> = ({ onBack, content }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(content.form.success);
    (event.target as HTMLFormElement).reset();
  };

  return (
    <main className="flex-grow py-20 sm:py-28 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => onBack()} className="text-gray-300 hover:text-brand-accent transition-colors mb-8 group flex items-center">
          <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">&larr;</span> {content.back_button}
        </button>

        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white">{content.title}</h1>
            <p className="mt-4 text-xl text-gray-300">{content.description}</p>
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-12">
            <div className="p-8 bg-brand-light-dark border border-gray-800 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">{content.form_title}</h2>
               <form className="grid grid-cols-1 gap-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="full-name" className="sr-only">{content.form.fullName}</label>
                  <input type="text" name="full-name" id="full-name" autoComplete="name" required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 bg-brand-dark border border-gray-700 rounded-md focus:ring-brand-accent focus:border-brand-accent transition-colors" placeholder={content.form.fullName} />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">{content.form.email}</label>
                  <input id="email" name="email" type="email" autoComplete="email" required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 bg-brand-dark border border-gray-700 rounded-md focus:ring-brand-accent focus:border-brand-accent transition-colors" placeholder={content.form.email} />
                </div>
                 <div>
                  <label htmlFor="message" className="sr-only">{content.form.message}</label>
                  <textarea id="message" name="message" rows={4} required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 bg-brand-dark border border-gray-700 rounded-md focus:ring-brand-accent focus:border-brand-accent transition-colors" placeholder={content.form.message}></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full justify-center py-3 px-6 border border-transparent shadow-sm text-base font-bold rounded-full text-brand-dark bg-gradient-to-r from-brand-accent-400 to-brand-accent-600 hover:scale-105 transform-gpu transition-transform focus:outline-none focus:ring-4 focus:ring-brand-accent/50">
                    {content.form.submit}
                  </button>
                </div>
              </form>
            </div>
            <div className="space-y-8">
                <div>
                    <h3 className="text-xl font-semibold text-white">{content.sales_title}</h3>
                    <a href={`mailto:${content.sales_email}`} className="text-brand-accent hover:text-brand-accent-300 text-lg">{content.sales_email}</a>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-white">{content.support_title}</h3>
                    <a href={`mailto:${content.support_email}`} className="text-brand-accent hover:text-brand-accent-300 text-lg">{content.support_email}</a>
                </div>
                 <div>
                    <h3 className="text-xl font-semibold text-white">{content.address_title}</h3>
                    <p className="text-lg text-gray-400">
                        {content.address_lines.map(line => <React.Fragment key={line}>{line}<br/></React.Fragment>)}
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;