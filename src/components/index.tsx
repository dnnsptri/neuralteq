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
      color: '#1B212F',
      visual: '/visuals/element_Validator@2x.png',
      description: 'Secure, reliable validation for the Bittensor network'
    },
    {
      key: 'business',
      label: 'Business Development',
      href: '/business-development',
      color: '#0F1D2F',
      visual: '/visuals/element_Business@2x.png',
      description: 'Accelerating Subnet Adoption. Building the TAO Ecosystem'
    },
    {
      key: 'mining',
      label: 'Mining',
      href: '/mining',
      color: '#181728',
      visual: '/visuals/element_Mining@2x.png',
      description: 'High-performance mining operations and insights'
    },
    {
      key: 'research',
      label: 'Research',
      href: '/research',
      color: '#192022',
      visual: '/visuals/element_Research@2x.png',
      description: 'Cutting-edge research and innovation in decentralized AI'
    },
    {
      key: 'fund',
      label: 'Neuralteq Fund',
      href: '/fund',
      color: '#0F2729',
      visual: '/visuals/element_Fund@2x.png',
      description: 'Crypto-Native. Research-Driven. Capital-Conservative'
    },
    {
      key: 'why',
      label: 'Why us',
      href: '/why-us',
      color: '#1B1D1B',
      visual: '/visuals/element_Why@2x.png',
      description: 'Driving impactful outcomes. For stakers, clients & partners'
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoAdvanceRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDark(document.documentElement.classList.contains('dark'));
        }
      });
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Ensure video plays
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  useEffect(() => {
    if (autoAdvanceRef.current) clearInterval(autoAdvanceRef.current);
    if (!isHovering && !isTransitioning) {
      autoAdvanceRef.current = setInterval(() => {
        setIsTransitioning(true);
      setActiveIndex((prev) => (prev + 1) % services.length);
        setTimeout(() => setIsTransitioning(false), 700); // Match transition duration
    }, 4000);
    }
    return () => {
      if (autoAdvanceRef.current) clearInterval(autoAdvanceRef.current);
    };
  }, [services.length, isHovering, isTransitioning]);

  const handlePauseAutoAdvance = () => {
    setIsHovering(true);
    if (autoAdvanceRef.current) clearInterval(autoAdvanceRef.current);
  };

  const handleResumeAutoAdvance = () => {
    setIsHovering(false);
  };

  const handleServiceHover = (index: number) => {
    if (index !== activeIndex) {
      setIsTransitioning(true);
      setActiveIndex(index);
      setTimeout(() => setIsTransitioning(false), 700); // Match transition duration
    }
    handlePauseAutoAdvance();
  };

  const handleServiceLeave = () => {
    handleResumeAutoAdvance();
  };

  const handleCardClick = (index: number) => {
    setIsTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 700); // Match transition duration
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setActiveIndex((activeIndex + 1) % services.length);
    }
    if (isRightSwipe) {
      setActiveIndex((activeIndex - 1 + services.length) % services.length);
    }

    setTouchEnd(0);
    setTouchStart(0);
  };

  // Helper to get the visible trio of cards
  const getVisibleIndices = () => {
    if (services.length <= 2) return [0, 1, 2];
    const prev = (activeIndex - 1 + services.length) % services.length;
    const curr = activeIndex;
    const next = (activeIndex + 1) % services.length;
    return [prev, curr, next];
  };
  const visibleIndices = getVisibleIndices();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Background Image */}
      <div className="w-full flex justify-center fixed top-0 left-0 right-0 -z-10">
        <div className="relative w-full max-w-[1360px]">
          <Image
            src="/visuals/bg_index.png"
            alt="Business Background"
            width={1360}
            height={520}
            quality={100}
            priority
            className="object-contain object-center w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--background)] pointer-events-none" />
        </div>
      </div>
      <main className="mt-24 md:mt-48 flex-1">
        <CenteredContent>
          <div className="relative mb-16 md:mb-[64px]">
            <FadeInUp>
              <PageTitle className="pt-[60px] mb-6 md:mb-8">
                Neuralteq: Accelerating Subnet Adoption. Building the TAO Ecosystem
              </PageTitle>
            </FadeInUp>
          </div>

          <FadeInUp delay={0.2}>
            <IntroText className="mb-16 md:mb-[64px]">
              Our vision is a future where decentralized AI seamlessly integrates with everyday life, empowering individuals and businesses through autonomous, and collaborative technologies.
            </IntroText>
          </FadeInUp>

          <div className="flex flex-col md:flex-row gap-12 md:gap-16">
            {/* Main Content - 2/3 width */}
            <div className="w-full content-box">
              <FadeInUp delay={0.0}>
                <BodyText className="space-y-6 md:space-y-8">
                  <p className="mb-16">
                    Our mission is to drive long-term success for the Bittensor ecosystem by actively building, innovating, and improving the space. We achieve this through working on essential tooling, building strategic and corporate partnerships, and accelerating global adoption of decentralized AI solutions.<br /><br /><br />
                  </p>

                  {/* Driving enterprise adoption section from BusinessContent */}
                  <div className="mt-16">
                    <FadeInUp delay={0.0}>
                      <BodyText className="space-y-6 md:space-y-8 mb-12 md:mb-32">
                        {/* Services Section: SmallColumn-style list and animated carousel */}
                        <div className="mt-12 flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
                          {/* SmallColumn-style clickable list - now always first */}
                          <PageSubtitle className="block md:hidden mb-6 text-center mt-[-96px]">Dive deeper in what Neuralteq is all about:</PageSubtitle>
                          <div className={`hidden md:block bg-white dark:bg-[#061C2B] ${isDark ? 'shadow' : ''} p-8 md:p-12 max-w-[400px] w-full flex flex-col justify-center transition-all duration-500 mx-auto mt-[-96px] md:mt-4`} style={{opacity: 1, transform: `scale(1)`, borderRadius: '20px'}}>
                            <div className="mb-6 text-[20px] text-[#021019] dark:text-[var(--foreground)] text-left">
                              Dive deeper in what Neuralteq is all about:
                            </div>
                            <ul className="space-y-3 flex flex-col items-start">
                              {services.map((service, idx) => (
                                <li key={service.key} className="w-full">
                                  <Link
                                    href={service.href}
                                    className={`text-[18px] md:text-[20px] transition-colors hover:underline text-left block w-full text-left ${activeIndex === idx ? 'text-[#021019] dark:text-[var(--foreground)] font-semibold' : ''}`}
                                    style={{fontWeight: 500}}
                                    onMouseEnter={() => handleServiceHover(idx)}
                                    onMouseLeave={handleServiceLeave}
                                    onFocus={() => handleServiceHover(idx)}
                                    onBlur={handleServiceLeave}
                                  >
                                    {service.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {/* Animated Carousel - always second */}
                          <div className="flex-1 flex flex-col items-center justify-center relative min-h-[420px] md:ml-[-48px] md:mr-[-48px]">
                            <div className="relative w-full max-w-[900px] h-[420px] mx-auto flex items-center">
                              {/* Service Cards (3 visible, animated, mesh image centered) */}
                              <div 
                                className="flex w-full justify-center items-center relative"
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                                onMouseEnter={handlePauseAutoAdvance}
                                onMouseLeave={handleResumeAutoAdvance}
                              >
                                {/* Navigation Arrows - Desktop Only */}
                                <div className="hidden md:flex absolute left-0 right-0 top-1/2 -translate-y-1/2 justify-between px-[100px] z-50">
                                  <button 
                                    onClick={() => {
                                      setIsTransitioning(true);
                                      setActiveIndex((activeIndex - 1 + services.length) % services.length);
                                      setTimeout(() => setIsTransitioning(false), 700);
                                    }}
                                    className="arrow-btn"
                                    aria-label="Previous service"
                                  >
                                    <svg className="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                      <path d="M15 18l-6-6 6-6" />
                                    </svg>
                                  </button>
                                  <button 
                                    onClick={() => {
                                      setIsTransitioning(true);
                                      setActiveIndex((activeIndex + 1) % services.length);
                                      setTimeout(() => setIsTransitioning(false), 700);
                                    }}
                                    className="arrow-btn"
                                    aria-label="Next service"
                                  >
                                    <svg className="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                      <path d="M9 18l6-6-6-6" />
                                    </svg>
                                  </button>
                                </div>

                                {visibleIndices.map((idx, i) => {
                                  const service = services[idx];
                                  let cardClass = '';
                                  if (i === 1) cardClass = 'front';
                                  else if (i === 2) cardClass = 'behind';
                                  else if (i === 0) cardClass = 'from-behind';

                                  let style = {
                                    width: typeof window !== 'undefined' && window.innerWidth <= 768 ? 280 : 320,
                                    height: typeof window !== 'undefined' && window.innerWidth <= 768 ? 440 : 480,
                                    padding: typeof window !== 'undefined' && window.innerWidth <= 768 ? 24 : 40,
                                    borderRadius: 20,
                                    background: service.color,
                                    boxShadow: cardClass === 'front' ? '0 8px 32px rgba(0,0,0,0.18)' : '0 4px 16px rgba(0,0,0,0.10)',
                                    pointerEvents: cardClass === 'front' ? 'auto' : 'none',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    overflow: 'hidden',
                                    transition: 'all 0.7s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
                                    opacity: cardClass === 'front' ? 1 : (cardClass === 'behind' ? 0.70 : 0),
                                    zIndex: cardClass === 'front' ? 20 : (cardClass === 'behind' ? 10 : 0),
                                    position: 'absolute',
                                    left: '50%',
                                    transform: cardClass === 'front'
                                      ? 'translateX(-50%) scale(1)'
                                      : cardClass === 'behind'
                                        ? 'translateX(-50%) scale(0.85) translateX(30%)'
                                        : 'translateX(-50%) scale(0.85) translateX(-30%)',
                                  };

                                  return (
                                    <Link
                                      key={service.key}
                                      href={service.href}
                                      className={`absolute card-animate cursor-pointer touch-pan-y ${cardClass}`}
                                      style={style as React.CSSProperties}
                                    >
                                      <div className="w-full flex justify-center mb-10">
                                        <Image src={service.visual} alt="Mesh visual" width={220} height={220} style={{borderRadius: 2, width: 220, height: 220}} />
                                      </div>
                                      <span className="text-xl text-white mb-2 block text-center" style={{fontWeight: 500}}>{service.label}</span>
                                      <span className="text-[16px] text-white text-center px-4 block mb-4" style={{fontWeight: 300}}>{service.description}</span>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </BodyText>
                    </FadeInUp>
                  </div>
                  {/* Why us section */}
                  <div className="mt-24">
                    <FadeInUp delay={0.0}>
                      <PageSubtitle className="mb-6 md:mb-8">
                        Why us
                      </PageSubtitle>
                    </FadeInUp>
                    <FadeInUp delay={0.0}>
                      <BodyText className="space-y-6 md:space-y-8">
                      <p>
                        Neuralteq has a skilled team of data scientists, developers, crypto natives and sales leaders who have been actively involved in crypto since 2016, and within the Bittensor ecosystem since 2022. By combining work in Validating, Mining, Trading, Business Development, and Research, we are able to create valuable synergy, resulting in cross-pollination, providing unique insights that enhance each facet of our work.
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
      <div className="mt-24 md:mt-16 z-50">
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
          background: rgba(236,251,250,1);
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
          background: #021019;
          box-shadow: 0 0 0 2px #ECFBFA33;
          outline: 2px solid #ECFBFA;
          outline-offset: 2px;
        }
        .arrow-btn .arrow-icon {
          color: #021019;
          transition: color 0.2s;
        }
        .arrow-btn:hover .arrow-icon {
          color: #ECFBFA;
        }
        :global(html.dark) .arrow-btn {
            background: rgba(2,16,25,1);
          }
        :global(html.dark) .arrow-btn:hover {
            background: #021019;
            box-shadow: 0 0 0 2px #ECFBFA33;
            outline: 2px solid #ECFBFA;
            outline-offset: 2px;
          }
        :global(html.dark) .arrow-btn .arrow-icon {
          color: #ECFBFA;
        }
      `}</style>
    </div>
  );
} 