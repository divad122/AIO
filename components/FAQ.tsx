import React, { useState } from 'react';

const faqData = [
  {
    question: "Czy mogę używać własnych materiałów?",
    answer: "Oczywiście. Platforma pozwala na import własnych materiałów (wideo, grafiki, audio), które mogą być analizowane, edytowane i wykorzystywane w generowanych kampaniach. Nasze AI respektuje Brand Kit, zapewniając spójność z Twoimi zasobami."
  },
  {
    question: "Jak działają kredyty i estymator kosztu renderu?",
    answer: "Kredyty to uniwersalna waluta platformy. Każda operacja generowania (obraz, wideo, tekst, audio) zużywa określoną liczbę kredytów. Przed każdym renderem nasz estymator precyzyjnie określi koszt, dając Ci pełną kontrolę nad wydatkami."
  },
  {
    question: "Czy platforma publikuje automatycznie?",
    answer: "Tak. AIO AUTOMATE™ integruje się z popularnymi platformami społecznościowymi (Meta, TikTok i inne), umożliwiając automatyczne planowanie i publikację zatwierdzonych treści zgodnie z ustalonym harmonogramem."
  },
  {
    question: "Czy wspieracie badania focusowe?",
    answer: "Pracujemy nad modułem Focus Intelligence, który pozwoli na przeprowadzanie badań focusowych wygenerowanych kreacji na wczesnym etapie. Funkcjonalność ta jest planowana na Q4. Zapisz się do newslettera, by otrzymać informację o jej starcie."
  },
  {
    question: "Na jakich modelach działa AI Core?",
    answer: "Nasz AI Core to dynamiczny system, który korzysta z wielu wyspecjalizowanych modeli AI (obraz, wideo, audio, językowe). Dobieramy najlepsze narzędzie do danego zadania w czasie rzeczywistym, aby zapewnić najwyższą jakość i efektywność, bez przywiązywania się do jednego dostawcy."
  }
];

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

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-brand-light-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Często zadawane pytania</h2>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          {faqData.map((item, index) => (
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
