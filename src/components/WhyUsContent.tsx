'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CenteredContent from './layouts/CenteredContent';
import { PageTitle, PageSubtitle, IntroText, BodyText } from './typography';
import Footer from './Footer';
import FadeInUp from './motion/FadeInUp';
import SmallColumn from './ui/SmallColumn';

export default function WhyUsContent() {
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
          <div className="relative mb-8 md:mb-[64px]">
            {/* Mesh Background */}
            <div className="hidden md:block absolute top-0 right-[80px] w-[240px] h-[240px] -z-10">
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
                Neuralteq: Accelerating Subnet Adoption. Building the TAO Ecosystem
              </PageTitle>
            </FadeInUp>
          </div>

          {/* Mobile Mesh */}
          <div className="flex justify-center mb-16 md:hidden">
            <div className="w-[160px] h-[160px]">
              <video
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
                  width={160}
                  height={160}
                  quality={90}
                  priority
                  className="object-contain"
                />
              </video>
            </div>
          </div>

          <FadeInUp delay={0.2}>
            <IntroText className="mb-16 md:mb-[64px]">
              Our vision is a future where decentralized AI seamlessly integrates with everyday life, empowering individuals and businesses through autonomous, and collaborative technologies.
            </IntroText>
          </FadeInUp>

          <div className="flex flex-col md:flex-row gap-12 md:gap-16">
            {/* Main Content - 2/3 width */}
            <div className="md:w-2/3">
          <FadeInUp delay={0.3}>
            <BodyText className="space-y-6 md:space-y-8">
              <p>
                Our mission is to drive long-term success for the Bittensor ecosystem by actively building, innovating, and improving the space. We achieve this through working on essential tooling, building strategic and corporate partnerships, and accelerating global adoption of decentralized AI solutions.
              </p>

              <p>
                Neuralteq has a skilled team of data scientists, developers, crypto natives and sales leaders who have been actively involved in crypto since 2016, and within the Bittensor ecosystem since 2022. By combining work in Validating, Mining, Trading, Business Development, and Research, we are able to create valuable synergy, resulting in cross-pollination, providing unique insights that enhance each facet of our work.
              </p>

              <p>
                Our combined approach enables us to strategically identify and promote high-quality subnets, improve our business development focus, and advance our research capabilities, driving impactful outcomes for our stakers, clients and partners.
              </p>
            </BodyText>
          </FadeInUp>
            </div>
            {/* Side Column - 1/3 width */}
            <div className="md:w-1/3 md:-mt-[60px]">
              <FadeInUp delay={0.4}>
                <SmallColumn
                  title="Join our team!"
                  description="Reach out and become part of the effort shaping the future of Bittensor."
                  buttonText="Get in touch"
                  buttonHref="mailto:info@neuralteq.com"
                />
              </FadeInUp>
            </div>
          </div>
        </CenteredContent>
      </main>
      <div className="mt-24 md:mt-32 z-50">
        <Footer />
      </div>
    </div>
  );
} 