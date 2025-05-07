'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const footerLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Get in touch', href: 'mailto:roger@neuralteq.com' },
];

export default function FooterText() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isPrivacyPage = pathname === '/privacy';
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-transparent z-50" style={{pointerEvents: 'none'}}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 px-6 py-3" style={{pointerEvents: 'auto'}}>
        <div className="flex gap-4 md:gap-6">
          {footerLinks.map((link) => {
            if (isPrivacyPage && link.name === 'Privacy Policy') {
              return (
                <span
                  key={link.name}
                  className="text-[12px] md:text-[14px]"
                  style={{ color: '#021019' }}
                >
                  {link.name}
                </span>
              );
            }
            return (
              <Link
                key={link.name}
                href={link.href}
                className="text-[12px] md:text-[14px] link"
                style={{ color: isPrivacyPage ? '#021019' : '#ECFBFA' }}
                {...(link.name === 'Privacy Policy' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="text-[12px] md:text-[14px]" style={{ color: isPrivacyPage ? '#021019' : '#ECFBFA' }}>
          ©{currentYear} Neuralteq. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 