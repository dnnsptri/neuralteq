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
  const category = 'AI';
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
                  How to Pick Bittensor Subnets
                </PageTitle>
              </div>
              <IntroText className="mb-16 md:mb-[64px]">
                 The importance of Bittensor subnets.
              </IntroText>
            </div>

            <Link href="/research/how-to-pick-bittensor-subnets" className="w-[360px] h-[400px] flex-shrink-0 flex items-center justify-center bg-[#021019] rounded-[4px] hover:opacity-90 transition-opacity duration-200">
              <Image 
                src="/visuals/visual_ai@2x.png" 
                alt="How to pick Bittensor Subnets" 
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
                Learn more on different strategies by checking this page regularly for updates on specialized investment strategies. This article from 2 weeks ago gives a brief overview of a more active trading approach: <Link href="https://x.com/neuralteq/status/1893994024895209900" className="underline text-[#EF6C00] hover:text-[#ECFBFA] transition-colors duration-200" target="_blank" rel="noopener noreferrer">https://x.com/neuralteq/status/1893994024895209900</Link>
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
                <div>
                  <h3 className="text-xl font-semibold mb-2">3. AI Model Development</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Subnets:</strong> Dippy Roleplay (11), Omega Any-to-Any (21), Coldint (29), Finetuning (37), EdgeMaxxing (39), Pretraining (9), Gradients (56), Dippy Speech (58), Hivetrain AutoML (49)</li>
                    <li><strong>Description:</strong> Focuses on training, fine-tuning, or enhancing AI models (e.g., LLMs, speech).</li>
                    <li><strong>Why Decentralized AI is Beneficial:</strong> Distributes compute and data needs, enabling customization and cost efficiency.</li>
                    <li><strong>Addressable Market Size:</strong> $20B–$50B (training/fine-tuning market).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">4. Distributed Training</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Subnets:</strong> Templar (3), Distributed Training Subnet (38)</li>
                    <li><strong>Description:</strong> Enables large-scale model training across distributed compute resources.</li>
                    <li><strong>Why Decentralized AI is Beneficial:</strong> Reduces costs, speeds up training, and broadens access.</li>
                    <li><strong>Addressable Market Size:</strong> $2.8B — $9.58B.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">5. Model Hosting + Inference</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Subnets:</strong> Nineteen (19), Targon (4), Chutes (64)</li>
                    <li><strong>Description:</strong> Optimizes deployment and execution of AI models for rapid, cost-effective inference.</li>
                    <li><strong>Why Decentralized AI is Beneficial:</strong> Lowers latency and costs via distributed nodes.</li>
                    <li><strong>Addressable Market Size:</strong> $106B to $254B in 2030.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">6. Data</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Subnets:</strong> Dataverse (13), Metasearch (22), Open Kaito (5), LogicNet (35), Precog (55), Dojo (52), ReadyAI (33)</li>
                    <li><strong>Description:</strong> Handles data scraping, storage, embedding, or analysis for AI training and insights.</li>
                    <li><strong>Why Decentralized AI is Beneficial:</strong> Ensures data sovereignty and incentivizes contributors.</li>
                    <li><strong>Addressable Market Size:</strong> $50B–$100B.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">7. Prediction Markets</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Subnets:</strong> S&P 500 Oracle (28), Infinite Games (6), Bettensor (30), Sportstensor (41), Nextplace AI (48), Gaia (57), Score / Precog (44)</li>
                    <li><strong>Description:</strong> Uses AI for predicting financial markets, sports, or events.</li>
                    <li><strong>Why Decentralized AI is Beneficial:</strong> Enhances transparency and accuracy via distributed compute.</li>
                    <li><strong>Addressable Market Size:</strong> $1B–$5B (prediction markets + sports betting).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">8. Scientific Research</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Subnets:</strong> Protein Folding (25), Pyramid Scheme (36), Graphite (43), Nova (68)</li>
                    <li><strong>Description:</strong> Applies AI to scientific challenges like protein folding, graph optimization, and medicinal research. Protein Folding (25) targets biotech and food, while Nova (68) focuses specifically on medicinal research (e.g., drug discovery via protein analysis). Graphite (43) optimizes routes.</li>
                    <li><strong>Why Decentralized AI is Beneficial:</strong> Lowers the cost of compute-intensive research, enables and incentivizes global collaboration, and accelerates breakthroughs in fields like medicine and biotech by distributing workloads across a network.</li>
                    <li><strong>Addressable Market Size:</strong> $10B–$50B. Protein Folding ties to biotech/medicines ($10B–$50B), and Nova's medicinal focus aligns with drug discovery, a $50B+ market, though its decentralized niche might start at $5B–$20B. Graphite's route optimization is $140M (1–2% of $5B).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">9. AI Detection</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Subnets:</strong> BitMind (34), It's AI (32)</li>
                    <li><strong>Description:</strong> Deepfake detection, checks if content is generated with an AI. Helpful for checking authenticity and trust.</li>
                    <li><strong>Why Decentralized AI is Beneficial:</strong> Scales detection efforts and adapts quickly to new patterns.</li>
                    <li><strong>Addressable Market Size:</strong> $1B–$5B (emerging trust market).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">10. DeFi (Decentralized Finance)</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Subnets:</strong> Sturdy (10)</li>
                    <li><strong>Description:</strong> DeFi with an AI layer on top for optimizing yield and lending.</li>
                    <li><strong>Why Decentralized AI is Beneficial:</strong> Useful for automating strategies, reducing costs, and increasing transparency.</li>
                    <li><strong>Addressable Market Size:</strong> $10B–$20B (DeFi AI niche).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">11. Advertising</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Subnets:</strong> BitAds (16)</li>
                    <li><strong>Description:</strong> Optimizes decentralized online advertising.</li>
                    <li><strong>Why Decentralized AI is Beneficial:</strong> Reduces reliance on ad giants, improves privacy, and lowers costs.</li>
                    <li><strong>Addressable Market Size:</strong> $5B–$25B (1–5% of $500B digital ad market).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">12. Cybersecurity</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Subnets:</strong> Red Team (61), Bitsec (60)</li>
                    <li><strong>Description:</strong> Provides AI-powered code vulnerability detection and cybersecurity challenges.</li>
                    <li><strong>Why Decentralized AI is Beneficial:</strong> No centralized data breaches, no single point of error, making it possible to continuously train and deploy real time models. Censorship resistant. Easy to scale work.</li>
                    <li><strong>Addressable Market Size:</strong> $5B–$10B (AI cybersecurity segment).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">13. Coding</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Subnets:</strong> WebGenieAI (54), Bitsec (60, partial), Gen42 — Rizzo (45, partial)</li>
                    <li><strong>Description:</strong> Assists with coding tasks, vulnerability detection, or web development.</li>
                    <li><strong>Why Decentralized AI is Beneficial:</strong> Distributes compute and enables open-source collaboration. Censorship resistant.</li>
                    <li><strong>Addressable Market Size:</strong> $1B–$5B (developer tools market).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">14. Trading</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Subnets:</strong> Proprietary Trading Network (8 @taoshiio), Efficient Frontier (53), S&P 500 Oracle (28)</li>
                    <li><strong>Description:</strong> Applies AI to algorithmic trading and price prediction.</li>
                    <li><strong>Why Decentralized AI is Beneficial:</strong> Enables real-time analysis and crowd sourcing of models.</li>
                    <li><strong>Addressable Market Size:</strong> $5B–$10B (algo trading niche).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">15. Infrastructure</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Subnets:</strong> Subvortex (7), Compute (27), Compute Subnet (51), Horde (12)</li>
                    <li><strong>Description:</strong> Provides node infrastructure and scalable compute for Bittensor.</li>
                    <li><strong>Why Decentralized AI is Beneficial:</strong> Ensures resilience and scalability.</li>
                    <li><strong>Addressable Market Size:</strong> $10B–$50B (decentralized compute niche).</li>
                  </ul>
                </div>
              </div>
              <PageSubtitle className="mb-4">Summary</PageSubtitle>
              <p>
                A summarizing cheat sheet on the AI use cases, it market size, and the key benefits of using decentralized AI.
              </p>
              <div className="overflow-hidden">
                <FadeInUp delay={0.0}>
                  <Image
                    src="/visuals/fix_table@2x.png" 
                    alt="Subnet Use Cases Cheat Sheet"
                    width={850}
                    height={1200}
                    className="w-full h-auto"
                    priority
                  />
                </FadeInUp>
              </div>
              <p>
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