'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CenteredContent from './layouts/CenteredContent';
import { PageTitle, PageSubtitle, IntroText, BodyText } from './typography';
import Footer from './Footer';
import FadeInUp from './motion/FadeInUp';
import { supabase } from '../../lib/supabaseClient';

// Types for blog items
interface BlogItem {
  id: string;
  title: string;
  subtitle?: string;
  intro?: string;
  category: string;
  description?: string;
  author: string;
  img?: string;
  slug: string;
  content?: string;
}

// Custom hook for fetching blog items (placeholder for Notion integration)
function useBlogItems() {
  const [items, setItems] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data, error } = await supabase
          .from('neuralteq_research')
          .select('*')
          .order('id', { ascending: true });
        console.log('Supabase data:', data, 'Supabase error:', error);
        if (error) throw error;
        if (data) {
          const supabaseItems: BlogItem[] = data.map((item: any) => ({
            id: item.id?.toString() ?? '',
            title: item.title,
            subtitle: item.subtitle,
            intro: item.intro,
            category: item.category?.toLowerCase(),
            description: item.description,
            author: item.author,
            img: item.image_url,
            slug: item.slug,
            content: item.content,
          }));
          setItems(supabaseItems);
        } else {
          setItems([]);
        }
        setLoading(false);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch blog items');
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
    { label: 'AI', value: 'ai' },
    { label: 'dTAO', value: 'dtao' },
    { label: 'Market updates', value: 'updates' },
    { label: 'Investing', value: 'investing' },
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
            <div className="relative">
              <div className="flex gap-4 md:gap-12 pt-8 overflow-x-auto whitespace-nowrap px-2">
                {filters.map(f => (
                  <button
                    key={f.value}
                    className={`flex-shrink-0 text-[15px] md:text-[17px] font-light pb-2 px-2 transition-all duration-200 ${activeFilter === f.value ? 'border-b-4 border-[#EF6C00] text-[#ECFBFA]' : 'border-b-2 border-transparent text-[#ECFBFA] hover:text-[#ECFBFA]'}`}
                    onClick={() => setActiveFilter(f.value)}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
              {/* Gradient overlay, only on mobile */}
              <div className="pointer-events-none absolute right-0 top-0 h-full w-12 md:hidden z-20" style={{background: 'linear-gradient(to left, rgba(2,16,25,0.8) 0%, transparent 80%)'}} />
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
                      <div className="flex-1 w-full">
                        <h2 className="text-[28px] font-semibold mb-2 text-[#021019]">{item.title}</h2>
                        {item.subtitle && <h3 className="text-[20px] font-semibold mb-2 text-[#021019]">{item.subtitle}</h3>}
                        {item.intro && <p className="text-[18px] text-[#021019] mb-4">{item.intro}</p>}
                        {/* Mobile image between title and description */}
                        <Link 
                          href={`/research/${item.slug}`}
                          className="block md:hidden w-full my-4 bg-[#021019] rounded-[4px] p-4"
                        >
                          <Image 
                            src={item.img || '/visuals/mesh_orange@2x.png'} 
                            alt={item.title} 
                            width={400} 
                            height={400} 
                            className="object-contain w-full h-auto" 
                          />
                        </Link>
                        <p className="text-[18px] text-[#021019] mb-4">{item.description}</p>
                        <div className="h-2 block md:hidden" />
                        <div className="flex flex-row md:flex-row items-center gap-2 md:gap-3 mt-2 w-full">
                          <span className="text-xs uppercase tracking-wide bg-[#021019] text-[#ECFBFA] px-2 py-1 rounded mr-1">{item.category}</span>
                          <span className="text-[16px] text-[#021019]/80 truncate">By {item.author}</span>
                          <Link 
                            href={`/research/${item.slug}`}
                            className="text-[#EF6C00] hover:text-[#021019] hover:underline transition-colors duration-200 ml-0 md:ml-4 whitespace-nowrap"
                          >
                            Read More {'>'}
                          </Link>
                        </div>
                      </div>
                      {/* Desktop image on the right */}
                      <Link 
                        href={`/research/${item.slug}`}
                        className="hidden md:flex w-[200px] h-[200px] flex-shrink-0 items-center justify-center bg-[#021019] rounded-[4px]"
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