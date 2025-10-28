import React, { useState } from 'react';
import { User, Campaign } from '../types';
import CampaignProgressBar from '../components/CampaignProgressBar';
import CampaignBriefForm from '../components/CampaignBriefForm';
import CampaignConcepts from '../components/CampaignConcepts';
import CampaignContentPreview from '../components/CampaignContentPreview';
import CampaignOverview from '../components/CampaignOverview';
import { generateCampaignConcept, generateCampaignContent, saveCampaign } from '../lib/api';

interface CampaignCreatorPageProps {
  user: User;
  onNavigate: (page: string) => void;
  content: any; // Using any for simplicity as it's a large object
}

const CampaignCreatorPage: React.FC<CampaignCreatorPageProps> = ({ user, onNavigate, content }) => {
  const [step, setStep] = useState(1);
  const [campaign, setCampaign] = useState<Partial<Campaign>>({
    brand_id: "Example Brand",
    name: "",
    objective: content.brief.goals[0],
    productDescription: "",
    targetAudience: "",
    offer_cta: { offer: "", cta: "" },
    channels_formats: { channels: [], formats: [] }
  });
  const [concepts, setConcepts] = useState<Campaign['concept'][]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const handleBriefSubmit = async (briefData: Partial<Campaign>) => {
    setIsLoading(true);
    setError('');
    const fullBrief = { ...campaign, ...briefData };
    setCampaign(fullBrief);
    try {
      const generatedConcepts = await generateCampaignConcept(fullBrief);
      setConcepts(generatedConcepts);
      setStep(2);
    } catch (e) {
      setError(content.concepts.generating_error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleConceptSelect = async (selectedConcept: Campaign['concept']) => {
    setIsLoading(true);
    const updatedCampaign = { ...campaign, concept: selectedConcept };
    setCampaign(updatedCampaign);
    try {
        const generatedContent = await generateCampaignContent(selectedConcept);
        setCampaign(prev => ({ ...prev, content: generatedContent }));
        setStep(3);
    } catch (e) {
        setError('Content generation failed.'); // Add to content.ts later
    } finally {
        setIsLoading(false);
    }
  };

  const handleContentApprove = (newContent: Campaign['content']) => {
    setCampaign(prev => ({ ...prev, content: newContent, status: 'approved' }));
    setStep(4);
  };
  
  const handleContentRevision = async (feedback: string) => {
    if (!campaign.concept) return;
    setIsLoading(true);
    try {
        const revisedContent = await generateCampaignContent(campaign.concept, feedback);
        setCampaign(prev => ({...prev, content: revisedContent}));
    } catch(e) {
        setError('Content revision failed.');
    } finally {
        setIsLoading(false);
    }
  }

  const handleSaveCampaign = async () => {
    setIsLoading(true);
    try {
        await saveCampaign(campaign);
        setIsSaved(true);
    } catch (e) {
        setError('Failed to save campaign.');
    } finally {
        setIsLoading(false);
    }
  }


  const renderStep = () => {
    switch (step) {
      case 1:
        return <CampaignBriefForm onSubmit={handleBriefSubmit} isLoading={isLoading} content={content.brief} />;
      case 2:
        return <CampaignConcepts concepts={concepts} onSelect={handleConceptSelect} error={error} content={content.concepts}/>;
      case 3:
        return <CampaignContentPreview contentData={campaign.content} onApprove={handleContentApprove} onRevise={handleContentRevision} isLoading={isLoading} content={content.content} />;
      case 4:
        return <CampaignOverview campaign={campaign} onSave={handleSaveCampaign} isLoading={isLoading} isSaved={isSaved} onExit={() => onNavigate('campaigns')} content={content.overview}/>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-brand-light-dark border border-gray-800 rounded-lg p-6 sm:p-8 lg:p-10 min-h-[80vh]">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">{content.title}</h1>
          <p className="text-gray-400 mt-1">{`Krok ${step} z 4`}</p>
        </div>
        <button onClick={() => onNavigate('campaigns')} className="text-sm font-medium text-gray-300 hover:text-white">
          {content.exit} &times;
        </button>
      </div>
      <CampaignProgressBar currentStep={step} steps={content.progress} />
      <div className="mt-8">
        {renderStep()}
      </div>
    </div>
  );
};

export default CampaignCreatorPage;