'use client';

import React from 'react';

interface QuoteProps {
  text: string;
  author?: string;
  className?: string;
}

export default function Quote({ text, author, className = '' }: QuoteProps) {
  return (
    <div className={className}>
      <div className="quote-container mx-auto max-w-4xl">
        <h2 className="quote-text text-center">
          {text}
        </h2>
      </div>
      {author && (
        <p className="quote-author text-center mx-auto max-w-4xl">  
          {author}
        </p>
      )}
    </div>
  );
} 