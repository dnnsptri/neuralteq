'use client';

import React from 'react';

interface CenteredContentProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

export default function CenteredContent({ children, fullWidth = false }: CenteredContentProps) {
  return (
    <div className="container mx-auto px-9">
      <div className={fullWidth ? 'w-full' : 'max-w-5xl mx-auto'}>
        {children}
      </div>
    </div>
  );
} 