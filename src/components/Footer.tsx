'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CenteredContent from './layouts/CenteredContent';
import SocialIcons from './SocialIcons';

interface FooterProps {
  hideMesh?: boolean;
}

const footerLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Get in touch', href: 'mailto:info@neuralteq.com' },
];

export default function Footer({ hideMesh = false }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [mounted, setMounted] = React.useState(false);
  const [isDark, setIsDark] = React.useState(true);
  const pathname = usePathname();
  let elementSrc = '';
  if (pathname === '/privacy') elementSrc = '/visuals/element_Why@2x.png';
  else if (pathname.startsWith('/validator')) elementSrc = '/visuals/element_Validator@2x.png';
  else if (pathname.startsWith('/business-development')) elementSrc = '/visuals/element_Business@2x.png';
  else if (pathname.startsWith('/mining')) elementSrc = '/visuals/element_Mining@2x.png';
  else if (pathname.startsWith('/fund')) elementSrc = '/visuals/element_Fund@2x.png';
  else if (pathname.startsWith('/research')) elementSrc = '/visuals/element_Research@2x.png';
  else if (pathname.startsWith('/why-us') || pathname === '/' || pathname.startsWith('/index') || pathname.startsWith('/animation')) elementSrc = '/visuals/element_Why@2x.png';

  React.useEffect(() => {
    setMounted(true);
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

  return (
    <footer className="footer relative mb-10" style={{ color: isDark ? '#ECFBFA' : '#021019' }}>
      <div className="footer-mesh flex justify-center mb-12 md:mb-20">
        {/* Show element visual based on page */}
        {(() => {
          if (!elementSrc) return null;
          return (
        <Image
              src={elementSrc}
              alt="Footer Visual"
              width={60}
              height={60}
              quality={100}
              priority
              className="w-[60px] h-[60px] object-contain rounded-full"
        />
          );
        })()}
      </div>
      <div className="block md:hidden mb-8">
        <SocialIcons isFooter />
      </div>
      <CenteredContent>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="flex gap-4 md:gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                  className="text-[12px] md:text-[14px] link"
                style={{ color: isDark ? '#ECFBFA' : '#021019' }}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="text-[12px] md:text-[14px]" style={{ color: isDark ? '#ECFBFA' : '#021019' }}>
            © {currentYear} - Neuralteq. All rights reserved.
          </div>
        </div>
      </CenteredContent>
    </footer>
  );
} 