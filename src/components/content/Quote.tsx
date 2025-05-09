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
      <div className="quote-container text-center mx-auto max-w-4xl">
        <span className="quote-mark">&ldquo;</span>
        <h2 className="quote-text text-center">
          {text}
        </h2>
        <span className="quote-mark">&rdquo;</span>
      </div>
      {author && (
        <p className="quote-author text-center mx-auto max-w-4xl">
          {author}
        </p>
      )}
    </div>
  );
} 