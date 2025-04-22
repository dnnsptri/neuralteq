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
      <div className="quote-container">
        <span className="quote-mark">&ldquo;</span>
        <h2 className="quote-text">
          {text}
        </h2>
        <span className="quote-mark">&rdquo;</span>
      </div>
      {author && (
        <p className="quote-author">
          {author}
        </p>
      )}
    </div>
  );
} 