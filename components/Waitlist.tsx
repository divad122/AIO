
import React, { useState } from 'react';

interface WaitlistProps {
    content: {
        title: string;
        description: string;
        form: {
            firstName: string;
            lastName: string;
            industry: string;
            email: string;
            submit: string;
            success: string;
        }
    }
}

const Waitlist: React.FC<WaitlistProps> = ({ content }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    industry: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { firstName, lastName, industry, email } = formData;

    const subject = "Zapis na listę zainteresowanych AIO AUTOMATE™ (Waitlist Signup)";
    const body = `
      Zgłoszenie do listy zainteresowanych:
      ---------------------------------
      Imię: ${firstName}
      Nazwisko: ${lastName}
      Branża/Firma: ${industry}
      Email: ${email}
      ---------------------------------
    `;
    
    const mailtoLink = `mailto:info@aiopost.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="py-20 sm:py-28 relative overflow-hidden bg-brand-light-dark">
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
        <div className="mt-12 max-w-xl mx-auto">
          {submitted ? (
             <div className="p-8 bg-brand-dark/50 border border-green-500/30 rounded-2xl backdrop-blur-lg text-center">
                <div className="w-16 h-16 mx-auto bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <p className="text-lg font-semibold text-green-300">{content.form.success}</p>
             </div>
          ) : (
            <div className="p-8 bg-brand-dark/50 border border-gray-800 rounded-2xl backdrop-blur-lg">
                <form className="grid grid-cols-1 gap-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                        <div>
                            <label htmlFor="firstName" className="sr-only">{content.form.firstName}</label>
                            <input type="text" name="firstName" id="firstName" autoComplete="given-name" required value={formData.firstName} onChange={handleChange} className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 bg-brand-dark border border-gray-700 rounded-md focus:ring-brand-accent focus:border-brand-accent transition-colors" placeholder={content.form.firstName} />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="sr-only">{content.form.lastName}</label>
                            <input type="text" name="lastName" id="lastName" autoComplete="family-name" required value={formData.lastName} onChange={handleChange} className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 bg-brand-dark border border-gray-700 rounded-md focus:ring-brand-accent focus:border-brand-accent transition-colors" placeholder={content.form.lastName} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="industry" className="sr-only">{content.form.industry}</label>
                        <input type="text" name="industry" id="industry" autoComplete="organization" required value={formData.industry} onChange={handleChange} className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 bg-brand-dark border border-gray-700 rounded-md focus:ring-brand-accent focus:border-brand-accent transition-colors" placeholder={content.form.industry} />
                    </div>
                    <div>
                        <label htmlFor="email" className="sr-only">{content.form.email}</label>
                        <input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 bg-brand-dark border border-gray-700 rounded-md focus:ring-brand-accent focus:border-brand-accent transition-colors" placeholder={content.form.email} />
                    </div>
                    <div>
                        <button type="submit" className="w-full justify-center py-3 px-6 border border-transparent shadow-sm text-base font-bold rounded-full text-brand-dark bg-gradient-to-r from-brand-accent-400 to-brand-accent-600 hover:scale-105 transform-gpu transition-transform focus:outline-none focus:ring-4 focus:ring-brand-accent/50">
                            {content.form.submit}
                        </button>
                    </div>
                </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
