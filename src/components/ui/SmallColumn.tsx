import React, { useEffect, useState } from 'react';
import Button from './Button';

interface SmallColumnProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  className?: string;
}

export default function SmallColumn({
  title,
  description,
  buttonText,
  buttonHref,
  className = ''
}: SmallColumnProps) {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDark(document.documentElement.classList.contains('dark'));
        }
      });
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);
  return (
    <div className={`bg-white dark:bg-[#061C2B] ${isDark ? 'shadow' : ''} p-8 md:p-12 ${className}`} style={{ borderRadius: '20px' }}>
      <h3 className="text-[24px] md:text-[28px] font-normal leading-[120%] tracking-[-0.02em] text-[var(--foreground)] mb-6">
        {title}
      </h3>
      <p className="text-[17px] text-[#021019] dark:text-[var(--foreground)] mb-8">
        {description}
      </p>
      <div className="flex justify-center md:justify-start">
        <Button href={buttonHref}>{buttonText}</Button>
      </div>
    </div>
  );
} 