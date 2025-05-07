'use client';

import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Footer from '@/components/Footer';
import SocialIcons from '@/components/SocialIcons';
import CenteredContent from '@/components/layouts/CenteredContent';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './Typewriter.module.css';

const text = [
  "A new era, a new collective",
  "United by the same purpose:",
  "Build Open Source Decentralized AI,",
  "with humanities best interest at its core",
  " ",
  "Our commitment:",
  "• High APY",
  "• Quality research",
  "• Cutting edge models",
  "• And real-world adoption for Bittensor subnets",
  " ",
  "Stake with us and be part of the movement"
];

const TypewriterAnimation = () => {
  const [mounted, setMounted] = useState(false);
  const [displayText, setDisplayText] = useState<string[]>(Array(text.length).fill(''));
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const router = useRouter();
  const activeLineRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (activeLineRef.current) {
      activeLineRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [currentLine, isComplete]);

  useEffect(() => {
    if (isComplete) {
      const timeout = setTimeout(() => {
        router.push('/');
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [isComplete, router]);

  if (!mounted) return null;

  return (
    <div className={styles.wrapper} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SocialIcons />
      <div
        className={styles.container}
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: 0,
          ...(isComplete
            ? { maxHeight: 'calc(100vh - 120px)', overflow: 'auto' }
            : {}),
        }}
      >
        <div className={styles.logo}>
          <Image
            src="/visuals/logo_neuralteq.png"
            alt="Neuralteq Logo"
            width={140}
            height={72}
            priority
          />
        </div>
        <CenteredContent>
          <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className={styles.textContainer}>
              {displayText.map((line, index) => {
                return (
              <div 
                key={index} 
                className={styles.line}
                style={{ opacity: 1 }}
                ref={index === currentLine || (isComplete && index === text.length - 1) ? activeLineRef : undefined}
              >
                {line}
                    {((index === currentLine && !isComplete) || (isComplete && index === text.length - 1)) && showCursor && (
                      <span className={styles.cursor}>|</span>
                    )}
              </div>
                );
              })}
          </div>
          {isComplete && (
            <div className={`${styles.callToAction} ${styles.fadeIn}`}>
              <p className={styles.callToActionText}>Let's get down to business and jump straight into:</p>
              <div className={styles.buttons}>
                <a 
                  href="https://staking.tao-validator.com/subnets?_gl=1*1p3hjy1*_ga*MjAzNTIxNDEwMS.xNzM0MDAwMDM0*_ga_G55BM4VS8R*MTc0NTM1Mzc4Mi.xNy4wLjE3NDUzNTM3ODIuMC4wLjA." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${styles.button} ${styles.primaryButton}`}
                >
                    Staking dashboard
                </a>
                  <Link href="/" className={styles.button}>Homepage</Link>
              </div>
            </div>
          )}
        </div>
        </CenteredContent>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(TypewriterAnimation), {
  ssr: false
}); 