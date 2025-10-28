import React, { useState } from 'react';

interface FAQProps {
  content: {
    title: string;
    questions: { question: string; answer: string; }[];
  }
}

const FAQItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-800">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-5 text-left"
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <span className="ml-6 flex-shrink-0">
            <svg className={`w-6 h-6 transform transition-transform duration-200 ${isOpen ? '-rotate-180' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </span>
      </button>
      {isOpen && (
        <div className="pb-5 pr-12">
          <p className="text-base text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC<FAQProps> = ({ content }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-brand-light-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">{content.title}</h2>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          {content.questions.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;