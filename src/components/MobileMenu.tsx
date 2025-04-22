'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  onThemeToggle: () => void;
}

const navigationItems = [
  { name: 'Validator', href: '/validator' },
  { name: 'Business Development', href: '/business-development' },
  { name: 'Mining', href: '/mining' },
  { name: 'Research', href: '/research' },
  { name: 'Neuralteq Fund', href: '/fund' },
  { name: 'Why us', href: '/why-us' },
];

const socialLinks = [
  { name: 'Discord', href: 'https://discord.com', icon: '/icons/logo_discord.svg' },
  { name: 'X', href: 'https://x.com', icon: '/icons/logo_x.svg' },
  { name: 'Medium', href: 'https://medium.com', icon: '/icons/logo_medium.svg' },
];

export default function MobileMenu({ isOpen, onClose, isDark, onThemeToggle }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity z-40 md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Menu */}
      <div 
        className={`fixed right-0 top-0 h-full w-[280px] bg-[var(--background)] shadow-xl transition-transform z-50 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Close button */}
          <button 
            onClick={onClose}
            className="self-end p-2"
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation */}
          <nav className="mt-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-3 text-[17px] relative ${
                  pathname === item.href ? 'font-medium' : ''
                }`}
                onClick={onClose}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Theme toggle */}
          <button 
            onClick={onThemeToggle}
            className="mt-8 py-3 flex items-center gap-3"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <Image
              src={isDark ? "/icons/icon_light.svg" : "/icons/icon_dark.svg"}
              alt="Theme toggle"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="text-[17px]">
              {isDark ? 'Light mode' : 'Dark mode'}
            </span>
          </button>

          {/* Social links */}
          <div className="mt-auto">
            <div className="text-[15px] mb-4 opacity-60">Follow us</div>
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.name} page`}
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
          </div>
        </div>
      </div>
    </>
  );
} 