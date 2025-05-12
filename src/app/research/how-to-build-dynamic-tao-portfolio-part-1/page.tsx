import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import CenteredContent from '@/components/layouts/CenteredContent';
import { PageTitle, PageSubtitle, IntroText, BodyText } from '@/components/typography';
import Footer from '@/components/Footer';
import FadeInUp from '@/components/motion/FadeInUp';

export const metadata = {
  title: 'How to Build a Dynamic $TAO Portfolio - Part 1 - Neuralteq Research',
};

export default function HowToBuildDynamicTaoPortfolioPart1Page() {
  const category = 'investing';
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
                  How to Build a Dynamic $TAO Portfolio - Part 1
                </PageTitle>
              </div>
              <IntroText className="mb-16 md:mb-[64px]">
                How to build a dynamic $TAO portfolio that gives you enough exposure to profit from upswings, while still having enough 'dry powder' to buy potential dips?
              </IntroText>
            </div>

            <Link href="/research/how-to-build-dynamic-tao-portfolio-part-1" className="w-[360px] h-[400px] flex-shrink-0 flex items-center justify-center bg-[#021019] rounded-[4px]">
              <Image 
                src="/visuals/visual_investing@2x.png" 
                alt="How to Build a Dynamic $TAO Portfolio - Part 1" 
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
                Building a portfolio is a fine art, a skill to master, not something you just learn over time, and certainly not something to take lightly. In this series, we'll try to give you some guidance on building your own portfolio.
                This first article focuses on $dTAO specifics.
              </p>
              <p>
                Within dynamic TAO, there are multiple forces at play:
              </p>
            <PageSubtitle className="mb-4">Emission</PageSubtitle>
              <p>
                The higher the price of an Alpha token, the higher the TAO emission the subnet receives. This directly translates into a higher APY for you as a token holder. The subnet also gets a higher reward, which can be reinvested into its development. If you're looking at long-term, lower-risk bets with potentially lower volatility, this is probably it.
              </p>              
            <PageSubtitle className="mb-4">Subnet Teams</PageSubtitle>
              <p>
                With early investments, people are everything. Be sure to do your research on the teams behind each subnet. This will make a difference.
              </p>
            <PageSubtitle className="mb-4">Early Alpha dilution</PageSubtitle>
              <p>
                Subnets are still new. Subnet 64, for example, only has 3.9% of its supply in circulation. Every day, supply is increased by around 1.34% (source). So even though a subnet may have an amazing use case, you're still early. Supply will be diluted. Put the price into perspective relative to the fully diluted valuation. And ask yourself if you're willing to hold a certain subnet long-term with that in mind.
              </p>
            <PageSubtitle className="mb-4">Root proportion</PageSubtitle>
              <p>
                See here. Fill in the values from the subnet you're investigating. For subnet 64, the root proportion equilibrium is currently at 20 days. That means in about 20 days, root stakers and Alpha stakers roughly split emissions 50/50. This helps reduce sell pressure. Newer subnets (from number 65 onward) will have less supply, and their equilibrium will be further out.
              </p>
              <PageSubtitle className="mb-4">Liquidity pools</PageSubtitle>
              <p>
                dTAO subnets work with liquidity pools. Be sure to check how much Alpha or TAO is in the pool so you can get a sense of how much TAO you can realistically stake. Generally speaking, subnets with a longer lifetime have deeper liquidity pools, allowing for larger stakes.
              </p>
              <PageSubtitle className="mb-4">Sum of Alpha</PageSubtitle>
              <p>
                This is an interesting metric with multiple schools of thought. Some argue that the total sum of Alpha should be around 1, since all subnets are part of the TAO network, their combined value should theoretically be 1. But that assumes rational markets, which is rarely the case. A premium is expected when there's general hype in dTAO, and a discount could be possible when sentiment cools. Use the sum of Alpha to time your market exposure. So far, the market has been quite volatile and the sum of Alpha has only been higher than 1. Keep your FOMO in check, what goes up probably comes down again. Don't chase a pump. Practice stoicism and wait for price to return to your zone.
              </p>
              <p>
                Hope that gives some direction.
              </p>
              <p>
                In <Link href="/research/how-to-build-dynamic-tao-portfolio-part-2" className="underline text-[#EF6C00] hover:text-[#ECFBFA] transition-colors duration-200">the next article</Link>, we'll talk about different subnet use cases and how to construct a balanced portfolio while keeping some cash available for new opportunities.
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