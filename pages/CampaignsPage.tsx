import React, { useState, useEffect } from 'react';
import { User, Campaign } from '../types';
import { getCampaigns } from '../lib/api';

interface CampaignsPageProps {
  user: User;
  onNavigate: (page: string) => void;
  content: {
    title: string;
    new_campaign: string;
    table_headers: {
        name: string;
        status: string;
        channels: string;
        timeline: string;
        actions: string;
    };
    view_button: string;
  }
}

const StatusBadge: React.FC<{ status: Campaign['status'] }> = ({ status }) => {
    const statusMap = {
        draft: { text: 'Szkic', color: 'gray' },
        generating: { text: 'Generowanie', color: 'blue' },
        review: { text: 'Do weryfikacji', color: 'yellow' },
        approved: { text: 'Zatwierdzona', color: 'green' },
        scheduled: { text: 'Zaplanowana', color: 'indigo' },
        published: { text: 'Opublikowana', color: 'purple' },
        paused: { text: 'Wstrzymana', color: 'red' },
    };
    const { text, color } = statusMap[status] || statusMap.draft;

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${color}-500/10 text-${color}-300`}>
            {text}
        </span>
    );
};

const CampaignsPage: React.FC<CampaignsPageProps> = ({ user, onNavigate, content }) => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCampaigns = async () => {
      setIsLoading(true);
      const data = await getCampaigns(user.company_id);
      setCampaigns(data);
      setIsLoading(false);
    };
    fetchCampaigns();
  }, [user.company_id]);

  return (
    <div>
        <div className="flex justify-between items-center mb-8">
             <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{content.title}</h1>
             <button 
                onClick={() => onNavigate('campaign-creator')}
                className="bg-brand-accent text-brand-dark font-semibold py-2 px-5 rounded-md hover:bg-brand-accent-400 transition-colors">
                {content.new_campaign}
             </button>
        </div>

        <div className="bg-brand-light-dark border border-gray-800 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-800">
                <thead className="bg-brand-dark/50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">{content.table_headers.name}</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">{content.table_headers.status}</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">{content.table_headers.channels}</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">{content.table_headers.timeline}</th>
                        <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">{content.table_headers.actions}</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                    {isLoading ? (
                        <tr><td colSpan={5} className="text-center py-10 text-gray-400">Loading...</td></tr>
                    ) : (
                        campaigns.map((campaign) => (
                            <tr key={campaign.id} className="hover:bg-brand-dark/30">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{campaign.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm"><StatusBadge status={campaign.status} /></td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 uppercase">{campaign.channels_formats.channels.join(', ')}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                    {new Date(campaign.timeline.start).toLocaleDateString()} - {new Date(campaign.timeline.end).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <a href="#" className="text-brand-accent hover:text-brand-accent-300">{content.view_button}</a>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default CampaignsPage;