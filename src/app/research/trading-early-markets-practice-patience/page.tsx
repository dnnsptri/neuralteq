"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import CenteredContent from '@/components/layouts/CenteredContent';
import { PageTitle, PageSubtitle, IntroText, BodyText } from '@/components/typography';
import Footer from '@/components/Footer';
import FadeInUp from '@/components/motion/FadeInUp';
import { supabase } from '../../../../lib/supabaseClient';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export default function HowToPickBittensorSubnetsPage() {
  const [item, setItem] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItem = async () => {
      const { data, error } = await supabase
        .from('neuralteq_research')
        .select('*')
        .eq('slug', 'trading-early-markets-practice-patience')
        .maybeSingle();
      if (error) setError(error.message);
      setItem(data);
      setLoading(false);
    };
    fetchItem();
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
                  <span className="text-xs uppercase tracking-wide bg-[#021019] text-[#ECFBFA] px-2 py-1 rounded mb-4 inline-block border border-[#ECFBFA]">
                    {item?.category}
                  </span>
                  <PageTitle className="pt-[60px] mb-6 md:mb-8">{item?.title}</PageTitle>
                </div>
                {item?.subtitle && (
                  <PageSubtitle className="mb-4">{item.subtitle}</PageSubtitle>
                )}
                {item?.intro && (
                  <IntroText className="mb-8">{item.intro}</IntroText>
                )}
              </div>
              {item?.image_url && (
                <div className="w-[400px] h-[400px] flex-shrink-0 flex items-center justify-center bg-[#021019] rounded-[4px]">
                  <Image
                    src={item.image_url}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          </FadeInUp>
        </CenteredContent>
        <CenteredContent>
          <FadeInUp delay={0.0}>
            <BodyText className="space-y-6 md:space-y-8 mb-8">
              {loading && <div>Loading...</div>}
              {error && <div className="text-red-500">{error}</div>}
              {item?.content && (
                <div className="markdown-body">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                      h2: ({node, children, ...props}) => <PageTitle className="page-title" {...props}>{children}</PageTitle>,
                      h3: ({node, children, ...props}) => <PageSubtitle className="page-subtitle" {...props}>{children}</PageSubtitle>,
                      p: ({node, children, ...props}) => <BodyText className="body-text" {...props}>{children}</BodyText>,
                      ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4" {...props} />,
                      ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4" {...props} />,
                      li: ({node, ...props}) => <li className="mb-2" {...props} />,
                      a: ({node, ...props}) => <a className="link" target="_blank" rel="noopener noreferrer" {...props} />,
                    }}
                  >
                    {item.content}
                  </ReactMarkdown>
                </div>
              )}
            </BodyText>
          </FadeInUp>
        </CenteredContent>
      </main>
      <div className="mt-24 md:mt-16 z-50">
        <Footer />
      </div>
    </div>
  );
} 