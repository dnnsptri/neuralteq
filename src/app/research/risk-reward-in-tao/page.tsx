import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import CenteredContent from '@/components/layouts/CenteredContent';
import { PageTitle, PageSubtitle, IntroText, BodyText } from '@/components/typography';
import Footer from '@/components/Footer';
import FadeInUp from '@/components/motion/FadeInUp';

export const metadata = {
  title: 'Risk reward in $TAO - Neuralteq Research',
};

export default function RiskRewardInTaoPage() {
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
                  Risk reward in $TAO
                </PageTitle>
              </div>
              <IntroText className="mb-16 md:mb-[64px]">
              One of the most important concepts in trading and / or investing. You hear people often talk about risk to reward. What is it and how can you use this concept to improve your #Bittensor portfolio management?
              </IntroText>
            </div>

            <Link href="/research/risk-reward-in-tao" className="w-[360px] h-[400px] flex-shrink-0 flex items-center justify-center bg-[#021019] rounded-[4px] hover:opacity-90 transition-opacity duration-200">
              <Image 
                src="/visuals/visual_updates@2x.png" 
                alt="Risk reward in $TAO" 
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
                In general, risk reward relates to how much risk you are willing to take, related to the reward that you are aiming to extract from the market. Let's look at an example:
              </p>
              <p>
                Let's say you like Subnet 19 (@rayon_labs). You strongly believe in the inference AI narrative, and you think that Subnet 19 is relatively cheap compared to  competitors in the market. You want to build a position because you believe this underperformance is not fair, and you expect a repricing in the market.
              </p>
              <p>
                Fair enough, so what price are you willing to pay?
              </p>
              <p>
                Looking at the chart, you see that there is a range active between 0.07 and 0.04. Current price is almost at the top of this range, at resistance. Based on your analyses and on past price history, you think that this subnet token is able to move to 0.12. You set this as a target for yourself.
              </p>
              <p>
                Now how does this setup look? If you are right, price will breakout and go to 0.12, you will make 81%. If you are wrong, price will probably go back to its previous support range. You will lose 40%. The risk (40%) to reward (80%) is more or less 2. 
              </p>
              <div className="overflow-hidden">
                <FadeInUp delay={0.0}>
                  <Image
                    src="/visuals/risk_graph_1@2x.png" 
                    alt="Vision"
                    width={850}
                    height={1200}
                    className="w-full h-auto"
                    priority
                  />
                </FadeInUp>
              </div>
              <p>
                Is this a good R:R? That is totally dependent on your trading style. If you go all in, this might be very risky; if you are taking small positions across the board, it might be more suitable because you allocate a small portion of your portfolio.
              </p>
              <p>
                How can you improve this R:R? Buying at resistance might be risky. You can wait for either a continuation, or a dip to the range low. Both cases will improve your R:R by a lot.
              </p>
              <p>
                Wait for breakout - retest - continuation gives you an R:R of 12.5.
              </p>
              <div className="overflow-hidden">
                <FadeInUp delay={0.0}>
                  <Image
                    src="/visuals/risk_graph_2@2x.png" 
                    alt="Vision"
                    width={850}
                    height={1200}
                    className="w-full h-auto"
                    priority
                  />
                </FadeInUp>
              </div>
              <p>
                Wait for dip to range low gives you even a 30.7 R:R.
              </p>
              <div className="overflow-hidden">
                <FadeInUp delay={0.0}>
                  <Image
                    src="/visuals/risk_graph_3@2x.png" 
                    alt="Vision"
                    width={850}
                    height={1200}
                    className="w-full h-auto"
                    priority
                  />
                </FadeInUp>
              </div>
              <p>
                Mastering risk-reward ratios enables you to significantly enhance your portfolio management. By strategically timing your entry, wait for a breakout or a dip to range lows, you can optimize your R:R.
              </p>
              <p>
                Trade smarter, not harder.
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