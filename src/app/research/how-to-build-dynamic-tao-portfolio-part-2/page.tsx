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
          <FadeInUp delay={0.0}>
          <div className="flex flex-col md:flex-row gap-3 items-center md:items-start">
            <div className="flex-1">
              <div className="relative mb-16 md:mb-[64px]">
                <span className="text-xs uppercase tracking-wide bg-[#021019] text-[#ECFBFA] px-2 py-1 rounded mb-4 inline-block border border-[#ECFBFA]">{category}</span>
                <PageTitle className="pt-[60px] mb-6 md:mb-8">
                  How to Build a Dynamic $TAO Portfolio - Part 2
                </PageTitle>
              </div>
              <IntroText className="mb-16 md:mb-[64px]">
              The importance of Bittensor subnets.
              </IntroText>
            </div>

            <Link href="/research/how-to-build-dynamic-tao-portfolio-part-2" className="w-[360px] h-[320px] flex-shrink-0 flex items-center justify-center bg-[#021019] rounded-[4px]">
              <Image 
                src="/visuals/visual_how_to_build@2x.png" 
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
          <FadeInUp delay={0.0}>
            <BodyText className="space-y-6 md:space-y-8 mb-8">
              {/* Use the same body content as 'how to pick' */}
              <p>
                The Bittensor network is a game changer in the development, deployment, and monetisation of artificial intelligence. It rapidly scales the development of open source AI by using subnets. Subnets are specialized networks, focusing on specific AI use cases while leveraging distributed computing power.
              </p>
              <p>
                For investors, subnet selection is a challenge: use cases range from conversational agents to medicinal research, therefore each subnet is an unique opportunity, with a specific risk profile. At the moment 75 subnets are already active and every two days more are activated. To win in this complex landscape, you need a structured approach. This article aims to present you a framework to simplify your investment process by categorizing subnets into key AI use cases. It will try to give you some guidance by estimating the market potential, and highlight helpful features. Whether you're a retail investor, trader, or institution, understanding these subnet specifics will help you identify high-potential investments in this fast moving decentralized AI economy.
              </p>
              <PageSubtitle className="mb-4">Investment Framework</PageSubtitle>
              <p>
                Determining your investment strategy is an important first step in investing in the TAO subnet market. Based on your risk appetite and your time horizon you can choose one or multiple allocation strategies. Are you looking for short-term gains or long-term exposure?
              </p>
              <p>
                Learn more on different strategies by checking this page regularly for updates on specialized investment strategies.
              </p>
              <p>
                If you are long term oriented, it is possible that you want to slowly increase exposure over time through dollar-cost averaging. Doing this will give you an average price over time and it will help you to buy through market dips, reducing impact of price volatility.
              </p>
              <p>
                If this is your thing, the categorization framework below can help you to select which subnets you want to slowly start allocating towards.
              </p>
              <PageSubtitle className="mb-4">Categorization Framework for Bittensor Subnets</PageSubtitle>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. AI Agents</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Subnets:</strong> APEX (1), Bitagent — Rizzo (20), Gen42 — Rizzo (45), Agentao (62 ), Agent Arena by Masa (59 ), Masa (42)</li>
                    <li><strong>Description:</strong> AI agents are autonomous systems for tasks like conversational AI, coding assistance, or software engineering solutions.</li>
                    <li><strong>Why Decentralized AI is Beneficial:</strong> Reduces reliance on centralized providers, enhances resilience, and incentivizes community-driven innovation.</li>
                    <li><strong>Addressable Market Size:</strong> $100B to $390B (OpenAI is already at $300B).</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Generative AI</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Subnets:</strong> Three Gen (17), Cortex.t (18), Omron (2 ), SocialTensor (23), Tensor Alchemy (26), Synth (50), NeuralAI (46)</li>
                    <li><strong>Description:</strong> Creates content like 3D assets, images, audio, or synthetic data for gaming, media, and advertising. Play around with decentralised text and image models using</li>
                    <li><strong>Why Decentralized AI is Beneficial:</strong> Lowers computational costs, democratizes access, and distributes control of ownership.</li>
                    <li><strong>Addressable Market Size:</strong> $50B–$100B (projected generative AI growth). $356B by 2030</li>
                  </ul>
                </div>
                {/* Continue with other categories... */}
              </div>
              <PageSubtitle className="mb-4">Summary</PageSubtitle>
              <p>
                A summarizing cheat sheet on the AI use cases, it market size, and the key benefits of using decentralized AI.
                <br />
                * The market size ranges are very broad guesstimates based on AI and industry trends.
              </p>
              <PageSubtitle className="mb-4">Additional Things to Keep in Mind</PageSubtitle>
              <p>
                Beyond use cases and market sizes, several factors can influence subnet investment decisions:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Market size:</strong> Having a large market size doesn't mean that the subnet will be able to capture that value. There might be a lot of competitors and not every use case fits well within the decentralized market.</li>
                <li><strong>Buybacks:</strong> Some subnets (e.g., Chutes, Compute Subnet, PTN) are actively pursuing buyback programs, this can boost token prices.</li>
                <li><strong>Revenue:</strong> Depending per usecase and subnet it might be more straight forward to realise revenue. Some subnets, like Nineteen (inference) or Sturdy (DeFi), have clear monetization paths (service fees, TVL growth), while others still have to work on their future revenue models. Look for subnets with tangible revenue models or partnerships (e.g., Yuma AI, Pantera).</li>
                <li><strong>Marketing:</strong> In crypto it's all about hype. Subnets like APEX (ChatGPT competitor) or Nova (AI drug discovery) have usecases that are automatically more known with the current usebase. It also helps if a subnet is carried by a strong team like Macrocosmos. Twitter followers are an interesting metric to look at, for instance Sturdy's 27K or Masa's 218K and backing from reputable VCs like YCombinator,or Binance is an additional validation of the business case.</li>
                <li><strong>Overall State of the Market:</strong> The decentralized AI market is still early but growing fast, most products don't have users yet. It will take time for them to find their revenue models and to convert their efforts into viable business models. That means that right now volatility will stay high, emission rates might fluctuate and competition from centralized players like OpenAI or Google is strong. Macro trends, like Trump's tariffs, also impact market dynamics.</li>
              </ul>
              <PageSubtitle className="mb-4">Making Informed Subnet Choices</PageSubtitle>
              <p>
                Deciding which subnets to invest to is not that easy, and hopefully this framework will provide you with a starting point. We have set out 15 AI use cases, with a broadly defined clear market opportunity , while generative AI and AI agents seem to be the larger opportunity in market size, there is also a lot of competition. It is important to think about if and how a subnet could be able to win within its specific competitive landscape.
              </p>
              <p>
                To get a full picture of whats going on, you have to look at all moving dynamics of the subnet usecase and its progression. Subnets will try to make their subnet look more interesting by initiating buyback actions or innovative revenue models. Find out which subnets are most active, and you might find yourself a winning investment.
              </p>
              <p className="font-medium">
                The market is an expert in taking money from inexperienced players. Don't be someone's exit liquidity!
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