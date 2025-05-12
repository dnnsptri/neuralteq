import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import CenteredContent from '@/components/layouts/CenteredContent';
import { PageTitle, PageSubtitle, IntroText, BodyText } from '@/components/typography';
import Footer from '@/components/Footer';
import FadeInUp from '@/components/motion/FadeInUp';

export const metadata = {
  title: 'How to Build a Dynamic $TAO Portfolio - Part 2 - Neuralteq Research',
};

export default function HowToBuildDynamicTaoPortfolioPart2Page() {
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
                  How to Build a Dynamic $TAO Portfolio - Part 2
                </PageTitle>
              </div>
              <IntroText className="mb-16 md:mb-[64px]">
                Subnet Use Cases and Balanced Exposure.
              </IntroText>
            </div>

            <Link href="/research/how-to-build-dynamic-tao-portfolio-part-2" className="w-[360px] h-[400px] flex-shrink-0 flex items-center justify-center bg-[#021019] rounded-[4px]">
              <Image 
                src="/visuals/visual_investing@2x.png" 
                alt="How to Build a Dynamic $TAO Portfolio - Part 2" 
                width={300} 
                height={300} 
                className="object-contain" 
              />
            </Link>
          </div>
          </FadeInUp>
        </CenteredContent>

        <CenteredContent>
          <div className="w-full max-w-full px-2 sm:px-4">
            <FadeInUp delay={0.0}>
              <BodyText className="space-y-6 md:space-y-8 mb-8">
                <p>
                  In our previous article "<Link href="/research/how-to-build-dynamic-tao-portfolio-part-1" className="underline text-[#EF6C00] hover:text-[#ECFBFA] transition-colors duration-200">Part 1</Link>" we discussed $dTAO specific to take into account when building your portfolio, Emission, Subnet teams, Dilution risks and more. These are important in understanding the #Bittensor protocol dynamics and help to paint a picture on what kind of risks you are exposed to when participating in dTAO.
                </p>
                <p>
                  Now, we are building on previous knowledge to try to build a balanced portfolio to maximise upside while keeping enough cash on the side to be able to capitalise on dips or new opportunities.
                    <br />
                  Portfolio building is an art, and today we'll further explore subnet use cases and diversification strategies to help you improve your portfolio management. Let's jump right into it.
                </p>
                <PageSubtitle className="mb-4">Understanding Subnet Use Cases</PageSubtitle>
                <p>
                  Bittensor is basically a candy store for the AI-focused investor. There are 100 subnets actively building AI companies with unique value propositions within the ecosystem, all with relatively low valuations compared to traditional finance.
                    <br />
                  The AI landscape is changing rapidly, so read up on general AI use cases, their potential market valuation, and try to find market parallels within the Bittensor ecosystem. We generally like to pick 3 or 4 over arching themes that we find interesting before doing a deep dive into the projects and teams that are working on similar cases within the Bittensor ecosystem.
                    <br />
                  For example, right now AI workflow agents are hot; everybody is trying to fully automate parts of their businesses using powerful automated AI agents. Once you understand the potential market size of AI workflow agents, you might want to study which subnets are positioned to capture a portion of this market. 
                </p>
                <p>
                  Once you understand a subnets use case, you need to evaluate how a subnet is implementing their solution to be able to understand their revenue model.
                  In the end, it is important that subnets generate value for their tokenholders; if no value is coming back to the subnet, there is zero chance that the token price will hold up.
                    <br />
                  Look for subnets with clear value propositions and easy paths to commercialization; some are already using revenue for token buybacks.
                </p>
                <p>
                  Last but not least, the team building the subnet is most important. A strong team with a clear roadmap will significantly increase the chance of success. Look for a visionary leader and a strong online presence. Try to look behind the noise, check their GitHub, and ask around how other people feel about the team.
                    <br />
                  As a sanity check, you can ask yourself: Does this subnet solve a real problem? Are its tokenomics sustainable?
                </p>
                <p>
                  For more specific information about subnets and how to trade them, feel free to check these links:
                </p>
                <p>
                  - Our earlier post to learn more about the different subnets and their AI use cases: <Link href="https://x.com/neuralteq/1899839775059718502" className="underline text-[#EF6C00] hover:text-[#ECFBFA] transition-colors duration-200" target="_blank" rel="noopener noreferrer">https://tinyurl.com/bdtue3sv</Link><br />
                  - The TAO-Validator page for a weekly round-up on all the subnet developments, this is the most recent one: <Link href="https://x.com/TAO_ValidatorX/status/1916400260051505526" className="underline text-[#EF6C00] hover:text-[#ECFBFA] transition-colors duration-200" target="_blank" rel="noopener noreferrer">https://tinyurl.com/4dzcf9p9</Link><br />
                  - The TAO-Validator platform where you can see dTAO prices and where you can swap in and out of subnets: <Link href="https://t.co/dYXmtUTt1l" className="underline text-[#EF6C00] hover:text-[#ECFBFA] transition-colors duration-200" target="_blank" rel="noopener noreferrer">https://t.co/dYXmtUTt1l</Link><br />
                </p>
                <PageSubtitle className="mb-4">Building a Balanced Portfolio</PageSubtitle>
                <p>
                  - 60% High Market Cap Subnets (Bluechips): The higher market cap subnets usually have a higher market cap for a reason. Other people have already validated parts of their business model, so there might be a lower risk of failure. There is more liquidity, so you can allocate higher amounts of capital. They also have higher emission rates (remember, the higher the Alpha price, the higher the emission the subnet gets). A potential way of doing this is to slowly buy into the top 10 or top 15 subnet tokens over time.
                    <br />
                  - 20% New Subnets: Newer subnets are highly volatile; there are many opportunities, but there is also more risk involved. You really have to do your homework to make sure you are buying a valuable subnet token. Also, because they have low starting liquidity, the Alpha tokens dilute much faster than those of the higher subnets. Definitely worth your time to investigate, but be cautious and take calculated bets.
                    <br />
                  - 20% Root: Keep TAO aside to buy into dips. The great thing about Bittensor is that your idle TAO can still earn a good 22% APY. So far, we have seen wide ranges, so even if you have found a potentially good subnet, it might be worth slowly increasing your position over time and waiting for a good moment to buy.
                </p>
                <p>
                  Hope this helps you in setting up and finetuning your dTAO portfolio. A good portfolio is all about diversifying across subnet use cases while staying liquid for new opportunities.
                </p>
                <p>
                  In part 3, we'll talk about how to manage your risk, and timing your entries and exits to maximise the TAO price movements.
                </p>
              </BodyText>
            </FadeInUp>
          </div>
        </CenteredContent>
      </main>
      <div className="mt-24 md:mt-32 z-50">
        <Footer />
      </div>
    </div>
  );
} 