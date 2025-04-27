'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CenteredContent from './layouts/CenteredContent';
import { PageTitle, PageSubtitle, IntroText, BodyText } from './typography';
import Footer from './Footer';
import FadeInUp from './motion/FadeInUp';

export default function ResearchContent() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="mt-24 md:mt-48 flex-1">
        <CenteredContent>
          <div className="relative mb-16 md:mb-[64px]">
            {/* Mesh Background */}
            <div className="absolute top-0 right-[240px] w-[240px] h-[240px] -z-10">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              >
                <source src="/visuals/mesh_orange_dark_50.webm" type="video/webm" />
                <source src="/visuals/mesh_orange_dark_50.mp4" type="video/mp4" />
                {/* Fallback for browsers that don't support video */}
                <Image
                  src="/visuals/mesh_orange@2x.png"
                  alt="Mesh Background"
                  width={240}
                  height={240}
                  quality={90}
                  priority
                  className="object-contain"
                />
              </video>
            </div>

            <FadeInUp>
              <PageTitle className="pt-[60px] mb-6 md:mb-8">
                Researching the Next Era
                <br />
                of AI
              </PageTitle>
            </FadeInUp>
          </div>

          <FadeInUp delay={0.2}>
            <IntroText className="mb-16 md:mb-[64px]">
            Neuralteq Research is our cutting edge, decentralised AI research firm. With strong roots in crypto and involved in the Bittensor ecosystem since day 1. Neuralteq leverages crypto native insights, quantitative strategies and subnet analysis to deliver actionable, high impact research reports.
            </IntroText>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <BodyText className="space-y-6 md:space-y-8">
              <p>
                Please find our latest clustered research-articles below:
              </p>
            </BodyText>
          </FadeInUp>
        </CenteredContent>
      </main>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
} 