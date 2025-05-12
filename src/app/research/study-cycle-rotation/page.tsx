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
                  Study cycle rotation
                </PageTitle>
              </div>
              <IntroText className="mb-16 md:mb-[64px]">
                #Crypto used to follow a fairly predictable cycle rotation that looked something like this:
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
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Bitcoin leads</h3>
                  <p>
                    Capital flows into #Bitcoin, sparking a $BTC rally and reigniting public interest in the #cryptocurrency space. During this phase, most altcoins are flat or in a downtrend, especially when measured against BTC.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. ETH/SOL take over</h3>
                  <p>
                    As Bitcoin starts to cool off, $ETH or $SOL picks up momentum. #Ethereum narratives like “the flippening” resurface, and ETH begins outperforming BTC. SOL now often moves in parallel. This marks the beginning of rotation into higher-beta majors.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3. AI Model Development</h3>
                  <p>
                    Profits from BTC, ETH, and SOL rotate into other large-cap coins. Fundamentals begin to matter again. These large caps start to outperform the majors, signaling broader market strength.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">4. Altseason</h3>
                  <p>
                    Once large caps peak, capital floods into mid- and low-cap altcoins. Coins with barely a website and a shiny new logo start pulling 10x overnight. Everything goes vertical. Classic mania phase. Literally everything goes bananas.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">This cycle, things played out differently</h3>
                  <p>
                    We had part of the Bitcoin run. Some strength from coins like $SOL and $SUI. A few large caps like $XRP and $ADA had brief moments. Memecoins had a moment of very strong showing. But we never got the full-blown large cap rally, and we haven’t (yet?) seen a true altseason. 
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Which brings us to #Bittensor $TAO</h3>
                  <p>
                  We're starting to see some similar signs of rotation within the TAO subnet ecosystem. There’s been notable strength in a few large caps, Subnet 64 (#Chutes), Subnet 4 (#Targon), and Subnet 8 (@taoshiio), which have led the recent uptrend. But now their momentum looks like it’s slowing down a bit for now.
                  </p>
                </div>
              </div>
              <p>
                Meanwhile, smaller caps like Subnet 18 (@zeussubnet), Subnet 2 (@omron_ai), and Subnet 12 (@ComputeHorde) are just starting to pick up. This could be an early signal of capital rotating from large subnets into smaller ones, similar to broader crypto market cycles. Identifying and catching these larger rotations might be critical to improve your portfolio performance.
              </p>
              <p>
                Is this the beginning of a $dTAO version of altseason? Or just a temporary change in momentum?
              </p>
              <p>
                Curious to hear your thoughts.
              </p>
              <div className="overflow-hidden">
                <FadeInUp delay={0.0}>
                  <Image
                    src="/visuals/study_cycle_graph@2x.png" 
                    alt="Study cycle rotation"
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