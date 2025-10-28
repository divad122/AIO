import React from 'react';

interface CampaignProgressBarProps {
  currentStep: number;
  steps: string[];
}

const CampaignProgressBar: React.FC<CampaignProgressBarProps> = ({ currentStep, steps }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = currentStep > stepNumber;
          const isActive = currentStep === stepNumber;

          return (
            <React.Fragment key={step}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300
                    ${isCompleted ? 'bg-brand-accent text-brand-dark' : ''}
                    ${isActive ? 'bg-brand-accent/10 border-2 border-brand-accent text-brand-accent' : ''}
                    ${!isCompleted && !isActive ? 'bg-gray-700 text-gray-400' : ''}
                  `}
                >
                  {isCompleted ? '✓' : stepNumber}
                </div>
                <p className={`mt-2 text-xs text-center font-semibold ${isActive || isCompleted ? 'text-white' : 'text-gray-400'}`}>
                  {step}
                </p>
              </div>
              {stepNumber < steps.length && (
                <div className={`flex-1 h-0.5 mx-2 transition-colors duration-300 ${isCompleted ? 'bg-brand-accent' : 'bg-gray-700'}`} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default CampaignProgressBar;