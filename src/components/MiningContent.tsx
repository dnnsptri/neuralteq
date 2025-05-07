'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CenteredContent from './layouts/CenteredContent';
import { PageTitle, PageSubtitle, IntroText, BodyText } from './typography';
import Footer from './Footer';
import SmallColumn from './ui/SmallColumn';
import FadeInUp from './motion/FadeInUp';

export default function MiningContent() {
  return (
    <>
      {/* Background Image */}
      <div className="w-full flex justify-center fixed top-0 left-0 right-0 -z-10">
        <div className="relative w-full max-w-[1360px]">
          <Image
            src="/visuals/bg_mining.png"
            alt="Mining Background"
            width={1360}
            height={520}
            quality={100}
            priority
            className="object-contain object-center w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--background)] pointer-events-none" />
        </div>
      </div>

      <main className="mt-24 md:mt-48 relative">
        <CenteredContent>
          <FadeInUp>
            <PageTitle className="pt-[60px] mb-6 md:mb-8 content-box">
              Mining the Future of AI
            </PageTitle>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <PageSubtitle className="mb-16 md:mb-[64px] content-box">
              We mine to empower innovation, build better products, and accelerate real-world adoption.
            </PageSubtitle>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <IntroText className="mb-16 md:mb-[64px] content-box">
              At Neuralteq, mining is more than just analyzing and processing data, it's about actively contributing to a healthier, more robust Bittensor ecosystem. We mine because we believe in supporting the network's continuous improvement and innovation, helping build better products for everyone.
            </IntroText>
          </FadeInUp>

          <div className="flex flex-col md:flex-row gap-12 md:gap-16">
            {/* Main Content - 2/3 width */}
            <div className="md:w-2/3 content-box">
              <FadeInUp delay={0.2}>
                <BodyText className="space-y-6 md:space-y-8">
                  <p>
                    Through our mining activities, we gain valuable insights into which Subnets consistently deliver high-quality results and which need further development. These insights directly support our business development efforts and become part of our research initiatives, ensuring we can strategically advise and assist our partners effectively.
                  </p>

                  <p>
                    Interested in joining our mining team? We're always looking for dedicated individuals who share our passion for decentralized AI.
                  </p>
                </BodyText>
              </FadeInUp>
            </div>

            {/* Side Column - 1/3 width */}
            <div className="md:w-1/3 md:-mt-[60px] mobile-centered">
              <FadeInUp delay={0.2}>
                <SmallColumn
                  title="Want to join our mining team?"
                  description="Reach out and become part of the effort shaping the future of Bittensor."
                  buttonText="Get in touch"
                  buttonHref="mailto:info@neuralteq.com"
                  className="text-center md:text-left"
                />
              </FadeInUp>
            </div>
          </div>
        </CenteredContent>
      </main>

      <div className="mt-24 md:mt-16 z-50">
        <Footer />
      </div>
    </>
  );
} 