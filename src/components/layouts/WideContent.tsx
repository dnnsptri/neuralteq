'use client';

import React from 'react';

interface WideContentProps {
  children: React.ReactNode;
  className?: string;
}

export default function WideContent({ children, className = '' }: WideContentProps) {
  return (
    <div className={`mx-4 md:mx-9 max-w-[1520px] w-full mx-auto ${className}`}>
      {children}
    </div>
  );
} 