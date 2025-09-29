'use client';

import { useState } from 'react';

interface CopyButtonProps {
  textToCopy: string;
  children: React.ReactNode;
  className?: string;
}

export default function CopyButton({
  textToCopy,
  children,
  className = '',
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 ${className}`}
      title="Click to copy"
    >
      {children}
      {copied ? (
        <span className="text-green-600 dark:text-green-400 text-sm">
          ✓ Copied!
        </span>
      ) : (
        <span className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-sm">
          📋
        </span>
      )}
    </button>
  );
}
