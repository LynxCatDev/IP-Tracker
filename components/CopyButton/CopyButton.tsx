'use client';

import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import './CopyButton.scss';

interface Props {
  textToCopy: string;
  variant?: 'primary' | 'secondary';
}

export const CopyButton = ({ textToCopy, variant = 'primary' }: Props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      toast.success('IP address copied to clipboard', { autoClose: 2000 });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy IP address', { autoClose: 4000 });
    }
  };

  return (
    <button
      className={`copy-button copy-button--${variant}`}
      onClick={handleCopy}
      title="Copy to clipboard"
    >
      {copied ? <Check /> : <Copy />}
      <span>Copy IP</span>
    </button>
  );
};
