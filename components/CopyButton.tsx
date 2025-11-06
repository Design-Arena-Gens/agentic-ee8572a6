'use client';

import { useState } from 'react';

type CopyButtonProps = {
  text: string;
  label?: string;
};

export function CopyButton({ text, label = 'Copy' }: CopyButtonProps) {
  const [status, setStatus] = useState<'idle' | 'copied'>('idle');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus('copied');
      setTimeout(() => setStatus('idle'), 2000);
    } catch (error) {
      console.error('Copy failed', error);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="rounded-md border border-slate-500/50 bg-slate-900/80 px-3 py-1.5 text-sm font-medium text-slate-100 transition hover:border-slate-300/60 hover:bg-slate-800"
    >
      {status === 'copied' ? 'Copied!' : label}
    </button>
  );
}
