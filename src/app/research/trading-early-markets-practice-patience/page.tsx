import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import CenteredContent from '@/components/layouts/CenteredContent';
import { PageTitle, PageSubtitle, IntroText, BodyText } from '@/components/typography';
import Footer from '@/components/Footer';
import FadeInUp from '@/components/motion/FadeInUp';

export const metadata = {
  title: 'Trading early markets. Practice patience, do not fomo and stick to the plan - Neuralteq Research',
};

export default function TradingEarlyMarketsPracticePatiencePage() {
  const category = 'UPDATES';
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#021019] text-[#021019] dark:text-[#ECFBFA]">
      <Header selectedNav="Research" />
      <main className="mt-24 md:mt-48 flex-1">
        <CenteredContent>
          <FadeInUp delay={0.0}>
          <div className="flex flex-col md:flex-row gap-3 items-center md:items-start">
            <div className="flex-1">
              <div className="relative mb-16 md:mb-[64px]">
                <span className="text-xs uppercase tracking-wide bg-[#021019] text-[#ECFBFA] px-2 py-1 rounded mb-4 inline-block border border-[#ECFBFA]">{category}</span>
                <PageTitle className="pt-[60px] mb-6 md:mb-8">
                  Trading early markets. Practice patience, do not fomo and stick to the plan
                </PageTitle>
              </div>
              <IntroText className="mb-16 md:mb-[64px]">
                dTAO's #Bittensor initiative has effectively launched an open network comprising multiple subnet markets. Predicting behavior in these early stages is challenging.
              </IntroText>
            </div>

            <Link href="/research/trading-early-markets-practice-patience" className="w-[360px] h-[400px] flex-shrink-0 flex items-center justify-center bg-[#021019] rounded-[4px] hover:opacity-90 transition-opacity duration-200">
              <Image 
                src="/visuals/visual_trade_early@2x.png" 
                alt="Trading early markets. Practice patience, do not fomo and stick to the plan" 
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
                Prices might soar unexpectedly and pull back just as sharply. So it is important to stick to your plan, don't chase returns, don't fomo into prices that are running already. But instead be patient and stick to your plan.
              </p>
              <p>
                There are different ways to go about this, most easy, less stressful and the least time consuming strategy is to DCA (dollar cost average) your holding by buying a fixed amount of Alpha for the $TAO subnets that you are interested in over a period of time. This will give you exposure from the start, while giving you the opportunity to buy potential dips.
              </p>
              <p>
                If you prefer a more active role, certain strategies excel in early markets. Today, I'd like to discuss one of them.
              </p>
              <PageSubtitle className="mb-4">The support and resistance strategy</PageSubtitle>
              <p>
                Though well-known and seemingly straightforward, executing this strategy effectively requires stoicism and considerable patience. Support and resistance levels emerge because many traders believe the support price is an ideal buying point, while resistance feels like a psychological peak to others. Because of this, these levels act as liquidity magnets. Prices will often revisit these levels.
              </p>
              <p>
                Let's examine the performance in early-day subnets to see how you did if you sticked to a support resistance play:
              </p>
              <p>
                SN10 - <Link href="https://x.com/search?q=%24Sturdy&src=cashtag_click" className="underline text-[#EF6C00] hover:text-[#ECFBFA] transition-colors duration-200" target="_blank" rel="noopener noreferrer">$Sturdy</Link> experienced an initial selloff before finding support around the 0.026 level, which later served as a base for two more bounces. It is close to this level right now. What do you think, will it bounce again?
              </p>
              <p>
                SN8 - <Link href="https://x.com/search?q=%24Taoshi&src=cashtag_click" className="underline text-[#EF6C00] hover:text-[#ECFBFA] transition-colors duration-200" target="_blank" rel="noopener noreferrer">$Taoshi</Link> initially dropped to 0.043 before running more than 100% up. If you missed this initial surge, you could have waited for the drop back for it to return to this level before the substantial rise to the all time highs. The Taoshi chart also shows a support resistance flip. This is a phenomenon where the previous resistance acts as a support once broken.
              </p>
              <p>
                Looking at this chart there is a chance that the support level at 0.13 may hold and lead to a bounce. However, if it fails to hold, the next support level is significantly lower, nearly 60% down at 0.05. Being aware of these levels allows you to make an informed decision and effectively manage your risk.
              </p>
              <p>
                Of course, employing a support and resistance strategy typically means selling at resistance. However, there are indicators that can guide you to buy back in if the price breaks through, or help you decide to maintain your position. We will discuss more on this topic in later articles.
              </p>
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