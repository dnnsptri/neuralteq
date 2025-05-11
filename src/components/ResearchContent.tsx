'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CenteredContent from './layouts/CenteredContent';
import { PageTitle, PageSubtitle, IntroText, BodyText } from './typography';
import Footer from './Footer';
import FadeInUp from './motion/FadeInUp';

// Types for blog items
interface BlogItem {
  id: string;
  title: string;
  category: string;
  description: string;
  author: string;
  img?: string;
  slug: string;
}

// Custom hook for fetching blog items (placeholder for Notion integration)
function useBlogItems() {
  const [items, setItems] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // TODO: Replace with Notion API fetch
    const fetchItems = async () => {
      try {
        // Simulating API call
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Placeholder data - will be replaced with Notion data
        const mockItems: BlogItem[] = [
          {
            id: '1',
            title: 'How to Pick Bittensor Subnets?',
            category: 'tao',
            description: 'The Bittensor network is a game changer in the development, deployment, and monetisation of artificial intelligence. It rapidly scales the development of open source AI by using subnets. Subnets are specialized networks, focusing on specific AI use cases while leveraging distributed computing power.',
            author: 'Neuralteq Fund',
            img: '/visuals/visual_how_to_pick@2x.png',
            slug: 'how-to-pick-bittensor-subnets'
          },
          {
            id: '2',
            title: 'How to build a dynamic $TAO portfolio - Part 1',
            category: 'tao',
            description: 'How to build a dynamic $TAO portfolio that gives you enough exposure to profit from upswings, while still having enough "dry powder" to buy potential dips? Building a portfolio is a fine art, a skill to master, not something you just learn over time, and certainly not something to take lightly.',
            author: 'Neuralteq Fund',
            img: '/visuals/mesh_orange@2x.png',
            slug: 'how-to-build-dynamic-tao-portfolio-part-1'
          },
          {
            id: '3',
            title: 'How to build a dynamic $TAO portfolio - Part 2',
            category: 'tao',
            description: 'Subnet Use Cases and Balanced Exposure. In our previous post we discussed $dTAO specific to take into account when building your portfolio, Emission, Subnet teams, Dilution risks and more. These are important in understanding the #Bittensor protocol dynamics and help to paint a picture on what kind of ...',
            author: 'Neuralteq Fund',
            img: '/visuals/mesh_orange@2x.png',
            slug: 'how-to-build-dynamic-tao-portfolio-part-2'
          },
          {
            id: '4',
            title: '6 weeks in dynamic TAO, how is root proportion holding up?',
            category: 'tao',
            description: 'What is it, and why does it matter? Bittensor subnets launch with 1 Alpha token supply. From there, each block emits 2 Alpha per subnet, while 1 $TAO total is split across all subnets based on their emission percentage.',
            author: 'Neuralteq Fund',
            img: '/visuals/mesh_orange@2x.png',
            slug: '6-weeks-in-dynamic-tao-root-proportion'
          },
        ];

        setItems(mockItems);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch blog items');
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return { items, loading, error };
}

export default function ResearchContent() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { items: blogItems, loading, error } = useBlogItems();

  // Blog filter logic
  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Dynamic TAO Research', value: 'tao' },
    { label: 'Trade Setups', value: 'trade' },
    { label: 'AI research', value: 'ai' },
  ];
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = activeFilter === 'all' ? blogItems : blogItems.filter(item => item.category === activeFilter);

  useEffect(() => {
    // Ensure video plays
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="w-full flex justify-center fixed top-0 left-0 right-0 -z-10">
        <div className="relative w-full max-w-[1360px]">
          <Image
            src="/visuals/bg_research.png"
            alt="Research Background"
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
          <div className="relative mb-8 md:mb-[64px]">
            {/* Removed mesh background here */}
            <FadeInUp>
              <PageTitle className="pt-[60px] mb-6 md:mb-8">
                Researching the Next Era of AI
              </PageTitle>
            </FadeInUp>
          </div>

          {/* Mobile Mesh */}
          {/* Removed mesh video for mobile */}

          <FadeInUp delay={0.2}>
            <IntroText className="mb-16 md:mb-[64px]">
              Neuralteq Research is our cutting edge, decentralized AI research unit. With strong roots in crypto and involved in the Bittensor ecosystem since the early beginnings, Neuralteq leverages crypto native insights, quantitative strategies and subnet analysis to deliver actionable, high impact research reports.
            </IntroText>
          </FadeInUp>

        </CenteredContent>
        {/* Filter bar section */}
        <div style={{ background: 'transparent', width: '100%' }}>
          <CenteredContent>
            <div className="flex gap-6 md:gap-12 pt-8 overflow-x-auto">
              {filters.map(f => (
                <button
                  key={f.value}
                  className={`text-[15px] md:text-[17px] font-light pb-2 px-2 border-b-2 transition-all duration-200 ${activeFilter === f.value ? 'border-[#EF6C00] text-[#ECFBFA]' : 'border-transparent text-[#ECFBFA] hover:text-[#ECFBFA]'}`}
                  onClick={() => setActiveFilter(f.value)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </CenteredContent>
        </div>
        {/* Blog filter and list section */}
        <div style={{ background: '#ECFBFA', width: '100%' }}>
          <CenteredContent>
            {/* Loading state */}
            {loading && (
              <div className="py-8 text-center">
                <p className="text-[#021019]">Loading research articles...</p>
              </div>
            )}

            {/* Error state */}
            {error && (
              <div className="py-8 text-center">
                <p className="text-red-500">{error}</p>
              </div>
            )}

            {/* Blog items */}
            {!loading && !error && (
              <div className="py-8">
                {filteredItems.map((item, idx) => (
                  <React.Fragment key={item.id}>
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-[#ECFBFA] pt-8 pb-8 px-0 rounded-lg">
                      <div className="flex-1">
                        <h2 className="text-[28px] font-semibold mb-2 text-[#021019]">{item.title}</h2>
                        <p className="text-[18px] text-[#021019] mb-4">{item.description}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-[16px] text-[#021019]/80">By {item.author}</span>
                          <Link 
                            href={`/research/${item.slug}`}
                            className="text-[#EF6C00] hover:text-[#021019] hover:underline transition-colors duration-200 ml-4"
                          >
                            Read More {'>'}
                          </Link>
                        </div>
                      </div>
                      <Link 
                        href={`/research/${item.slug}`}
                        className="w-[200px] h-[200px] flex-shrink-0 flex items-center justify-center bg-[#021019] rounded-[4px] hover:opacity-90 transition-opacity duration-200"
                      >
                        <Image 
                          src={item.img || '/visuals/mesh_orange@2x.png'} 
                          alt={item.title} 
                          width={160} 
                          height={160} 
                          className="object-contain" 
                        />
                      </Link>
                    </div>
                    {idx !== filteredItems.length - 1 && (
                      <div className="h-px bg-[#D6E4E3] my-8" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}
          </CenteredContent>
        </div>
      </main>
      <div className="mt-24 md:mt-16 z-50">
        <Footer />
      </div>
    </div>
  );
} 