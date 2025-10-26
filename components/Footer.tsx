import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handlePlaceholderClick = (e: React.MouseEvent<HTMLAnchorElement>, pageName: string) => {
    e.preventDefault();
    alert(`Strona "${pageName}" jest w przygotowaniu.`);
  };

  return (
    <footer className="bg-brand-light-dark">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex flex-wrap justify-center space-x-6 md:order-2">
            <a href="#" onClick={(e) => handlePlaceholderClick(e, 'Polityka praw autorskich AI')} className="text-gray-400 hover:text-gray-300">Polityka praw autorskich AI</a>
            <a href="#" onClick={(e) => handlePlaceholderClick(e, 'RODO')} className="text-gray-400 hover:text-gray-300">RODO</a>
            <a href="#" onClick={(e) => handlePlaceholderClick(e, 'C2PA')} className="text-gray-400 hover:text-gray-300">C2PA</a>
            <a href="#" onClick={(e) => handlePlaceholderClick(e, 'Kontakt')} className="text-gray-400 hover:text-gray-300">Kontakt</a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; {currentYear} AIO AUTOMATE™. Wszelkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;