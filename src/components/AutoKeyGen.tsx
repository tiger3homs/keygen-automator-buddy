
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Loader2, KeyRound } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import CopyButton from './CopyButton';

const AutoKeyGen: React.FC = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [error, setError] = useState('');

  const handleGenerateKey = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      // In a real implementation, this would be a backend API call that handles the process
      // For now, we're simulating success after a short delay
      setTimeout(() => {
        // This is a fake API key for demonstration purposes
        const fakeApiKey = 'sk-or-' + Array(30).fill(0).map(() => 
          Math.random().toString(36).charAt(2)).join('');
        
        setApiKey(fakeApiKey);
        setIsLoading(false);
        
        toast({
          title: "API Key Generated!",
          description: "Your OpenRouter API key has been successfully generated.",
          duration: 5000,
        });
      }, 3000);
      
    } catch (err) {
      setError('Failed to generate API key. Please try again.');
      setIsLoading(false);
      
      toast({
        title: "Error",
        description: "Failed to generate API key. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-md">
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-bold">OpenRouter API Key Generator</CardTitle>
        <CardDescription>Generate an API key for OpenRouter with one click</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {!apiKey ? (
          <div className="text-center">
            <Button 
              onClick={handleGenerateKey}
              disabled={isLoading}
              className="bg-brand-600 hover:bg-brand-700 w-full py-6 text-lg"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Generating API Key...
                </>
              ) : (
                <>
                  <KeyRound className="mr-2 h-5 w-5" />
                  Generate API Key
                </>
              )}
            </Button>
            
            {error && (
              <p className="text-red-500 mt-2 text-sm">{error}</p>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 border rounded-md">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Your OpenRouter API Key:</h3>
              <div className="relative">
                <div className="font-mono text-sm bg-white p-3 rounded border break-all">
                  {apiKey}
                </div>
                <div className="absolute top-2 right-2">
                  <CopyButton text={apiKey} variant="ghost" className="h-8 px-2" />
                </div>
              </div>
            </div>
            
            <Button 
              onClick={() => {
                setApiKey('');
                setIsLoading(false);
                setError('');
              }}
              variant="outline"
              className="w-full"
            >
              Generate New Key
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AutoKeyGen;
