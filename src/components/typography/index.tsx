'use client';

import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function PageTitle({ children, className = '' }: TypographyProps) {
  return (
    <h1 className={`page-title ${className}`}>
      {children}
    </h1>
  );
}

export function PageSubtitle({ children, className = '' }: TypographyProps) {
  return (
    <h2 className={`page-subtitle ${className}`}>
      {children}
    </h2>
  );
}

export function IntroText({ children, className = '' }: TypographyProps) {
  return (
    <p className={`intro-text ${className}`}>
      {children}
    </p>
  );
}

export function BodyText({ children, className = '' }: TypographyProps) {
  return (
    <div className={`body-text ${className}`}>
      {children}
    </div>
  );
} 