
import React from 'react';
import { KeyRound, ExternalLink } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-6">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center mb-3">
            <div className="rounded-full bg-gradient-primary p-3 mr-3">
              <KeyRound size={28} className="text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gradient">AutoKeyGen</h1>
          </div>
          
          <p className="text-lg text-gray-600 max-w-2xl">
            Streamline your OpenRouter API key generation process with this step-by-step automation tool.
          </p>
          
          <div className="mt-4 flex space-x-4">
            <a 
              href="https://openrouter.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm text-brand-600 hover:text-brand-800 transition-colors"
            >
              OpenRouter
              <ExternalLink size={14} className="ml-1" />
            </a>
            <a 
              href="https://temp-mail.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm text-brand-600 hover:text-brand-800 transition-colors"
            >
              Temp Mail
              <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
