import React, { useState } from 'react';
import { User, Brand } from '../types';

interface BrandSettingsPageProps {
  user: User;
  content: {
    title: string;
    description: string;
    save_button: string;
    form_sections: {
      basic: string;
      visuals: string;
      ideology: string;
      legal: string;
    };
    fields: {
      name: { label: string; placeholder: string };
      industry: { label: string; placeholder: string };
      tagline: { label: string; placeholder: string };
      logo_light: { label: string };
      logo_dark: { label: string };
      primary_color: { label: string };
      secondary_color: { label: string };
      accents: { label: string; placeholder: string };
      heading_font: { label: string; placeholder: string };
      body_font: { label: string; placeholder: string };
      mission: { label: string; placeholder: string };
      vision: { label: string; placeholder: string };
      values: { label: string; placeholder: string };
      personality: { label: string; placeholder: string };
      target_audience: { label: string; placeholder: string };
      ai_allowed: { label: string; description: string };
      c2pa: { label: string; enforced: string; optional: string };
    };
  }
}

const initialBrandState: Partial<Brand> = {
    name: '',
    industry: [],
    tagline: '',
    colors: { primary: '#00f2c3', secondary: '#6366f1', accents: [] },
    typography: { heading: 'Sora', body: 'Sora' },
    ideology: {
        mission: '',
        vision: '',
        values: [],
        personality: '',
        target_audience: '',
    },
    legal: { ai_processing_allowed: true, c2pa: 'enforced' }
};

const FormSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <fieldset className="border-t border-gray-800 pt-6">
    <legend className="text-lg font-semibold text-white mb-4">{title}</legend>
    <div className="space-y-6">{children}</div>
  </fieldset>
);

const InputField: React.FC<{ id: string; name?: string; label: string; placeholder: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; type?: string; }> = ({ id, name, label, placeholder, value, onChange, type = "text" }) => (
    <div>
        <label htmlFor={id} className="text-sm font-medium text-gray-300 block mb-2">{label}</label>
        <input id={id} name={name || id} type={type} value={value} onChange={onChange} className="block w-full shadow-sm py-2 px-3 placeholder-gray-500 bg-brand-dark border border-gray-700 rounded-md focus:ring-brand-accent focus:border-brand-accent transition-colors" placeholder={placeholder} />
    </div>
);

const TextAreaField: React.FC<{ id: string; name?:string; label: string; placeholder: string; value: string | string[]; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; }> = ({ id, name, label, placeholder, value, onChange }) => (
    <div>
        <label htmlFor={id} className="text-sm font-medium text-gray-300 block mb-2">{label}</label>
        <textarea id={id} name={name || id} value={Array.isArray(value) ? value.join('\n') : value} onChange={onChange} rows={4} className="block w-full shadow-sm py-2 px-3 placeholder-gray-500 bg-brand-dark border border-gray-700 rounded-md focus:ring-brand-accent focus:border-brand-accent transition-colors" placeholder={placeholder} />
    </div>
);


