import React, { useState } from 'react';
import { login } from '../lib/api';
import { User } from '../types';

interface LoginPageProps {
  onLogin: (user: User) => void;
  onNavigate: (page: string) => void;
  content: {
    title: string;
    description: string;
    form: {
      email: string;
      password: string;
      submit: string;
    };
    register_prompt: string;
    register_link: string;
    sso_google: string;
  }
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onNavigate, content }) => {
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      const user = await login(email, password);
      if (user) {
        onLogin(user);
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleGoogleLogin = async () => {
    setIsLoading(true);
     try {
      // In a real app, this would trigger the Google OAuth flow.
      // We'll simulate a successful login with a mock user.
      const user = await login('jan.kowalski@example.com'); // mock user
      if (user) {
        onLogin(user);
      }
    } catch (err) {
       setError('Google login failed.');
    } finally {
        setIsLoading(false);
    }
  }


  return (
    <main className="flex-grow flex items-center justify-center py-20 sm:py-28 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-full max-w-md p-8 bg-brand-light-dark border border-gray-800 rounded-2xl space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-white">{content.title}</h1>
            <p className="mt-2 text-gray-400">{content.description}</p>
          </div>
          <button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full flex justify-center items-center py-3 px-4 border border-gray-700 rounded-md shadow-sm bg-brand-dark text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-50"
            >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.3v2.84C4.02 20.44 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.3C1.42 8.84 1 10.36 1 12s.42 3.16 1.2 4.93l3.54-2.84z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 4.02 3.56 2.3 6.96l3.54 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            {content.sso_google}
            </button>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700" />
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-brand-light-dark text-gray-500">OR</span>
                </div>
            </div>
          <form onSubmit={handleSubmit} className="space-y-4">
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
                {content.register_prompt}{' '}
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('register'); }} className="font-medium text-brand-accent hover:text-brand-accent-300">
                    {content.register_link}
                </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;