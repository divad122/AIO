import React, { useState } from 'react';
import { Campaign } from '../types';

interface CampaignConceptsProps {
  concepts: Campaign['concept'][];
  onSelect: (concept: Campaign['concept']) => void;
  error: string;
  content: any;
}

const CampaignConcepts: React.FC<CampaignConceptsProps> = ({ concepts, onSelect, error, content }) => {
  const [selectedConceptIndex, setSelectedConceptIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelectedConceptIndex(index);
    onSelect(concepts[index]);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="text-xl font-bold text-white">{content.title}</h2>
        <p className="mt-1 text-sm text-gray-400">{content.description}</p>
      </div>
      
      {error && <p className="mt-4 text-center text-red-500">{error}</p>}

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {concepts.map((concept, index) => (
          <div
            key={index}
            className={`p-6 bg-brand-dark border rounded-lg cursor-pointer transition-all duration-300 ${
              selectedConceptIndex === index
                ? 'border-brand-accent ring-2 ring-brand-accent ring-offset-2 ring-offset-brand-light-dark shadow-lg'
                : 'border-gray-800 hover:border-brand-accent/70'
            }`}
            onClick={() => handleSelect(index)}
          >
            <h3 className="font-bold text-lg text-white">{concept.title}</h3>
            <p className="mt-2 text-sm text-gray-300">{concept.description}</p>
            <div className="mt-4 text-xs">
                <p className="text-gray-400"><strong>Hasło:</strong> <span className="italic">"{concept.slogan}"</span></p>
                <p className="text-gray-400 mt-1"><strong>Styl wizualny:</strong> {concept.style}</p>
            </div>
            {selectedConceptIndex === index && (
                <div className="mt-4 text-center text-sm font-bold text-brand-accent">
                    ✓ Wybrano
                </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignConcepts;