'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CenteredContent from './layouts/CenteredContent';
import { PageTitle, PageSubtitle, IntroText, BodyText } from './typography';
import Footer from './Footer';
import FadeInUp from './motion/FadeInUp';
import SmallColumn from './ui/SmallColumn';
import Header from './Header';

export default function IndexContent() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const services = [
    {
      key: 'validator',
      label: 'Validator',
      href: '/validator',
      color: '#0A2233',
      visual: '/visuals/mesh_orange@2x.png',
      description: 'Secure, reliable validation for the Bittensor network.'
    },
    {
      key: 'business',
      label: 'Business Development',
      href: '/business-development',
      color: '#4B2B3B',
      visual: '/visuals/mesh_orange@2x.png',
      description: 'Connecting subnets with real-world adoption.'
    },
    {
      key: 'mining',
      label: 'Mining',
      href: '/mining',
      color: '#2B4D2F',
      visual: '/visuals/mesh_orange@2x.png',
      description: 'High-performance mining operations and insights.'
    },
    {
      key: 'research',
      label: 'Research',
      href: '/research',
      color: '#2B3B4B',
      visual: '/visuals/mesh_orange@2x.png',
      description: 'Cutting-edge research and innovation in decentralised AI.'
    },
    {
      key: 'fund',
      label: 'Neuralteq Fund',
      href: '/fund',
      color: '#3B4B6D',
      visual: '/visuals/mesh_orange@2x.png',
      description: 'Strategic funding solutions for the TAO economy.'
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Ensure video plays
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [services.length]);

  // Helper to get the visible pair of cards
  const getVisibleIndices = () => {
    if (services.length <= 2) return [0, 1];
    if (activeIndex === services.length - 1) return [activeIndex, 0];
    return [activeIndex, (activeIndex + 1) % services.length];
  };
  const visibleIndices = getVisibleIndices();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
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
      <main className="mt-24 md:mt-48 flex-1">
        <CenteredContent>
          <div className="relative mb-16 md:mb-[64px]">
            <FadeInUp>
              <PageTitle className="pt-[60px] mb-6 md:mb-8">
                Accelerating Subnet Adoption.
                <br />
                Building the TAO EcoSystem
              </PageTitle>
            </FadeInUp>
          </div>

          <FadeInUp delay={0.2}>
            <IntroText className="mb-16 md:mb-[64px]">
              Our vision is a future where decentralised AI seamlessly integrates with everyday life, empowering individuals and enterprises through autonomous, and collaborative technologies.
            </IntroText>
          </FadeInUp>

          <div className="flex flex-col md:flex-row gap-12 md:gap-16">
            {/* Main Content - 2/3 width */}
            <div className="w-full">
              <FadeInUp delay={0.3}>
                <BodyText className="space-y-6 md:space-y-8">
                  <p>
                    Our mission is to drive the long-term success of the Bittensor ecosystem by actively building, innovating, and improving the space. We achieve this through working on essential tooling, building strategic and corporate partnerships, and accelerating global adoption of decentralised AI solutions.
                  </p>

                  {/* Driving enterprise adoption section from BusinessContent */}
                  <div className="mt-16">
                    <FadeInUp delay={0.4}>
                      <PageSubtitle className="mb-6 md:mb-8">
                        Our services
                      </PageSubtitle>
                    </FadeInUp>
                    <FadeInUp delay={0.5}>
                      <BodyText className="space-y-6 md:space-y-8 mb-12 md:mb-16">
                        <p>
                          We champion decentralised AI by helping subnets find product-market fit and drive real-world adoption. Our focus is on enhancing interoperability, building partnerships, and making complex technologies accessible and valuable for everyday business use.
                        </p>
                        {/* Services Section: SmallColumn-style list and animated carousel */}
                        <div className="mt-12 flex flex-col md:flex-row gap-8 md:gap-16 items-stretch">
                          {/* SmallColumn-style clickable list */}
                          <div className="bg-white dark:bg-[#061C2B] rounded-lg shadow p-8 md:p-12 max-w-[400px] w-full flex flex-col justify-center transition-all duration-500 ml-[-48px] mr-[-48px]" style={{opacity: 1, transform: `scale(1)`, boxShadow: '0 8px 32px rgba(0,0,0,0.10)'}}>
                            <div className="mb-6 text-[17px] text-[#021019] dark:text-[var(--foreground)]">
                              Unlock the power of TAO with expert mining setups, smart funding, and hands-on support.
                              <br />
                              Grow, innovate, and achieve financial freedom—let's get started.
                            </div>
                            <ul className="space-y-3">
                              {services.map((service, idx) => (
                                <li key={service.key}>
                                  <Link
                                    href={service.href}
                                    className="w-full text-left font-medium text-[18px] md:text-[20px] flex items-center gap-2 transition-colors service-list-item hover:underline"
                                    style={{fontWeight: 500}}
                                    onMouseEnter={() => setActiveIndex(idx)}
                                  >
                                    {service.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {/* Animated Carousel */}
                          <div className="flex-1 flex flex-col items-center justify-center relative min-h-[420px] ml-[-48px] mr-[-48px]">
                            <div className="relative w-full max-w-[900px] h-[420px] mx-auto flex items-center">
                              {/* Service Cards (2 visible, animated, mesh image centered) */}
                              <div className="flex w-full justify-center items-center relative">
                                {visibleIndices.map((idx, i) => {
                                  const service = services[idx];
                                  const isFront = i === 0;
                                  const isBehind = i === 1;
                                  return (
                                    <Link
                                      key={service.key}
                                      href={service.href}
                                      className={`absolute card-animate cursor-pointer ${isFront ? 'z-20 left-1/2 -translate-x-[60%] scale-100 opacity-100' : 'z-10 left-1/2 -translate-x-[10%] scale-110 card-behind-fade'}`}
                                      style={{
                                        width: isFront ? 400 : 480,
                                        height: 420,
                                        borderRadius: 2,
                                        background: service.color,
                                        boxShadow: isFront ? '0 8px 32px rgba(0,0,0,0.18)' : '0 4px 16px rgba(0,0,0,0.10)',
                                        pointerEvents: isFront ? 'auto' : 'none',
                                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', overflow: 'hidden',
                                        padding: 48,
                                        transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.5s cubic-bezier(0.4,0,0.2,1)',
                                        opacity: isFront ? 1 : 0.5,
                                      }}
                                    >
                                      <div className="w-full flex justify-center mb-10">
                                        <Image src={service.visual} alt="Mesh visual" width={240} height={240} style={{borderRadius: 2}} />
                                      </div>
                                      <span className="text-xl text-white mb-2 block text-center" style={{fontWeight: 500}}>{service.label}</span>
                                      <span className="text-white text-center px-4 block mb-10" style={{fontWeight: 400, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'normal', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}>{service.description}</span>
                                    </Link>
                                  );
                                })}
                                {/* Left arrow */}
                                <button
                                  className="absolute left-0 top-1/2 -translate-y-1/2 z-30 arrow-btn"
                                  onClick={() => setActiveIndex((activeIndex - 1 + services.length) % services.length)}
                                  aria-label="Previous service"
                                  style={{left: '92px'}}
                                >
                                  <Image
                                    src="/icons/icon_arrow_left.svg"
                                    alt="Previous"
                                    width={32}
                                    height={32}
                                    className="arrow-icon"
                                    priority
                                  />
                                </button>
                                {/* Right arrow */}
                                <button
                                  className="absolute right-0 top-1/2 -translate-y-1/2 z-30 arrow-btn"
                                  onClick={() => setActiveIndex((activeIndex + 1) % services.length)}
                                  aria-label="Next service"
                                  style={{right: '92px'}}
                                >
                                  <Image
                                    src="/icons/icon_arrow_right.svg"
                                    alt="Next"
                                    width={32}
                                    height={32}
                                    className="arrow-icon"
                                    priority
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </BodyText>
                    </FadeInUp>
                  </div>
                  {/* Duplicate section */}
                  <div className="mt-16">
                    <FadeInUp delay={0.6}>
                      <PageSubtitle className="mb-6 md:mb-8">
                        Why choose us
                      </PageSubtitle>
                    </FadeInUp>
                    <FadeInUp delay={0.7}>
                      <BodyText className="space-y-6 md:space-y-8 mb-12 md:mb-16">
                      <p>
                        Neuralteq has a skilled team of data scientists, developers, crypto native degens, and sales leaders who have been actively involved in crypto since 2016, and within the Bittensor ecosystem since 2022. By combining work in Validating, Mining, Trading, Business Development, and Research, we are able to create valuable synergy, resulting in cross-pollination, providing unique insights that enhance each facet of our work.
                      </p>

                      <p>
                        Our combined approach enables us to strategically identify and promote high-quality subnets, improve our business development focus, and advance our research capabilities, driving impactful outcomes for our stakers, clients and partners.
                      </p>
                      </BodyText>
                    </FadeInUp>
                  </div>
                </BodyText>
              </FadeInUp>
            </div>
          </div>
        </CenteredContent>
      </main>
      <div className="mt-10">
        <Footer />
      </div>
      <style jsx>{`
        .service-list-item {
          transition: background 0.3s, color 0.3s;
        }
        .card-animate {
          transition: all 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        .card-behind-fade {
          opacity: 0.5;
          animation: fadeInBehind 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeInBehind {
          from { opacity: 0; }
          to { opacity: 0.5; }
        }
        .arrow-btn {
          background: rgba(255,255,255,0.8);
          border-radius: 9999px;
          padding: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.10);
          transition: background 0.2s, box-shadow 0.2s, outline 0.2s, border 0.2s;
          border: 2px solid transparent;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .arrow-btn:hover {
          background: #ECFBFA;
          border: 2px solid #ECFBFA;
          box-shadow: 0 0 0 2px #ECFBFA33;
          outline: 2px solid #ECFBFA;
          outline-offset: 2px;
        }
        .arrow-icon {
          filter: invert(0%);
        }
        @media (prefers-color-scheme: dark) {
          .arrow-btn {
            background: rgba(2,16,25,0.8);
          }
          .arrow-icon {
            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(2);
          }
          .arrow-btn:hover {
            background: #021019;
            border: 2px solid #ECFBFA;
            box-shadow: 0 0 0 2px #ECFBFA33;
            outline: 2px solid #ECFBFA;
            outline-offset: 2px;
          }
        }
      `}</style>
    </div>
  );
} 