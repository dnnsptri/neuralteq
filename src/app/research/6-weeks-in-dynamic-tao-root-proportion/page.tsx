import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import CenteredContent from '@/components/layouts/CenteredContent';
import { PageTitle, PageSubtitle, IntroText, BodyText } from '@/components/typography';
import Footer from '@/components/Footer';
import FadeInUp from '@/components/motion/FadeInUp';

export const metadata = {
  title: '6 weeks in dynamic TAO, how is root proportion holding up? - Neuralteq Research',
};

export default function SixWeeksInDynamicTaoRootProportionPage() {
  const category = 'DTAO';
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
                  6 weeks in dynamic TAO, how is root proportion holding up?
                </PageTitle>
              </div>
              <FadeInUp delay={0.2}>
                <PageSubtitle className="mb-16 md:mb-[64px]">
                  What is it, and why does it matter?
                </PageSubtitle>
          </FadeInUp>
              <IntroText className="mb-16 md:mb-[64px]">
                   Bittensor subnets launch with 1 Alpha token supply. From there, each block emits 2 Alpha per subnet, while 1 $TAO total is split across all subnets based on their emission percentage.
              </IntroText>
            </div>

            <Link href="/research/6-weeks-in-dynamic-tao-root-proportion" className="w-[360px] h-[400px] flex-shrink-0 flex items-center justify-center bg-[#021019] rounded-[4px] hover:opacity-90 transition-opacity duration-200">
              <Image 
                src="/visuals/visual_dtao@2x.png" 
                alt="6 weeks in dynamic TAO, how is root proportion holding up?" 
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
              {/* Content copied from How to Pick Bittensor Subnets */}
              <p>
                Early in the Dynamic TAO rollout, the high risk and unclear rewards let the @opentensor foundation to introduce "root proportion. Root proportion basically means that if you stake your TAO to subnet 0 (Root), your stake contributes weight across all subnets where the validator operates. This removes your risk, while still gives you the APY of staking to all subnets. This made it possible for market participants to wait a bit and see how the early market dynamics play out. 
              </p>
              <p>
                But this won’t last forever. Root proportion, currently at 67.14%, as per @learnbittensor (with subnet 64 #chutes data), is designed to shrink over time. We’re 6 weeks in, and in about 40 days, we’ll hit the inflection point. That’s when root stakers and Alpha stakers roughly split emissions 50/50. Why’s this big? Root stakers auto-sell Alpha tokens for TAO, creating sell pressure. As root’s share drops, that pressure eases, giving Alpha tokens more room to rally.
              </p>
              <p>
                Keep an eye on subnets in the following month, and see if markets offer opportunities for entries.
              </p>
              <div className="overflow-hidden">
                <FadeInUp delay={0.0}>
                  <Image
                    src="/visuals/root_graph@2x.png" 
                    alt="Current root proportion"
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