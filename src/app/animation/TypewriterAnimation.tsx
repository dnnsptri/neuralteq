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
import LogoMesh from '@/components/LogoMesh';

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
  const hasStarted = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || hasStarted.current) return;
    hasStarted.current = true;

    const totalChars = text.reduce((sum, line) => sum + line.length, 0);
    const typingDelay = Math.max(7000 / totalChars, 30);
    let timeout: NodeJS.Timeout;

    function type(line: number, char: number, display: string[]) {
      if (line < text.length) {
        if (char < text[line].length) {
          const newText = [...display];
          newText[line] = text[line].substring(0, char + 1);
          setDisplayText(newText);
          setCurrentLine(line);
          setCurrentChar(char + 1);
          timeout = setTimeout(() => type(line, char + 1, newText), typingDelay);
        } else {
          setCurrentLine(line + 1);
          setCurrentChar(0);
          timeout = setTimeout(() => type(line + 1, 0, display), typingDelay);
        }
      } else {
        setIsComplete(true);
      }
    }

    type(0, 0, Array(text.length).fill(''));

    return () => clearTimeout(timeout);
  }, [mounted]);

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
      }, 8000);
      return () => clearTimeout(timeout);
    }
  }, [isComplete, router]);

  if (!mounted) return null;

  return (
    <div className={styles.wrapper} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SocialIcons />
      <Link 
        href="/" 
        onClick={() => localStorage.setItem('skipAnimationOnce', 'true')}
        className="fixed right-8 bottom-8 text-[#ECFBFA] text-[14px] opacity-80 hover:opacity-100 transition-opacity z-50 cursor-pointer"
        style={{ pointerEvents: 'auto' }}
      >
        Skip
      </Link>
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
        <CenteredContent>
          <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="mb-8 w-[140px] h-[72px] pl-4 md:pl-0 md:fixed md:left-8 md:top-8 md:z-10">
              <LogoMesh alwaysShowMesh />
            </div>
            <div className={styles.textContainer + " pl-4 md:pl-0"}>
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
                    href="https://dashboard.neuralteq.com" 
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