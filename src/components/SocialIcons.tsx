'use client';

import React from 'react';
import Image from 'next/image';
import styles from './SocialIcons.module.css';

interface SocialIconsProps {
  className?: string;
}

const SocialIcons = ({ className }: SocialIconsProps) => {
  return (
    <div className={`${styles.socialIcons} ${className || ''}`}>
      <a 
        href="https://discord.com/invite/5wPwqcGnrn" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.icon} 
        aria-label="Discord"
      >
        <Image src="/icons/logo_Discord.svg" alt="Discord" width={24} height={24} />
      </a>
      <a 
        href="https://x.com/TAO_ValidatorX" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.icon} 
        aria-label="X (Twitter)"
      >
        <Image src="/icons/logo_X.svg" alt="X" width={24} height={24} />
      </a>
      <a 
        href="https://www.linkedin.com/company/neuralteq/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.icon} 
        aria-label="Linkedin"
      >
        <Image src="/icons/logo_Linkedin.svg" alt="Linkedin" width={24} height={24} />
      </a>
      <a 
        href="https://medium.com/@fund_80390" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.icon} 
        aria-label="Medium"
      >
        <Image src="/icons/logo_Medium.svg" alt="Medium" width={24} height={24} />
      </a>
    </div>
  );
};

export default SocialIcons; 