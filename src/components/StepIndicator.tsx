
import React from 'react';
import { cn } from "@/lib/utils";
import { CheckIcon } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ 
  currentStep, 
  totalSteps 
}) => {
  return (
    <div className="flex items-center w-full justify-between mb-8">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center">
            <div 
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                index < currentStep 
                  ? "bg-brand-600 text-white" 
                  : index === currentStep 
                    ? "bg-accent2-500 ring-4 ring-accent2-200 text-white animate-pulse-glow" 
                    : "bg-gray-200 text-gray-400"
              )}
            >
              {index < currentStep ? (
                <CheckIcon className="w-5 h-5" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <span 
              className={cn(
                "text-xs mt-1",
                index === currentStep ? "font-medium text-accent2-700" : "text-gray-500"
              )}
            >
              Step {index + 1}
            </span>
          </div>
          
          {index < totalSteps - 1 && (
            <div 
              className={cn(
                "h-0.5 flex-1 mx-2",
                index < currentStep 
                  ? "bg-brand-600" 
                  : index === currentStep 
                    ? "bg-gradient-to-r from-brand-600 to-gray-200" 
                    : "bg-gray-200"
              )}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepIndicator;
