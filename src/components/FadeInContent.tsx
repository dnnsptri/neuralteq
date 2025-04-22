'use client';

import React, { useEffect, useRef } from 'react';

interface FadeInContentProps {
  children: React.ReactNode;
  className?: string;
}

export default function FadeInContent({ children, className = '' }: FadeInContentProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className={`opacity-0 translate-y-5 transition-all duration-700 ${className}`}
    >
      {children}
    </div>
  );
} 