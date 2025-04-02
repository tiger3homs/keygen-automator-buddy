
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLinkIcon, CopyIcon } from 'lucide-react';
import StepIndicator from './StepIndicator';
import Step from './Step';
import CopyButton from './CopyButton';

const AutoKeyGen: React.FC = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  const [isLoading, setIsLoading] = useState(false);
  
  // State for each step
  const [tempEmail, setTempEmail] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [password] = useState('16701670@oO'); // Fixed password as per requirements
  
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      
      // Show toast for each step completion
      toast({
        title: `Step ${currentStep} completed!`,
        description: getStepCompletionMessage(currentStep),
        duration: 3000,
      });
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getStepCompletionMessage = (step: number) => {
    switch (step) {
      case 1:
        return "Temporary email acquired!";
      case 2:
        return "OpenRouter account created!";
      case 3:
        return "Email verification completed!";
      case 4:
        return "API key generated successfully!";
      default:
        return "Step completed!";
    }
  };
  
  const openExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  // Step 1: Get Temporary Email
  const handleGetTempEmail = () => {
    openExternalLink('https://temp-mail.io/en');
  };
  
  // Step 2: Create OpenRouter Account
  const handleCreateAccount = () => {
    openExternalLink('https://openrouter.ai/');
  };
  
  // Step 3: Verify Email
  const handleVerifyEmail = () => {
    openExternalLink('https://temp-mail.io/en');
  };
  
  // Step 4: Generate API Key
  const handleGenerateKey = () => {
    openExternalLink('https://openrouter.ai/settings/keys');
  };

  // Step 5: Display API Key Result
  const handleFinish = () => {
    toast({
      title: "Process completed!",
      description: "You've successfully generated your OpenRouter API key.",
      duration: 5000,
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
      
      {/* Step 1: Get Temporary Email */}
      <Step
        title="Get Temporary Email"
        description="First, we need to generate a temporary email address from temp-mail.io"
        step={1}
        currentStep={currentStep}
        onNext={nextStep}
        onPrevious={previousStep}
        canProceed={tempEmail.trim() !== ''}
      >
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-3">
            <Button 
              className="flex-1 bg-brand-600 hover:bg-brand-700"
              onClick={handleGetTempEmail}
            >
              <ExternalLinkIcon className="w-4 h-4 mr-2" />
              Open temp-mail.io
            </Button>
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">Copy the email address below:</label>
            <div className="flex gap-2">
              <Input
                value={tempEmail}
                onChange={(e) => setTempEmail(e.target.value)}
                placeholder="Paste temporary email here"
                className="flex-1"
              />
              {tempEmail && <CopyButton text={tempEmail} />}
            </div>
          </div>
        </div>
      </Step>
      
      {/* Step 2: Create OpenRouter Account */}
      <Step
        title="Create OpenRouter Account"
        description="Sign up for an OpenRouter account using the temporary email"
        step={2}
        currentStep={currentStep}
        onNext={nextStep}
        onPrevious={previousStep}
        canProceed={true}
      >
        <div className="space-y-4">
          <ol className="list-decimal pl-5 space-y-3">
            <li>Click the button below to open the OpenRouter website</li>
            <li>Click on the <span className="font-medium">"Sign In"</span> button</li>
            <li>In the login popup, click on <span className="font-medium">"Sign Up"</span></li>
            <li>Enter your temporary email: <span className="font-medium break-all">{tempEmail || 'your-temp-email'}</span></li>
            <li>Enter password: <span className="font-medium">{password}</span></li>
            <li>Click the <span className="font-medium">"Sign Up"</span> button</li>
          </ol>
          
          <div className="flex justify-center mt-4">
            <Button 
              className="bg-brand-600 hover:bg-brand-700"
              onClick={handleCreateAccount}
            >
              <ExternalLinkIcon className="w-4 h-4 mr-2" />
              Open OpenRouter.ai
            </Button>
          </div>
        </div>
      </Step>
      
      {/* Step 3: Verify Email */}
      <Step
        title="Verify Your Email"
        description="Check your temporary email inbox for the verification link"
        step={3}
        currentStep={currentStep}
        onNext={nextStep}
        onPrevious={previousStep}
        canProceed={true}
      >
        <div className="space-y-4">
          <ol className="list-decimal pl-5 space-y-3">
            <li>Click the button below to open your temporary mailbox</li>
            <li>Refresh the inbox and wait for an email from OpenRouter.ai</li>
            <li>Open the email and click on the <span className="font-medium">"Sign up to OpenRouter"</span> button</li>
          </ol>
          
          <div className="flex justify-center mt-4">
            <Button 
              className="bg-brand-600 hover:bg-brand-700"
              onClick={handleVerifyEmail}
            >
              <ExternalLinkIcon className="w-4 h-4 mr-2" />
              Open Temporary Mailbox
            </Button>
          </div>
        </div>
      </Step>
      
      {/* Step 4: Generate API Key */}
      <Step
        title="Generate API Key"
        description="Navigate to settings and create a new API key"
        step={4}
        currentStep={currentStep}
        onNext={nextStep}
        onPrevious={previousStep}
        canProceed={apiKey.trim() !== ''}
      >
        <div className="space-y-4">
          <ol className="list-decimal pl-5 space-y-3">
            <li>Click the button below to open OpenRouter settings</li>
            <li>Click on <span className="font-medium">"Create Key"</span></li>
            <li>Enter <span className="font-medium">"A"</span> in the name input field</li>
            <li>Click the <span className="font-medium">"Create"</span> button</li>
            <li>Copy the generated API Key and paste it below</li>
          </ol>
          
          <div className="flex justify-center mb-4">
            <Button 
              className="bg-brand-600 hover:bg-brand-700"
              onClick={handleGenerateKey}
            >
              <ExternalLinkIcon className="w-4 h-4 mr-2" />
              Open API Key Settings
            </Button>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Paste your API key:</label>
            <Input
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="sk-or-..."
              className="font-mono"
            />
          </div>
        </div>
      </Step>
      
      {/* Step 5: Result */}
      <Step
        title="Success! API Key Generated"
        description="Your OpenRouter API key is ready to use"
        step={5}
        currentStep={currentStep}
        onNext={handleFinish}
        onPrevious={previousStep}
        canProceed={true}
      >
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 border rounded-md">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Your OpenRouter API Key:</h3>
            <div className="relative">
              <div className="font-mono text-sm bg-white p-3 rounded border break-all">
                {apiKey || 'sk-or-xxxx-xxxx-xxxx-xxxx-xxxx'}
              </div>
              <div className="absolute top-2 right-2">
                <CopyButton text={apiKey} variant="ghost" className="h-8 px-2" />
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 text-blue-800 p-4 rounded-md">
            <h4 className="font-medium">What's next?</h4>
            <ul className="list-disc pl-5 mt-2 text-sm">
              <li>Store this API key securely; it grants full access to OpenRouter services</li>
              <li>Use this key for API requests to OpenRouter endpoints</li>
              <li>Check OpenRouter documentation for integration instructions</li>
            </ul>
          </div>
          
          <Tabs defaultValue="curl">
            <TabsList className="grid grid-cols-3 mb-2">
              <TabsTrigger value="curl">cURL</TabsTrigger>
              <TabsTrigger value="js">JavaScript</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
            </TabsList>
            <TabsContent value="curl" className="rounded-md bg-gray-900 text-gray-100 p-3 text-xs font-mono overflow-x-auto">
              {`curl https://openrouter.ai/api/v1/chat/completions \\
  -H "Authorization: Bearer ${apiKey || 'sk-or-your-api-key'}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-3.5-turbo",
    "messages": [{ "role": "user", "content": "Hello!" }]
  }'`}
              <div className="absolute top-2 right-2">
                <CopyButton 
                  text={`curl https://openrouter.ai/api/v1/chat/completions \\
  -H "Authorization: Bearer ${apiKey}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-3.5-turbo",
    "messages": [{ "role": "user", "content": "Hello!" }]
  }'`} 
                  variant="ghost" 
                  className="h-6 px-2 bg-gray-800 hover:bg-gray-700 text-gray-200"
                />
              </div>
            </TabsContent>
            <TabsContent value="js" className="rounded-md bg-gray-900 text-gray-100 p-3 text-xs font-mono overflow-x-auto">
              {`const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": \`Bearer ${apiKey || 'sk-or-your-api-key'}\`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello!" }]
  })
});
const data = await response.json();`}
              <div className="absolute top-2 right-2">
                <CopyButton 
                  text={`const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": \`Bearer ${apiKey}\`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello!" }]
  })
});
const data = await response.json();`} 
                  variant="ghost" 
                  className="h-6 px-2 bg-gray-800 hover:bg-gray-700 text-gray-200" 
                />
              </div>
            </TabsContent>
            <TabsContent value="python" className="rounded-md bg-gray-900 text-gray-100 p-3 text-xs font-mono overflow-x-auto">
              {`import requests
import json

response = requests.post(
    "https://openrouter.ai/api/v1/chat/completions",
    headers={
        "Authorization": f"Bearer ${apiKey || 'sk-or-your-api-key'}",
        "Content-Type": "application/json"
    },
    json={
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": "Hello!"}]
    }
)
result = response.json()`}
              <div className="absolute top-2 right-2">
                <CopyButton 
                  text={`import requests
import json

response = requests.post(
    "https://openrouter.ai/api/v1/chat/completions",
    headers={
        "Authorization": f"Bearer ${apiKey}",
        "Content-Type": "application/json"
    },
    json={
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": "Hello!"}]
    }
)
result = response.json()`} 
                  variant="ghost" 
                  className="h-6 px-2 bg-gray-800 hover:bg-gray-700 text-gray-200" 
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Step>
    </div>
  );
};

export default AutoKeyGen;
