
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 mt-10 border-t">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} AutoKeyGen - Automation tool for OpenRouter API keys
            </p>
          </div>
          
          <div className="flex space-x-6">
            <p className="text-xs text-gray-500">
              This tool streamlines the process of creating OpenRouter accounts and generating API keys.
              Use responsibly and in accordance with OpenRouter's terms of service.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
