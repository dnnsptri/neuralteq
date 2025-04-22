'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CenteredContent from './layouts/CenteredContent';

const footerLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Get in touch', href: 'mailto:roger@neuralteq.com' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-mesh">
        <Image
          src="/mesh_orange.png"
          alt="Mesh Background"
          width={88}
          height={88}
          className="w-[80px] h-[80px]"
        />
      </div>
      <CenteredContent>
        <div className="footer-content">
          <div className="footer-links">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="footer-link"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="footer-copyright">
            © {currentYear} Neuralteq, all rights reserved
          </div>
        </div>
      </CenteredContent>
    </footer>
  );
} 