'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Footer from '@/components/Footer';
import styles from './Typewriter.module.css';

const text = [
  "A new era, a new collective",
  "United by the same purpose:",
  "Build Open Source Decentralized AI,",
  "with humanities best interest at its core.",
  " ",
  "Our commitment:",
  "• The highest APRs",
  "• Cutting edge models",
  "• The best research",
  "• And real-world adoption for Bittensor",
  "subnets.",
  " ",
  "Stake with us and be part of the",
  "movement_"
];

const TypewriterAnimation = () => {
  const [mounted, setMounted] = useState(false);
  const [displayText, setDisplayText] = useState<string[]>(Array(text.length).fill(''));
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const totalChars = text.reduce((sum, line) => sum + line.length, 0);
    const typingDelay = Math.max(7000 / totalChars, 30);

    const typingInterval = setInterval(() => {
      if (currentLine < text.length) {
        if (currentChar < text[currentLine].length) {
          setDisplayText(prev => {
            const newText = [...prev];
            newText[currentLine] = text[currentLine].substring(0, currentChar + 1);
            return newText;
          });
          setCurrentChar(prev => prev + 1);
        } else {
          setCurrentLine(prev => prev + 1);
          setCurrentChar(0);
        }
      } else {
        setIsComplete(true);
        clearInterval(typingInterval);
      }
    }, typingDelay);

    return () => clearInterval(typingInterval);
  }, [currentLine, currentChar, mounted]);

  useEffect(() => {
    if (!mounted) return;

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/visuals/logo.png"
            alt="Neuralteq Logo"
            width={140}
            height={72}
            priority
          />
        </div>
        
        <div className={styles.content}>
          <div className={styles.textContainer}>
            {displayText.map((line, index) => (
              <div 
                key={index} 
                className={styles.line}
              >
                {line}
                {index === currentLine && showCursor && <span className={styles.cursor}>_</span>}
              </div>
            ))}
          </div>
          
          {isComplete && (
            <div className={styles.callToAction}>
              <p className={styles.callToActionText}>Let's get down to business and jump straight into:</p>
              <div className={styles.buttons}>
                <a 
                  href="https://staking.tao-validator.com/subnets?_gl=1*1p3hjy1*_ga*MjAzNTIxNDEwMS.xNzM0MDAwMDM0*_ga_G55BM4VS8R*MTc0NTM1Mzc4Mi.xNy4wLjE3NDUzNTM3ODIuMC4wLjA." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${styles.button} ${styles.primaryButton}`}
                >
                  Stake Now
                </a>
                <a href="/validator" className={styles.button}>Validator</a>
                <a href="/why-us" className={styles.textLink}>Why us</a>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={styles.footerWrapper}>
        <Footer hideMesh={true} />
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(TypewriterAnimation), {
  ssr: false
}); 