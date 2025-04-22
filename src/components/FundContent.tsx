'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CenteredContent from './layouts/CenteredContent';
import WideContent from './layouts/WideContent';
import { PageTitle, PageSubtitle, IntroText, BodyText } from './typography';
import Footer from './Footer';
import SocialIcons from './SocialIcons';
import Button from './ui/Button';
import { Video, Quote, Mesh } from './content';
import FadeInUp from './motion/FadeInUp';
import ContactForm from './ContactForm';

export default function FundContent() {
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
    <>
      {/* Background Image */}
      <div className="fixed top-0 left-0 right-0 w-full h-[60vh] -z-10 overflow-hidden">
        <Image
          src="/bg_business.png"
          alt="Business Background"
          fill
          quality={90}
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--background)] pointer-events-none" />
      </div>

      <main className="mt-24 md:mt-48 relative">
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
                <source src="/mesh_orange.webm" type="video/webm" />
                <source src="/mesh_orange.mp4" type="video/mp4" />
                {/* Fallback for browsers that don't support video */}
                <Image
                  src="/mesh_orange@2x.png"
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
              Crypto-Native. Research-Driven. Capital-Conservative.
              </PageTitle>
            </FadeInUp>
          </div>

          <FadeInUp delay={0.1}>
            <PageSubtitle className="mb-16 md:mb-[64px]">
            Invest in the right dTAO subnets, at the right time, with the right risk management.
            </PageSubtitle>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <IntroText className="mb-16 md:mb-[64px]">
            From day one, Neuralteq has been one of the top-performing validators in the Bittensor network, giving us deep insight into the ecosystem and strong relationships with many of the leading subnet teams.
            </IntroText>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <BodyText className="space-y-6 md:space-y-8 mb-12 md:mb-16">
              <p>
                Introducing the Neuralteq Fund, we combine our AI expertise with extensive portfolio management experience, deep crypto-native insights, and advanced algorithmic trading to deliver a unique approach to stake management. We combine strategic subnet selection with quantitative strategies to time the market, a powerful combination that optimizes sustainable performance.
              </p>

              <p>
                With more than seven years of fund management experience and as pioneers in the Bittensor community, we are uniquely positioned to not only anticipate market trends but also adapt swiftly, ensuring optimal performance and outstanding results.
              </p>
            </BodyText>
          </FadeInUp>
          <FadeInUp delay={0.4}>
            <PageSubtitle className="mb-6 md:mb-8">
            Current performance: +567% since inception
            </PageSubtitle>
          </FadeInUp>
        </CenteredContent>

        <CenteredContent>
          <div className="overflow-hidden">
            <FadeInUp delay={0.5}>
              <Image
                src="/fund_graph.png"
                alt="Fund Performance Graph"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </FadeInUp>
          </div>
        </CenteredContent>

        <CenteredContent>
          <FadeInUp delay={0.6}>
            <BodyText className="space-y-6 md:space-y-8 mb-12 md:mb-16">
              <div className="mt-[72px] flex flex-col md:flex-row gap-12" key="contact-section">
                <div className="flex-1">
                  <PageSubtitle className="mb-6 md:mb-8 mt-12">
                    Stay ahead of the curve
                  </PageSubtitle>
                  <p>
                    Join our <Link href="https://discord.com" className="link">Discord community</Link> for real-time updates, or fill in the contact form below to be among the first to access the fund at launch.
                  </p>
                </div>
                <div className="md:w-[400px] md:-mt-12">
                  <ContactForm />
                </div>
              </div>
            </BodyText>
          </FadeInUp>
        </CenteredContent>
      </main>
      <div className="z-50" key="footer-wrapper">
        <Footer />
      </div>
    </>
  );
} 