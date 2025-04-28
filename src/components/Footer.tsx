'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CenteredContent from './layouts/CenteredContent';
import SocialIcons from './SocialIcons';

interface FooterProps {
  hideMesh?: boolean;
}

const footerLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Get in touch', href: 'mailto:roger@neuralteq.com' },
];

export default function Footer({ hideMesh = false }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [mounted, setMounted] = React.useState(false);
  const [isDark, setIsDark] = React.useState(true);

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
    <footer className="footer mb-10" style={{ color: '#ECFBFA' }}>
      {!hideMesh && mounted && (
      <div className="footer-mesh">
        {isDark ? (
          <video
            src="/visuals/mesh_orange_dark_50.mp4"
            autoPlay
            loop
            muted
            playsInline
            width={80}
            height={80}
            className="w-[80px] h-[80px] object-cover rounded-full"
          />
        ) : (
          <Image
            src="/visuals/mesh_orange_light.png"
            alt="Mesh Background"
            width={80}
            height={80}
            quality={100}
            sizes="80px"
            className="w-[80px] h-[80px]"
          />
        )}
        </div>
      )}
      <div className="md:hidden flex justify-center my-8">
        <SocialIcons className="flex md:hidden" />
      </div>
      <CenteredContent>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="flex gap-4 md:gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[12px] md:text-[14px] link"
                style={{ color: '#ECFBFA' }}
                {...(link.name === 'Privacy Policy' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="text-[12px] md:text-[14px]" style={{ color: '#ECFBFA' }}>
            ©{currentYear} Neuralteq. All rights reserved.
          </div>
        </div>
      </CenteredContent>
    </footer>
  );
} 