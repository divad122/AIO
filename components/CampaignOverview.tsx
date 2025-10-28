import React from 'react';
import { Campaign } from '../types';

interface CampaignOverviewProps {
  campaign: Partial<Campaign>;
  onSave: () => void;
  isLoading: boolean;
  isSaved: boolean;
  onExit: () => void;
  content: any;
}

const InfoRow: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => (
    <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4">
        <dt className="text-sm font-medium text-gray-400">{label}</dt>
        <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">{value || '-'}</dd>
    </div>
);

const CampaignOverview: React.FC<CampaignOverviewProps> = ({ campaign, onSave, isLoading, isSaved, onExit, content }) => {
    
    if (isSaved) {
        return (
            <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto bg-green-500/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h2 className="mt-4 text-xl font-bold text-white">{content.success_message}</h2>
                <button onClick={onExit} className="mt-6 bg-brand-accent text-brand-dark font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all">
                    {content.back_to_campaigns}
                </button>
            </div>
        )
    }
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="text-xl font-bold text-white">{content.title}</h2>
        <p className="mt-1 text-sm text-gray-400">{content.description}</p>
      </div>

      <div className="mt-8 bg-brand-dark border border-gray-800 rounded-lg p-6 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-white">{content.section_brief}</h3>
          <dl className="mt-2 divide-y divide-gray-800">
             <InfoRow label={content.field_name} value={campaign.name} />
             <InfoRow label={content.field_goal} value={campaign.objective} />
             <InfoRow label={content.field_target} value={campaign.targetAudience} />
             <InfoRow label={content.field_message} value={campaign.offer_cta?.offer} />
             <InfoRow label={content.field_cta} value={campaign.offer_cta?.cta} />
             <InfoRow label={content.field_channels} value={campaign.channels_formats?.channels.join(', ')} />
          </dl>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{content.section_concept}</h3>
          <dl className="mt-2 divide-y divide-gray-800">
            <InfoRow label={content.concept_title} value={campaign.concept?.title} />
            <InfoRow label={content.concept_style} value={campaign.concept?.style} />
            <InfoRow label="Slogan" value={<em>"{campaign.concept?.slogan}"</em>} />
          </dl>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{content.section_content}</h3>
           <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="md:col-span-2">
                    <p className="text-sm text-gray-300 whitespace-pre-wrap p-4 bg-brand-dark rounded-md border border-gray-700">{campaign.content?.postText}</p>
               </div>
               <div className="aspect-square bg-brand-dark rounded-md overflow-hidden border border-gray-700">
                   <img src={campaign.content?.imagePlaceholderUrl} alt="Generated content" className="w-full h-full object-cover"/>
               </div>
           </div>
        </div>
      </div>
      <div className="mt-8 flex justify-end">
          <button onClick={onSave} disabled={isLoading} className="bg-brand-accent text-brand-dark font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all transform-gpu hover:scale-105 focus:outline-none focus:ring-4 focus:ring-brand-accent/50 disabled:opacity-50">
                {isLoading ? content.saving_button : content.save_button}
          </button>
      </div>
    </div>
  );
};

export default CampaignOverview;