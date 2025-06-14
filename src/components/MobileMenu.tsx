'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Button from './ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  disableNav?: boolean;
  selectedNav?: string;
}

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Validator', href: '/validator' },
  { name: 'Business Development', href: '/business-development' },
  { name: 'Mining', href: '/mining' },
  { name: 'Research', href: '/research' },
  { name: 'Fund', href: '/fund' },
  { name: 'Why us', href: '/why-us' },
];

export default function MobileMenu({ isOpen, onClose, disableNav = false, selectedNav }: MobileMenuProps) {
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
        className={`fixed right-0 top-0 h-full w-full bg-[#021019] text-[#ECFBFA] shadow-xl transition-transform z-50 md:hidden overflow-hidden overflow-x-hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Header with Close button */}
          <div className="flex items-center justify-end gap-5">
            {/* Close button */}
            <button 
              onClick={onClose}
              className="p-2"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          {!disableNav && (
          <nav className="mt-8 ml-6">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-2 text-[24px] font-medium relative transition-opacity ${
                  (!selectedNav && item.href !== '/' && pathname.startsWith(item.href)) ||
                  (selectedNav === item.name)
                    ? 'underline underline-offset-4'
                    : ''
                }`}
                onClick={() => {
                  if (item.name === 'Home') {
                    localStorage.setItem('skipAnimationOnce', 'true');
                  }
                  setTimeout(onClose, 100);
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          )}

          {/* Staking Dashboard Button */}
          {!disableNav && (
          <div className="mt-6 mb-[72px] ml-6">
            <Button
              href="https://dashboard.neuralteq.com"
              className="w-full justify-center text-[#021019] bg-[#ECFBFA] hover:text-[#ECFBFA] hover:bg-transparent hover:outline-[#ECFBFA]"
              isCompact
            >
              Staking dashboard
            </Button>
            <div className="flex justify-center mt-6">
              <Image
                src="/visuals/element_Why@2x.png"
                alt="Why Mesh"
                width={48}
                height={48}
                className="w-[48px] h-[48px] mt-6"
                priority
              />
            </div>
          </div>
          )}
        </div>
      </div>
    </>
  );
} 