'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CenteredContent from './layouts/CenteredContent';
import WideContent from './layouts/WideContent';
import { PageTitle, PageSubtitle, IntroText, BodyText } from './typography';
import SocialIcons from './SocialIcons';
import Button from './ui/Button';
import { Video, Quote, Mesh } from './content';
import FadeInUp from './motion/FadeInUp';
import ContactForm from './ContactForm';
import Footer from './Footer';
import SmallColumn from './ui/SmallColumn';

export default function FundContent() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      {/* Background Image */}
      <div className="w-full flex justify-center fixed top-0 left-0 right-0 -z-10">
        <div className="relative w-full max-w-[1360px]">
          <Image
            src="/visuals/bg_fund.png"
            alt="Fund Background"
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
          <div className="relative mb-16 md:mb-[64px]">
            <FadeInUp>
              <PageTitle className="pt-[60px] mb-6 md:mb-8">
                Crypto-Native. Research-Driven. Capital-Conservative
              </PageTitle>
            </FadeInUp>
          </div>

          <FadeInUp delay={0.2}>
            <PageSubtitle className="mb-16 md:mb-[64px]">
              Invest in the right dTAO subnets, at the right time, with the right risk management.
            </PageSubtitle>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <IntroText className="mb-16 md:mb-[64px]">
              Our founders and team members joined Bittensor in the early days. Since then, we've built an extensive network and understanding of the ecosystem, which has given us deep insights and strong relationships with many of the leading subnet teams.
            </IntroText>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <BodyText className="space-y-6 md:space-y-8 mb-12 md:mb-16">
              <p>
                Introducing the Neuralteq Fund, we combine our AI expertise with extensive portfolio management experience, deep crypto-native insights, and advanced algorithmic trading to deliver a unique approach to stake management. We combine strategic subnet selection with quantitative strategies to time the market, a powerful combination that optimizes sustainable performance.
              </p>

              <p>
                With more than seven years of fund management experience and as pioneers in the Bittensor community, we are uniquely positioned to not only anticipate market trends but also adapt swiftly, ensuring optimal performance and outstanding results.
              </p>
            </BodyText>
          </FadeInUp>
          <FadeInUp delay={0.0}>
            <PageSubtitle className="mb-6 md:mb-8">
            Current performance: +1551% since inception
            </PageSubtitle>
          </FadeInUp>
        </CenteredContent>

        <CenteredContent>
          <div className="overflow-hidden">
            <FadeInUp delay={0.0}>
              {mounted && (
                <Image
                  src="/visuals/fund_graph.png"
                  alt="Fund Performance Graph"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              )}
            </FadeInUp>
          </div>
        </CenteredContent>

        <CenteredContent>
          <FadeInUp delay={0.0}>
              <div className="mt-[72px] flex flex-col md:flex-row gap-12" key="contact-section">
                <div className="flex-1">
                  <PageSubtitle className="mb-6 md:mb-8 mt-0">
                    Stay ahead of the curve
                  </PageSubtitle>
                  <p className="text-center md:text-left">
                    Join our <Link href="https://discord.com/invite/5wPwqcGnrn" className="link">Discord community</Link> for real-time updates, or fill in the contact form to be among the first to access the fund at launch.
                  </p>
                </div>
                <div className="md:w-[400px] md:-mt-12">
                  <SmallColumn
                    title="Get first access"
                    description="Want to be among the first to access the fund at launch? Get in touch with us directly."
                    buttonText="Send request"
                    buttonHref="mailto:info@neuralteq.com"
                    className="text-center md:text-left"
                  />
                </div>
              </div>
          </FadeInUp>
        </CenteredContent>
      </main>
      <div className="mt-24 md:mt-16 z-50">
        <Footer />
      </div>
    </>
  );
} 