import React from 'react';

interface ICPProps {
    onRegisterClick: () => void;
    content: {
        title: string;
        description: string;
        profiles: { name: string; description: string; cta: string; }[];
    }
}

const IdealCustomerProfile: React.FC<ICPProps> = ({ onRegisterClick, content }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onRegisterClick();
    }
  return (
    <section id="icp" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{content.title}</h2>
          <p className="mt-4 text-lg text-gray-300">
            {content.description}
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.profiles.map((profile) => (
            <div key={profile.name} className="group flex flex-col bg-gradient-to-br from-brand-light-dark to-brand-dark p-8 rounded-lg border border-gray-800 transition-all duration-300 hover:border-brand-secondary/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-secondary/10">
              <h3 className="text-xl font-bold text-white">{profile.name}</h3>
              <p className="mt-3 text-gray-400 flex-grow">{profile.description}</p>
              <a href="#" onClick={handleClick} className="mt-6 text-brand-accent font-semibold hover:text-brand-accent-300">
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
