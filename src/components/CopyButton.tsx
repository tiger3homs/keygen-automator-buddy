
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CheckIcon, CopyIcon } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

interface CopyButtonProps {
  text: string;
  className?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
}

const CopyButton: React.FC<CopyButtonProps> = ({ text, className, variant = "outline" }) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast({
        title: "Copied to clipboard!",
        description: "The text has been copied to your clipboard.",
        duration: 3000,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again or copy manually.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <Button
      variant={variant}
      size="sm"
      className={className}
      onClick={copyToClipboard}
    >
      {copied ? (
        <>
          <CheckIcon className="w-4 h-4 mr-1" /> Copied
        </>
      ) : (
        <>
          <CopyIcon className="w-4 h-4 mr-1" /> Copy
        </>
      )}
    </Button>
  );
};

export default CopyButton;
