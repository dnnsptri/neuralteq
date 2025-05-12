import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import CenteredContent from '@/components/layouts/CenteredContent';
import { PageTitle, PageSubtitle, IntroText, BodyText } from '@/components/typography';
import Footer from '@/components/Footer';
import FadeInUp from '@/components/motion/FadeInUp';

export const metadata = {
  title: 'Studying relative strength of $TAO subnet tokens - Neuralteq Research',
};

export default function StudyingRelativeStrengthOfTaoSubnetTokensPage() {
  const category = 'UPDATES';
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#021019] text-[#021019] dark:text-[#ECFBFA]">
      <Header selectedNav="Research" />
      <main className="mt-24 md:mt-48 flex-1">
        <CenteredContent>
          <FadeInUp delay={0.2}>
          <div className="flex flex-col md:flex-row gap-3 items-center md:items-start">
            <div className="flex-1">
              <div className="relative mb-16 md:mb-[64px]">
                <span className="text-xs uppercase tracking-wide bg-[#021019] text-[#ECFBFA] px-2 py-1 rounded mb-4 inline-block border border-[#ECFBFA]">{category}</span>
                <PageTitle className="pt-[60px] mb-6 md:mb-8">
                  Studying relative strength of $TAO subnet tokens
                </PageTitle>
              </div>
              <IntroText className="mb-16 md:mb-[64px]">
              There is an edge in knowing which tokens bounce back the hardest after a dip. Buy those to strengthen your portfolio.
              </IntroText>
            </div>

            <Link href="/research/studying-relative-strength-of-tao-subnet-tokens" className="w-[360px] h-[400px] flex-shrink-0 flex items-center justify-center bg-[#021019] rounded-[4px] hover:opacity-90 transition-opacity duration-200">
              <Image 
                src="/visuals/visual_updates@2x.png" 
                alt="Studying relative strength of $TAO subnet tokens" 
                width={300} 
                height={300} 
                className="object-contain" 
              />
            </Link>
          </div>
          </FadeInUp>
        </CenteredContent>

        <CenteredContent>
          <FadeInUp delay={0.0}>
            <BodyText className="space-y-6 md:space-y-8 mb-8">
              <p>
                Subnet 26 (Storb) being the winner here. Followed by subnet 38 (Distributed Training). <br />
              This new feature will be released in the upcoming update from <Link href="https://www.neuralteq.com" className="underline text-[#EF6C00] hover:text-[#ECFBFA] transition-colors duration-200" target="_blank" rel="noopener noreferrer">https://www.neuralteq.com</Link>
              </p>
              <p>
                Keep an eye out over the next few days!
              </p>
              <div className="overflow-hidden">
                <FadeInUp delay={0.0}>
                  <Image
                    src="/visuals/study_graph@2x.png" 
                    alt="Subnet 26"
                    width={850}
                    height={1200}
                    className="w-full h-auto"
                    priority
                  />
                </FadeInUp>
              </div>
            </BodyText>
          </FadeInUp>
        </CenteredContent>
      </main>
      <div className="mt-24 md:mt-32 z-50">
        <Footer />
      </div>
    </div>
  );
} 