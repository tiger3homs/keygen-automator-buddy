
import React from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface StepProps {
  title: string;
  description: string;
  step: number;
  currentStep: number;
  onNext: () => void;
  onPrevious: () => void;
  canProceed?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
}

const Step: React.FC<StepProps> = ({
  title,
  description,
  step,
  currentStep,
  onNext,
  onPrevious,
  canProceed = true,
  isLoading = false,
  children,
}) => {
  if (step !== currentStep) return null;

  return (
    <div 
      className={cn(
        "transition-all duration-300",
        step === currentStep ? "animate-slide-in-right" : "animate-slide-out-left"
      )}
    >
      <Card className="bg-gradient-card shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="min-h-[100px]">
            {children}
          </div>
          
          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={onPrevious}
              disabled={step === 1}
            >
              Previous
            </Button>
            <Button
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
              onClick={onNext}
              disabled={!canProceed || isLoading}
            >
              {isLoading ? "Processing..." : step === 5 ? "Finish" : "Next"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Step;
