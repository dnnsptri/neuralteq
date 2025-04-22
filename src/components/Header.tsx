'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CenteredContent from './layouts/CenteredContent';
import Button from './ui/Button';
import MobileMenu from './MobileMenu';
import { motion, useScroll, useTransform } from 'framer-motion';

const navigationItems = [
  { name: 'Validator', href: '/validator' },
  { name: 'Business Development', href: '/business-development' },
  { name: 'Mining', href: '/mining' },
  { name: 'Research', href: '/research' },
  { name: 'Neuralteq Fund', href: '/fund' },
  { name: 'Why us', href: '/why-us' },
];

export default function Header() {
  const [isDark, setIsDark] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0], {
    clamp: true
  });

  const mobileOpacityStyle = {
    opacity: {
      '@media (min-width: 768px)': 1,
      '@media (max-width: 767px)': opacity
    }
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <header className="fixed top-4 md:top-8 left-0 right-0 z-50">
        <div className="relative flex items-center h-[72px]">
          {/* Logo */}
          <div className="relative left-8 flex items-center h-[72px]">
            <div className="relative w-[140px] h-[72px]">
              <Image
                src={isDark ? "/logo.png" : "/logo_neuralteq_light.gif"}
                alt="Neuralteq Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Centered Navigation - Desktop */}
          <div className={`w-full transition-all duration-300 hidden md:block ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="container mx-auto px-9">
              <nav className="flex items-center space-x-8 ml-[152px]">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`nav-link group text-[var(--foreground)] ${pathname === item.href ? 'font-medium' : ''}`}
                  >
                    {item.name}
                    {pathname === item.href ? (
                      <span className="nav-link-underline" />
                    ) : (
                      <span className="nav-link-hover" />
                    )}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="absolute right-8 flex items-center gap-6">
            {/* Staking Dashboard - Desktop */}
            <Button 
              href="https://staking.tao-validator.com/subnets?_gl=1*1nkexmk*_ga*MjAzNTIxNDEwMS4xNzM0MDAwMDM0*_ga_G55BM4VS8R*MTc0NTI2MDYyNi4xNi4xLjE3NDUyNjA2MzQuMC4wLjA"
              className="flex"
              icon="/icons/icon_dashboard.svg"
              iconLight="/icons/icon_dashboard_light.svg"
              isCompact
              aria-label="Staking Dashboard"
            >
              Staking dashboard
            </Button>

            {/* Theme Toggle - Desktop */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full transition-colors hidden md:block"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              <Image
                src={isDark ? "/icons/icon_light.svg" : "/icons/icon_dark.svg"}
                alt="Theme toggle"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2"
              aria-label="Open menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        isDark={isDark}
        onThemeToggle={toggleTheme}
      />
    </>
  );
} 