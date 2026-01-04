'use client';

import { Check } from 'lucide-react';

interface StepProgressProps {
  currentStep: number;
  steps: string[];
}

export default function StepProgress({ currentStep, steps }: StepProgressProps) {
  return (
    <div className="w-full py-8">
      <div className="flex items-center justify-between max-w-3xl mx-auto px-4">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = currentStep === stepNumber;
          const isCompleted = currentStep > stepNumber;

          return (
            <div key={stepNumber} className="flex items-center flex-1">
              {/* Step Circle */}
              <div className="flex flex-col items-center">
                <div
                  className={`
                    flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300
                    ${isCompleted ? 'bg-primary border-primary' : ''}
                    ${isActive ? 'border-primary bg-primary/10' : ''}
                    ${!isActive && !isCompleted ? 'border-gray-300 bg-background' : ''}
                  `}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : (
                    <span
                      className={`
                        text-sm font-semibold
                        ${isActive ? 'text-primary' : 'text-gray-400'}
                      `}
                    >
                      {stepNumber}
                    </span>
                  )}
                </div>
                <span
                  className={`
                    mt-2 text-xs md:text-sm font-medium text-center
                    ${isActive ? 'text-foreground' : 'text-muted-foreground'}
                  `}
                >
                  {step}
                </span>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 mx-2 md:mx-4">
                  <div
                    className={`
                      h-full transition-all duration-300
                      ${isCompleted ? 'bg-primary' : 'bg-gray-300'}
                    `}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}