import React, { useState } from 'react';
import { Campaign } from '../types';

interface CampaignBriefFormProps {
  onSubmit: (briefData: Partial<Campaign>) => void;
  isLoading: boolean;
  content: any;
}

const CampaignBriefForm: React.FC<CampaignBriefFormProps> = ({ onSubmit, isLoading, content }) => {
  const [formData, setFormData] = useState({
    name: '',
    objective: content.goals[0],
    productDescription: '',
    targetAudience: '',
    offer: '',
    cta: '',
    channels: [] as string[],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleChannelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const channels = checked
        ? [...prev.channels, value]
        : prev.channels.filter(channel => channel !== value);
      return { ...prev, channels };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const campaignData: Partial<Campaign> = {
      name: formData.name,
      objective: formData.objective,
      productDescription: formData.productDescription,
      targetAudience: formData.targetAudience,
      offer_cta: { offer: formData.offer, cta: formData.cta },
      channels_formats: { channels: formData.channels, formats: [] }
    };
    onSubmit(campaignData);
  };

  const inputStyles = "mt-1 block w-full bg-brand-dark border border-gray-700 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent placeholder-gray-500 text-white";

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center">
        <h2 className="text-xl font-bold text-white">{content.title}</h2>
        <p className="mt-1 text-sm text-gray-400">{content.description}</p>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <fieldset className="space-y-4 p-4 border border-gray-700 rounded-md">
            <legend className="font-semibold text-gray-300 px-2">{content.basic_section}</legend>
            
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">{content.name_label}</label>
                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className={inputStyles} placeholder={content.name_placeholder} />
            </div>

            <div>
                <label htmlFor="objective" className="block text-sm font-medium text-gray-300">{content.goal_label}</label>
                <select id="objective" name="objective" value={formData.objective} onChange={handleChange} className={inputStyles}>
                    {content.goals.map((g: string) => <option key={g}>{g}</option>)}
                </select>
            </div>
             <div>
                <label htmlFor="productDescription" className="block text-sm font-medium text-gray-300">{content.product_label}</label>
                <textarea id="productDescription" name="productDescription" rows={3} required value={formData.productDescription} onChange={handleChange} className={inputStyles} placeholder={content.product_placeholder}></textarea>
            </div>
             <div>
                <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-300">{content.target_label}</label>
                <input type="text" name="targetAudience" id="targetAudience" required value={formData.targetAudience} onChange={handleChange} className={inputStyles} placeholder={content.target_placeholder} />
            </div>
             <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label htmlFor="offer" className="block text-sm font-medium text-gray-300">{content.message_label}</label>
                    <input type="text" name="offer" id="offer" required value={formData.offer} onChange={handleChange} className={inputStyles} placeholder={content.message_placeholder} />
                </div>
                 <div>
                    <label htmlFor="cta" className="block text-sm font-medium text-gray-300">{content.cta_label}</label>
                    <input type="text" name="cta" id="cta" required value={formData.cta} onChange={handleChange} className={inputStyles} placeholder={content.cta_placeholder} />
                </div>
             </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">{content.channels_label}</label>
                <div className="mt-2 flex flex-wrap gap-4">
                    {['Instagram', 'LinkedIn', 'TikTok', 'YouTube'].map(channel => (
                        <div key={channel} className="flex items-center">
                            <input id={channel} name="channels" type="checkbox" value={channel} onChange={handleChannelChange} className="h-4 w-4 bg-gray-700 border-gray-600 text-brand-accent rounded focus:ring-brand-accent focus:ring-offset-brand-light-dark" />
                            <label htmlFor={channel} className="ml-2 block text-sm text-white">{channel}</label>
                        </div>
                    ))}
                </div>
            </div>
             <div>
                <label className="block text-sm font-medium text-gray-300">{content.file_label}</label>
                <p className="text-xs text-gray-500">{content.file_description}</p>
                <input type="file" className="mt-2 block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-accent/10 file:text-brand-accent hover:file:bg-brand-accent/20"/>
            </div>
        </fieldset>

        <div className="flex justify-end">
          <button type="submit" disabled={isLoading} className="bg-brand-accent text-brand-dark font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all transform-gpu hover:scale-105 focus:outline-none focus:ring-4 focus:ring-brand-accent/50 disabled:opacity-50 disabled:cursor-not-allowed">
            {isLoading ? content.generating_button : content.generate_button}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CampaignBriefForm;