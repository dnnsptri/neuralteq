'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './SocialIcons.module.css';

interface SocialIconsProps {
  className?: string;
  isFooter?: boolean;
}

const SocialIcons = ({ className, isFooter }: SocialIconsProps) => {
  const [isDark, setIsDark] = useState(true);
  const containerClass = isFooter ? styles.footerIcons : styles.socialIcons;
  
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
    <div className={`${containerClass} ${className || ''}`}>
      <a 
        href="https://discord.com/invite/5wPwqcGnrn" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.icon} 
        aria-label="Discord"
      >
        <Image 
          src={isDark ? "/icons/logo_Discord.svg" : "/icons/logo_Discord_light.svg"} 
          alt="Discord" 
          width={24} 
          height={24} 
        />
      </a>
      <a 
        href="https://x.com/neuralteq/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.icon} 
        aria-label="X (Twitter)"
      >
        <Image 
          src={isDark ? "/icons/logo_X.svg" : "/icons/logo_X_light.svg"} 
          alt="X" 
          width={24} 
          height={24} 
        />
      </a>
      {/*
      <a 
        href="https://www.linkedin.com/company/neuralteq/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.icon} 
        aria-label="Linkedin"
      >
        <Image src="/icons/logo_Linkedin.svg" alt="Linkedin" width={24} height={24} />
      </a>
      */}
    </div>
  );
};

export default SocialIcons; 