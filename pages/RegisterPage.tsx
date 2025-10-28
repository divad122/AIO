import React, { useState } from 'react';
import { register } from '../lib/api';
import { User } from '../types';

interface RegisterPageProps {
  onRegister: (user: User) => void;
  onNavigate: (page: string) => void;
  content: {
    title: string;
    description: string;
    form: {
      fullName: string;
      company: string;
      email: string;
      password: string;
      submit: string;
    };
    login_prompt: string;
    login_link: string;
    sso_google: string;
  }
}

const RegisterPage: React.FC<RegisterPageProps> = ({ onRegister, onNavigate, content }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      const user = await register(name, company, email, password);
      if (user) {
        onRegister(user);
      } else {
        setError('Registration failed.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex-grow flex items-center justify-center py-20 sm:py-28 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-full max-w-md p-8 bg-brand-light-dark border border-gray-800 rounded-2xl space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-white">{content.title}</h1>
            <p className="mt-2 text-gray-400">{content.description}</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="full-name" className="sr-only">{content.form.fullName}</label>
              <input value={name} onChange={e => setName(e.target.value)} type="text" name="full-name" id="full-name" autoComplete="name" required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 bg-brand-dark border border-gray-700 rounded-md focus:ring-brand-accent focus:border-brand-accent transition-colors" placeholder={content.form.fullName} />
            </div>
             <div>
              <label htmlFor="company" className="sr-only">{content.form.company}</label>
              <input value={company} onChange={e => setCompany(e.target.value)} type="text" name="company" id="company" autoComplete="organization" required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 bg-brand-dark border border-gray-700 rounded-md focus:ring-brand-accent focus:border-brand-accent transition-colors" placeholder={content.form.company} />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">{content.form.email}</label>
              <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" autoComplete="email" required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 bg-brand-dark border border-gray-700 rounded-md focus:ring-brand-accent focus:border-brand-accent transition-colors" placeholder={content.form.email} />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">{content.form.password}</label>
              <input value={password} onChange={e => setPassword(e.target.value)} type="password" name="password" id="password" required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 bg-brand-dark border border-gray-700 rounded-md focus:ring-brand-accent focus:border-brand-accent transition-colors" placeholder={content.form.password} />
            </div>
             {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <div>
              <button type="submit" disabled={isLoading} className="w-full justify-center py-3 px-6 border border-transparent shadow-sm text-base font-bold rounded-full text-brand-dark bg-gradient-to-r from-brand-accent-400 to-brand-accent-600 hover:scale-105 transform-gpu transition-transform focus:outline-none focus:ring-4 focus:ring-brand-accent/50 disabled:opacity-50">
                 {isLoading ? 'Loading...' : content.form.submit}
              </button>
            </div>
          </form>
          <div className="text-center text-sm">
            <p className="text-gray-400">
                {content.login_prompt}{' '}
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('login'); }} className="font-medium text-brand-accent hover:text-brand-accent-300">
                    {content.login_link}
                </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
