import React, { useState } from 'react';
import { Campaign } from '../types';

interface CampaignContentPreviewProps {
  contentData: Campaign['content'] | undefined;
  onApprove: (content: Campaign['content']) => void;
  onRevise: (feedback: string) => void;
  isLoading: boolean;
  content: any;
}

const CampaignContentPreview: React.FC<CampaignContentPreviewProps> = ({ contentData, onApprove, onRevise, isLoading, content }) => {
  const [feedback, setFeedback] = useState('');

  if (!contentData) {
    return <div className="text-center text-gray-400">Ładowanie treści...</div>;
  }

  const handleApprove = () => {
    onApprove(contentData);
  }

  const handleRevise = () => {
    if (feedback.trim()) {
        onRevise(feedback);
    }
  }

  const inputStyles = "block w-full bg-brand-dark border border-gray-700 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent placeholder-gray-500 text-white";

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="text-xl font-bold text-white">{content.title}</h2>
        <p className="mt-1 text-sm text-gray-400">{content.description}</p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <div>
            <label htmlFor="postText" className="block text-sm font-medium text-gray-300">{content.post_text_label}</label>
            <textarea id="postText" rows={8} readOnly value={contentData.postText} className={`mt-1 ${inputStyles} text-gray-300`} />
          </div>
          <div>
            <label htmlFor="feedback" className="block text-sm font-medium text-gray-300">{content.feedback_label}</label>
            <textarea id="feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)} rows={3} className={`mt-1 ${inputStyles}`} placeholder={content.feedback_placeholder}/>
          </div>
        </div>
        <div>
           <label className="block text-sm font-medium text-gray-300 mb-1">{content.image_label}</label>
           <div className="aspect-square w-full bg-brand-dark border border-gray-700 rounded-lg overflow-hidden">
               <img src={contentData.imagePlaceholderUrl} alt="AI generated placeholder" className="w-full h-full object-cover"/>
           </div>
        </div>
      </div>
       <div className="mt-8 flex justify-end items-center gap-4">
            <button onClick={handleRevise} disabled={isLoading || !feedback.trim()} className="text-brand-accent font-semibold py-3 px-8 rounded-full border border-brand-accent hover:bg-brand-accent/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                {isLoading ? content.revising_button : content.revise_button}
            </button>
            <button onClick={handleApprove} disabled={isLoading} className="bg-brand-accent text-brand-dark font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all transform-gpu hover:scale-105 focus:outline-none focus:ring-4 focus:ring-brand-accent/50 disabled:opacity-50">
                {content.approve_button}
            </button>
        </div>
    </div>
  );
};

export default CampaignContentPreview;