'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Button from './ui/Button';
import Footer from './Footer';

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
  { name: 'Discord', href: 'https://discord.com', icon: '/icons/logo_Discord.svg' },
  { name: 'X', href: 'https://x.com', icon: '/icons/logo_X.svg' },
  { name: 'Medium', href: 'https://medium.com', icon: '/icons/logo_Medium.svg' },
];

const footerLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Get in touch', href: 'mailto:roger@neuralteq.com' },
];

export default function MobileMenu({ isOpen, onClose, isDark, onThemeToggle }: MobileMenuProps) {
  const pathname = usePathname();

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
        className={`fixed right-0 top-0 h-full w-full bg-[#ECFBFA] dark:bg-[#021019] text-black dark:text-white shadow-xl transition-transform z-50 md:hidden overflow-hidden ${
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
                className={`block py-2 text-[24px] font-medium relative hover:opacity-100 transition-opacity ${
                  pathname === item.href ? 'opacity-100' : 'opacity-60'
                }`}
                onClick={onClose}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Staking Dashboard Button */}
          <div className="mt-16">
            <Button 
              href="https://staking.tao-validator.com/subnets"
              className="w-full justify-center"
            >
              Staking dashboard
            </Button>
          </div>

          {/* Theme toggle */}
          <button 
            onClick={onThemeToggle}
            className="mt-8 py-3 flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity"
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

          {/* Footer */}
          <div className="mt-auto">
            <Footer hideMesh />
          </div>
        </div>
      </div>
    </>
  );
} 