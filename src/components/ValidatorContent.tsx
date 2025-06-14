'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CenteredContent from './layouts/CenteredContent';
import { PageTitle, PageSubtitle, IntroText, BodyText } from './typography';
import Footer from './Footer';
import Header from './Header';
import Button from './ui/Button';
import FadeInUp from './motion/FadeInUp';

export default function ValidatorContent() {
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
      <Header />
      {/* Background Image */}
      <div className="w-full flex justify-center fixed top-0 left-0 right-0 -z-10">
        <div className="relative w-full max-w-[1360px]">
        <Image
            src="/visuals/bg_validator.png"
            alt="Validator Background"
            width={1360}
            height={520}
            quality={100}
          priority
            className="object-contain object-center w-full h-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--background)] pointer-events-none" />
        </div>
      </div>
      <main className="mt-24 md:mt-48 flex-1">
        <CenteredContent>
          <div className="relative mb-16 md:mb-[64px]">
            <FadeInUp>
              <PageTitle className="pt-[60px] mb-6 md:mb-8">
                Secure. Reliable. Profitable.
              </PageTitle>
            </FadeInUp>
          </div>

          <FadeInUp delay={0.2}>
            <IntroText className="mb-16 md:mb-[64px]">
              We've been part of the Bittensor ecosystem since the beginning, with a seasoned team that brings years of experience in crypto infrastructure and on-chain operations.
            </IntroText>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <BodyText className="space-y-6 md:space-y-8 mb-8">
              <p>
                Our focus is clear:
              </p>

              <ul className="list-disc list-outside ml-4 space-y-0">
                <li>We've been doing this from the start, our experienced team knows what it takes to run high-performance validators.</li>
                <li>We apply tailored strategies to maximize APY for our stakers, with constant performance tuning and optimization.</li>
                <li>We're in close contact with subnet teams and have deep insight into the strongest builders.</li>
                <li>Revenue from our validator is reinvested directly into our business development team, working to drive real-world adoption and commercial traction for the Bittensor ecosystem.</li>
              </ul>

              <p>
                Our team of developers constantly works to improve efficiency and performance so you get the best APY possible. We're committed to building a high-quality platform with state-of-the-art tooling and giving you clear guidance on which subnets to stake to.
              </p>

              <p>
                <span className="font-medium">Stake with us, and help accelerate the future of decentralized AI through TAO.</span>
              </p>
            </BodyText>
          </FadeInUp>

          <FadeInUp delay={0.0}>
            <div className="mt-16 mb-12 md:mb-[72px]">
              <Button 
                href="https://dashboard.neuralteq.com"
              >
                Stake your TAO
              </Button>
            </div>
          </FadeInUp>
          
        </CenteredContent>
      </main>
      <div className="mt-24 md:mt-2 z-50">
        <Footer />
      </div>
    </div>
  );
} 