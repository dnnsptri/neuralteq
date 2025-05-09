'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function LogoMesh({ alwaysShowMesh = false }: { alwaysShowMesh?: boolean }) {
  const pathname = usePathname();
  const isPrivacyPage = pathname === '/privacy';
  const [showMesh, setShowMesh] = useState(true);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setShowMesh(alwaysShowMesh || window.innerWidth >= 480);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [alwaysShowMesh]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

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

  // Don't render mesh until windowWidth is known (avoids SSR mismatch/flash)
  if (windowWidth === null) {
    return (
      <div className="relative w-[140px] h-[72px] flex items-center justify-end">
        <Image
          src={isDark ? "/visuals/logo_neuralteq@2x.png" : "/visuals/logo_neuralteq_light@2x.png"}
          alt="Neuralteq Logo"
          width={140}
          height={72}
          className="absolute inset-0 w-full h-full object-contain"
          style={{ zIndex: 2 }}
          priority
        />
      </div>
    );
  }

  const showVideo = windowWidth >= 1400;

  // Light mode: always use _light@2x.png, no SVG or mp4
  if (!isDark) {
    return (
      <div className="relative w-[140px] h-[72px] flex items-center justify-end">
        <Image
          src="/visuals/logo_neuralteq_light@2x.png"
          alt="Neuralteq Logo"
          width={140}
          height={72}
          className="absolute inset-0 w-full h-full object-contain"
          style={{ zIndex: 2 }}
          priority
        />
      </div>
    );
  }

  // Dark mode: >=1400px use SVG + mp4, <1400px use @2x.PNG
  return (
    <div className="relative w-[140px] h-[72px] flex items-center justify-end">
      {showVideo ? (
        <>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            width={77}
            height={77}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[64px] h-[64px] object-cover pointer-events-none"
            style={{ zIndex: 1 }}
          >
            <source src="/visuals/mesh_orange_gray_50.mp4" type="video/mp4" />
            <source src="/visuals/mesh_orange_gray_50.webm" type="video/webm" />
            <Image
              src="/visuals/mesh_orange@2x.png"
              alt="Mesh Background"
              width={77}
              height={77}
              className="object-cover"
            />
          </video>
          <Image
            src="/visuals/logo_neuralteq.svg"
            alt="Neuralteq Logo"
            width={140}
            height={72}
            className="absolute inset-0 w-full h-full object-contain"
            style={{ zIndex: 2 }}
            priority
          />
        </>
      ) : (
        <Image
          src="/visuals/logo_neuralteq@2x.png"
          alt="Neuralteq Logo"
          width={140}
          height={72}
          className="absolute inset-0 w-full h-full object-contain"
          style={{ zIndex: 2 }}
          priority
        />
      )}
    </div>
  );
} 