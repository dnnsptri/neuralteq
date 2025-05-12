"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import CenteredContent from '@/components/layouts/CenteredContent';
import { PageTitle, PageSubtitle, IntroText, BodyText } from '@/components/typography';
import Footer from '@/components/Footer';
import FadeInUp from '@/components/motion/FadeInUp';

export default function HowToPickBittensorSubnetsPage() {
  const category = 'updates';
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
                  Is the bull market over?<br />Or is this a generational buying opportunity?
                </PageTitle>
              </div>
              <IntroText className="mb-16 md:mb-[64px]">
                What’s going on in the market, and what does this mean for $dTAO? Here’s a short analysis of current market conditions and the dTAO ecosystem.
              </IntroText>
            </div>

            <Link href="/research/how-to-pick-bittensor-subnets" className="w-[360px] h-[400px] flex-shrink-0 flex items-center justify-center bg-[#021019] rounded-[4px] hover:opacity-90 transition-opacity duration-200">
              <Image 
                src="/visuals/visual_updates@2x.png" 
                alt="Study Cylce Rotation" 
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
                Overall market sentiment is at a low, with prices declining over the last few weeks, and $BTC pulling back about 30% from its highs. Is this the beginning of the end, or just normal behavior?
              </p>
              <p>
                Last December, #Bitcoin consolidated (ranged) below its all-time highs, and this week we saw a drop below support. While that might seem scary and look like bearish price action, it doesn’t necessarily mean we’re in a bear market. Zooming out and looking at Bitcoin’s larger structure, we can see it’s still in an uptrend. This is only the first major correction.
              </p>
              <div className="overflow-hidden">
                <FadeInUp delay={0.0}>
                  <Image
                    src="/visuals/bull_graph_1@2x.png" 
                    alt="Major correction"
                    width={850}
                    height={1200}
                    className="w-full h-auto"
                    priority
                  />
                </FadeInUp>
              </div>
              <p>
                In a post from @RaoulGMI (Raoul Pal), he shows how 2017 had five major pullbacks of roughly 30%. Based on past data, this price action is nothing new and has historically been a buying opportunity: <Link href="https://x.com/RaoulGMI/status/1894090290513756256" className="underline text-[#EF6C00] hover:text-[#ECFBFA] transition-colors duration-200" target="_blank" rel="noopener noreferrer">https://x.com/RaoulGMI/status/1894090290513756256</Link>
              </p>
              <p>
                The Fear and Greed Index is at 18, and historically, market bottoms often form during periods of extreme fear. That doesn’t mean prices will rebound immediately, but over time, the odds could shift in your favor. Combining this indicator with others may reveal confluence in oversold levels across multiple metrics.
              </p>
              <div className="overflow-hidden">
                <FadeInUp delay={0.0}>
                  <Image
                    src="/visuals/bull_graph_2@2x.png" 
                    alt="Fear and Greed Index"
                    width={850}
                    height={1200}
                    className="w-full h-auto"
                    priority
                  />
                </FadeInUp>
              </div>
              <p>
                That said, prices could still move lower, market bottoms are frequently accompanied by large liquidations. Although the current 24-hour liquidations (just under $1 billion) aren’t at record highs, they add up when considering the past few days. So, if you have a long-term investment horizon, this price level could offer a favorable risk–reward ratio.
              </p>
              <p>
                How does this relate to dTAO? Since dTAO markets are so new, we can’t yet confirm any correlations. But looking at altcoins in general, we see a strong correlation between Bitcoin’s price action and coins like $Ether or #Bittensor. A weak overall market means fewer profits to reinvest in other coins, so if Bitcoin is weak, there’s a lower chance of seeing an uptrend in TAO or in dTAO tokens as a derivative.
              </p>
              <div className="overflow-hidden">
                <FadeInUp delay={0.0}>
                  <Image
                    src="/visuals/bull_graph_3@2x.png" 
                    alt="Fear and Greed Index"
                    width={850}
                    height={1200}
                    className="w-full h-auto"
                    priority
                  />
                </FadeInUp>
              </div>
              <p>
                Unfortunately, we can see this correlation in the Bittensor chart. After initially forming a falling wedge pattern and showing a clean breakout, $TAO’s price got “wrecked” because the overall market went down.
              </p>
              <p>
                We see similar influences in dTAO. Because the launch went well and the market was relatively stable, there was an initial inflow of capital, leading to very strong prices. Once the initial hype cooled off, there was a strong selloff, and now we’re waiting for a bottom to form before a new uptrend can begin. This pattern appears across all dTAO tokens, though some show more strength due to higher market interest.
              </p>
              <div className="overflow-hidden">
                <FadeInUp delay={0.0}>
                  <Image
                    src="/visuals/bull_graph_4@2x.png" 
                    alt="Fear and Greed Index"
                    width={850}
                    height={1200}
                    className="w-full h-auto"
                    priority
                  />
                </FadeInUp>
              </div>
              <p>
                Above chart shows the total value of dTAO subnets. After initially running up to four times the TAO token value, it has been slowly bleeding back toward 1 TAO. Because these markets are so new, and the general market is in a selloff, we don't know where the bottom will be. One hypothesis is that dTAO subnet value might be fairly priced around 1 TAO, but market inefficiencies could push it temporarily higher or lower.
              </p>
              <p>
                So, what now? Of course, nobody really knows. However, there are several ways to approach this. If the overall market strengthens again, we expect the dTAO subnets to start trending as well. If you’re in it for the long term, you can stake to root and wait for the market to recover. If you’re holding cash, you could gradually dollar-cost average (DCA) into TAO and consider doing the same with subnet tokens. Generally, it looks like the dTAO markets are cooling off before trending upward again. In the meantime, watch for subnets with strong marketing teams and ongoing development, those projects are more likely to stand out once the market rebounds.So, what now? Of course, nobody really knows. However, there are several ways to approach this. If the overall market strengthens again, we expect the dTAO subnets to start trending as well. If you’re in it for the long term, you can stake to root and wait for the market to recover. If you’re holding cash, you could gradually dollar-cost average (DCA) into TAO and consider doing the same with subnet tokens. Generally, it looks like the dTAO markets are cooling off before trending upward again. In the meantime, watch for subnets with strong marketing teams and ongoing development, those projects are more likely to stand out once the market rebounds.
              </p>
              <p>
                Just be aware of the risks: although it might look like the main selloff is over, you can never be completely certain.
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