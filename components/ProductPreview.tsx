import React, { useState } from 'react';

interface ProductPreviewProps {
    content: {
        title: string;
        description: string;
        tabs: { name: string; image: string; alt: string; }[];
    }
}

const ProductPreview: React.FC<ProductPreviewProps> = ({ content }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="product-preview" className="py-20 sm:py-28 bg-brand-dark/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{content.title}</h2>
                    <p className="mt-4 text-lg text-gray-300">
                        {content.description}
                    </p>
                </div>

                <div className="mt-16 max-w-6xl mx-auto">
                    <div className="flex justify-center border-b border-gray-700 mb-8" role="tablist" aria-label="Product Screenshots">
                        {content.tabs.map((tab, index) => (
                            <button
                                key={index}
                                id={`tab-${index}`}
                                role="tab"
                                aria-selected={activeTab === index}
                                aria-controls={`tabpanel-${index}`}
                                onClick={() => setActiveTab(index)}
                                className={`px-2 sm:px-4 py-3 text-sm sm:text-base font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-t-md ${
                                    activeTab === index 
                                        ? 'text-brand-accent border-b-2 border-brand-accent' 
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    <div className="relative aspect-video w-full">
                        {content.tabs.map((tab, index) => (
                             <div
                                key={index}
                                id={`tabpanel-${index}`}
                                role="tabpanel"
                                aria-labelledby={`tab-${index}`}
                                className={`absolute inset-0 bg-brand-light-dark border border-gray-800 rounded-2xl shadow-2xl shadow-brand-dark/50 overflow-hidden transition-opacity duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${
                                    activeTab === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                }`}
                              >
                                <img
                                    src={tab.image}
                                    alt={tab.alt}
                                    className="w-full h-full object-contain"
                                />
                             </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductPreview;