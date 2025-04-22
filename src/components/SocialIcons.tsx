'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
  { name: 'Discord', href: 'https://discord.com', icon: '/icons/logo_discord.svg' },
  { name: 'X', href: 'https://x.com', icon: '/icons/logo_x.svg' },
  { name: 'Medium', href: 'https://medium.com', icon: '/icons/logo_medium.svg' },
];

interface SocialIconsProps {
  className?: string;
}

export default function SocialIcons({ className }: SocialIconsProps) {
  return (
    <div className={`social-icons hidden md:flex ${className || ''}`}>
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit our ${social.name} page`}
          className="social-icon"
        >
          <Image
            src={social.icon}
            alt={`${social.name} icon`}
            width={24}
            height={24}
            className="w-6 h-6 [filter:brightness(0)_contrast(100%)] dark:[filter:brightness(0)_invert(1)]"
          />
        </Link>
      ))}
    </div>
  );
} 