'use client';

import React, { useState } from 'react';

export function CopyEmailButton({
  label = 'COPY EMAIL',
  copiedLabel = '[ COPIED ✓ ]',
  className = '',
}: {
  label?: string;
  copiedLabel?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText('contoh@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopyEmail}
      className={className}
    >
      {copied ? copiedLabel : label}
    </button>
  );
}