const BrandSettingsPage: React.FC<BrandSettingsPageProps> = ({ user, content }) => {
    const [brandData, setBrandData] = useState(initialBrandState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const keys = name.split('.');
        
        setBrandData(prev => {
            const newState = JSON.parse(JSON.stringify(prev)); // Deep copy
            let current: any = newState;
            for (let i = 0; i < keys.length - 1; i++) {
                current = current[keys[i]];
            }

            if (keys[keys.length-1] === 'values') {
                 current[keys[keys.length - 1]] = value.split('\n');
            } else {
                current[keys[keys.length - 1]] = value;
            }
            return newState;
        });
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        const keys = name.split('.');
         setBrandData(prev => {
            const newState = JSON.parse(JSON.stringify(prev)); // Deep copy
            let current: any = newState;
            for (let i = 0; i < keys.length - 1; i++) {
                current = current[keys[i]];
            }
            current[keys[keys.length - 1]] = checked;
            return newState;
        });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Saving Brand Data:", brandData);
        alert("Zmiany zapisane! (Sprawdź konsolę deweloperską)");
    };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{content.title}</h1>
        <p className="mt-2 text-lg text-gray-300 max-w-2xl">{content.description}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="bg-brand-light-dark border border-gray-800 rounded-lg p-8 max-w-4xl">
        <div className="space-y-12">
            
            <FormSection title={content.form_sections.basic}>
                <InputField id="name" label={content.fields.name.label} placeholder={content.fields.name.placeholder} value={brandData.name || ''} onChange={handleChange} />
                <InputField id="industry" label={content.fields.industry.label} placeholder={content.fields.industry.placeholder} value={brandData.industry?.join(', ') || ''} onChange={(e) => setBrandData(prev => ({...prev, industry: e.target.value.split(',').map(s => s.trim())}))} />
                <InputField id="tagline" label={content.fields.tagline.label} placeholder={content.fields.tagline.placeholder} value={brandData.tagline || ''} onChange={handleChange} />
            </FormSection>

            <FormSection title={content.form_sections.visuals}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="text-sm font-medium text-gray-300 block mb-2">{content.fields.logo_light.label}</label>
                        <input type="file" className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-accent/10 file:text-brand-accent hover:file:bg-brand-accent/20"/>
                    </div>
                     <div>
                        <label className="text-sm font-medium text-gray-300 block mb-2">{content.fields.logo_dark.label}</label>
                        <input type="file" className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-accent/10 file:text-brand-accent hover:file:bg-brand-accent/20"/>
                    </div>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label htmlFor="colors.primary" className="text-sm font-medium text-gray-300 block mb-2">{content.fields.primary_color.label}</label>
                        <input id="colors.primary" name="colors.primary" type="color" value={brandData.colors?.primary || '#000000'} onChange={handleChange} className="w-full h-10 p-1 bg-brand-dark border border-gray-700 rounded-md cursor-pointer" />
                    </div>
                    <div>
                        <label htmlFor="colors.secondary" className="text-sm font-medium text-gray-300 block mb-2">{content.fields.secondary_color.label}</label>
                        <input id="colors.secondary" name="colors.secondary" type="color" value={brandData.colors?.secondary || '#000000'} onChange={handleChange} className="w-full h-10 p-1 bg-brand-dark border border-gray-700 rounded-md cursor-pointer" />
                    </div>
                    <InputField id="colors.accents" label={content.fields.accents.label} placeholder={content.fields.accents.placeholder} value={brandData.colors?.accents?.join(', ') || ''} onChange={(e) => setBrandData(prev => ({...prev, colors: {...prev.colors!, accents: e.target.value.split(',').map(s => s.trim())}}))} />
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField id="typography.heading" name="typography.heading" label={content.fields.heading_font.label} placeholder={content.fields.heading_font.placeholder} value={brandData.typography?.heading || ''} onChange={handleChange} />
                    <InputField id="typography.body" name="typography.body" label={content.fields.body_font.label} placeholder={content.fields.body_font.placeholder} value={brandData.typography?.body || ''} onChange={handleChange} />
                 </div>
            </FormSection>

            <FormSection title={content.form_sections.ideology}>
                <TextAreaField id="ideology.mission" name="ideology.mission" label={content.fields.mission.label} placeholder={content.fields.mission.placeholder} value={brandData.ideology?.mission || ''} onChange={handleChange} />
                <TextAreaField id="ideology.vision" name="ideology.vision" label={content.fields.vision.label} placeholder={content.fields.vision.placeholder} value={brandData.ideology?.vision || ''} onChange={handleChange} />
                <TextAreaField id="ideology.values" name="ideology.values" label={content.fields.values.label} placeholder={content.fields.values.placeholder} value={brandData.ideology?.values || []} onChange={handleChange} />
                <InputField id="ideology.personality" name="ideology.personality" label={content.fields.personality.label} placeholder={content.fields.personality.placeholder} value={brandData.ideology?.personality || ''} onChange={handleChange} />
                <TextAreaField id="ideology.target_audience" name="ideology.target_audience" label={content.fields.target_audience.label} placeholder={content.fields.target_audience.placeholder} value={brandData.ideology?.target_audience || ''} onChange={handleChange} />
            </FormSection>
            
            <FormSection title={content.form_sections.legal}>
                 <div>
                    <label className="text-sm font-medium text-gray-300 block mb-2">{content.fields.ai_allowed.label}</label>
                    <div className="flex items-center">
                        <input id="legal.ai_processing_allowed" name="legal.ai_processing_allowed" type="checkbox" checked={brandData.legal?.ai_processing_allowed} onChange={handleCheckboxChange} className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-brand-accent focus:ring-brand-accent"/>
                        <label htmlFor="legal.ai_processing_allowed" className="ml-2 block text-sm text-gray-400">{content.fields.ai_allowed.description}</label>
                    </div>
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-300 block mb-2">{content.fields.c2pa.label}</label>
                    <div className="flex gap-x-6">
                        <div className="flex items-center">
                            <input id="c2pa-enforced" name="legal.c2pa" type="radio" value="enforced" checked={brandData.legal?.c2pa === 'enforced'} onChange={handleChange} className="h-4 w-4 border-gray-600 bg-gray-700 text-brand-accent focus:ring-brand-accent"/>
                            <label htmlFor="c2pa-enforced" className="ml-2 block text-sm font-medium text-gray-200">{content.fields.c2pa.enforced}</label>
                        </div>
                        <div className="flex items-center">
                            <input id="c2pa-optional" name="legal.c2pa" type="radio" value="optional" checked={brandData.legal?.c2pa === 'optional'} onChange={handleChange} className="h-4 w-4 border-gray-600 bg-gray-700 text-brand-accent focus:ring-brand-accent"/>
                            <label htmlFor="c2pa-optional" className="ml-2 block text-sm font-medium text-gray-200">{content.fields.c2pa.optional}</label>
                        </div>
                    </div>
                </div>
            </FormSection>

            <div className="pt-4 flex justify-end">
                 <button type="submit" className="bg-brand-accent text-brand-dark font-semibold py-2 px-5 rounded-md hover:bg-brand-accent-400 transition-colors">
                    {content.save_button}
                 </button>
            </div>
        </div>
      </form>
    </div>
  );
};

export default BrandSettingsPage;