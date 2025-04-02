
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AutoKeyGen from '@/components/AutoKeyGen';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <main className="flex-1 container max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-3">
            <AutoKeyGen />
          </div>
          
          <div className="md:col-span-1 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3">What is AutoKeyGen?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  AutoKeyGen automates the process of generating API keys from OpenRouter.ai. It guides you through:
                </p>
                <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1.5">
                  <li>Creating a temporary email</li>
                  <li>Registering an OpenRouter account</li>
                  <li>Verifying your email address</li>
                  <li>Generating an API key</li>
                  <li>Securely storing your key</li>
                </ol>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3">Why use OpenRouter?</h3>
                <p className="text-sm text-gray-600 mb-2">
                  OpenRouter provides unified access to leading AI models through a single API endpoint, including:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5">
                  <li>OpenAI (GPT-3.5, GPT-4)</li>
                  <li>Anthropic (Claude)</li>
                  <li>Google (PaLM, Gemini)</li>
                  <li>Meta (Llama)</li>
                  <li>And many others</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3">Security Notice</h3>
                <p className="text-sm text-gray-600">
                  This tool helps you create API keys but won't store your credentials. Always treat API keys like passwords and never share them publicly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
