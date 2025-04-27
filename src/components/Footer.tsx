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

  return (
    <footer className="footer mb-10">
      {!hideMesh && (
      <div className="footer-mesh">
        <Image
          src="/visuals/mesh_orange.png"
          alt="Mesh Background"
          width={88}
          height={88}
            quality={90}
            sizes="80px"
          className="w-[80px] h-[80px]"
        />
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
                className="text-[12px] md:text-[14px] text-[var(--foreground)] link"
                {...(link.name === 'Privacy Policy' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="text-[12px] md:text-[14px] text-[var(--foreground)]">
            ©{currentYear} Neuralteq. All rights reserved.
          </div>
        </div>
      </CenteredContent>
    </footer>
  );
} 