'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CenteredContent from './layouts/CenteredContent';
import WideContent from './layouts/WideContent';
import { PageTitle, PageSubtitle, IntroText, BodyText } from './typography';
import Footer from './Footer';
import SocialIcons from './SocialIcons';
import Button from './ui/Button';
import { Video, Quote, Mesh } from './content';
import FadeInUp from './motion/FadeInUp';

export default function BusinessContent() {
  return (
    <>
      {/* Background Image */}
      <div className="fixed top-0 left-0 right-0 w-full h-[60vh] -z-10 overflow-hidden">
        <Image
          src="/visuals/bg_business.png"
          alt="Business Background"
          fill
          quality={90}
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--background)] pointer-events-none" />
      </div>

      <main className="mt-24 md:mt-48 relative">
        <CenteredContent>
          <FadeInUp>
            <PageTitle className="pt-[60px] mb-6 md:mb-8">
              Support Building the Future of Decentralised AI
            </PageTitle>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <PageSubtitle className="mb-16 md:mb-[64px]">
              By staking securely with us, you strengthen the network and support real-world adoption.
            </PageSubtitle>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <IntroText className="mb-16 md:mb-[64px]">
              Our focus is simple yet impactful: we maximize your staking rewards (APY) while simultaneously improving and strengthening the network. We do this by connecting Bittensor Subnets with real-world applications, driving SME and Enterprise recognition, leading to real-world commercial traction.
            </IntroText>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <BodyText className="space-y-6 md:space-y-8 mb-12 md:mb-16">
              <p>
                We have been actively participating, validating and building within the ecosystem since day one, and we are
                committed to keep building long into the future. When you{' '}
                <Link 
                  href="https://staking.tao-validator.com/subnets?_gl=1*1p3hjy1*_ga*MjAzNTIxNDEwMS4xNzM0MDAwMDM0*_ga_G55BM4VS8R*MTc0NTM1Mzc4Mi4xNy4wLjE3NDUzNTM3ODIuMC4wLjA."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  stake your TAO with us
                </Link>
                , you can trust that it's safe, secure, and directly contributes to
                initiatives driving Bittensor adoption and enhancing the TAO ecosystem.
              </p>

              <p>
                Our philosophy centers around integrity, performance, and growth, allowing our stakers and partners to fully benefit from participating in subnets. We believe in decentralized AI that empowers individual autonomy through collaborative and transparent governance.
              </p>
            </BodyText>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <div className="mb-12 md:mb-[72px]">
              <Button 
                href="https://staking.tao-validator.com/subnets?_gl=1*1p3hjy1*_ga*MjAzNTIxNDEwMS4xNzM0MDAwMDM0*_ga_G55BM4VS8R*MTc4NTM1Mzc4Mi.xNy4wLjE3NDUzNTM3ODIuMC4wLjA."
              >
                Stake your TAO
              </Button>
            </div>
          </FadeInUp>
        </CenteredContent>

        <div className="flex justify-center mt-24">
          <WideContent>
            <div className="overflow-hidden">
              <FadeInUp delay={0.5}>
                <Video src="https://player.vimeo.com/video/1035908021" />
              </FadeInUp>
            </div>
          </WideContent>
        </div>

        <CenteredContent>
          <FadeInUp delay={0.6}>
            <PageSubtitle className="mb-6 md:mb-8">
              Driving SME and Enterprise adoption
            </PageSubtitle>
          </FadeInUp>

          <FadeInUp delay={0.7}>
            <BodyText className="space-y-6 md:space-y-8 mb-12 md:mb-16">
              <p>
                We believe in decentralized AI and actively work to bring decentralized AI subnet solutions to market. Many subnets are ready for real-world adoption, and we are passionate about supporting them in finding and achieving product market fit.
              </p>

              <p>
                Our main focus is enhancing subnets' interoperability and practical applications, ensuring they become essential to everyday business solutions. Our team of experts is dedicated to fostering partnerships and collaborations, driving the integration of subnet-developed solutions into mainstream usage. Making complex technologies accessible and valuable for everyone. Making
                complex technologies accessible and valuable for everyone.
              </p>
            </BodyText>
          </FadeInUp>

          <FadeInUp delay={0.8}>
            <Quote 
              text="We bridge decentralized AI with real-world impact, turning subnet innovation into everyday solutions"
              author="Roger Majelle (Neuralteq)"
            />
          </FadeInUp>

          <FadeInUp delay={0.9}>
            <BodyText className="mt-8 space-y-6">
              <p>
                Today, our role goes beyond providing validation services, we actively work on delivering growth and adoption to the Bittensor ecosystem by providing strategic advisory and commercial deal-making support. We aim to connect emerging decentralized technologies with traditional markets, empowering businesses to harness the full potential of Bittensor through education, support, and tailored solutions.
              </p>
              <p>
                Join us on this transformative journey as we build towards a future where subnet-built solutions are seamlessly integrated into real-life applications. Together, we can build the decentralized future, a future where Bittensor and its subnets are widely adopted across various sectors.
              </p>
            </BodyText>
          </FadeInUp>
        </CenteredContent>
      </main>
      <div className="z-50">
        <Footer />
      </div>
    </>
  );
} 