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
                <source src="/visuals/mesh_orange.webm" type="video/webm" />
                <source src="/visuals/mesh_orange.mp4" type="video/mp4" />
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
                Secure. Reliable. Profitable.
              </PageTitle>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <PageSubtitle className="mb-16 md:mb-[64px]">
                We validate with dedication, to protect the network and maximize your returns.
              </PageSubtitle>
            </FadeInUp>
          </div>

          <FadeInUp delay={0.2}>
            <IntroText className="mb-16 md:mb-[64px]">
              At Neuralteq, validating is what we do best. We've been part of the Bittensor ecosystem since the beginning, with a seasoned team that brings years of experience in crypto infrastructure and on-chain operations.
            </IntroText>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <BodyText className="space-y-6 md:space-y-8 mb-8">
              <p>
                Our focus is clear:
              <ul className="list-disc pl-6 space-y-4">
                <li>We've been doing this from the start, our experienced team knows what it takes to run high-performance validators.</li>
                <li>We apply tailored strategies to maximize APR for our stakers, with constant performance tuning and optimization.</li>
                <li>We're in close contact with subnet teams and have deep insight into the strongest builders and the most promising producers.</li>
                <li>Revenue from our validator is reinvested directly into our business development team, working to drive real-world adoption and commercial traction for the Bittensor ecosystem.</li>
              </ul>
              </p>

              <p>
                Our team of developers constantly works to improve efficiency and performance so you get the best APY possible. We're committed to building a high-quality platform with state-of-the-art tooling and giving you clear guidance on which subnets to stake to.
              </p>

              <p>
                Stake with us, and help accelerate the future of decentralised AI through TAO.
              </p>
            </BodyText>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <div className="mb-12 md:mb-[72px]">
              <Button href="/stake">
                Stake your TAO
              </Button>
            </div>
          </FadeInUp>
          
        </CenteredContent>
      </main>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
} 