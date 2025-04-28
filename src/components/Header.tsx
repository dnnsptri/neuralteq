'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CenteredContent from './layouts/CenteredContent';
import Button from './ui/Button';
import MobileMenu from './MobileMenu';
import { motion, useScroll, useTransform } from 'framer-motion';
import LogoMesh from './LogoMesh';

const navigationItems = [  
  { name: 'Validator', href: '/validator' },
  { name: 'Business Development', href: '/business-development' },
  { name: 'Mining', href: '/mining' },
  { name: 'Research', href: '/research' },
  { name: 'Neuralteq Fund', href: '/fund' },
  { name: 'Why us', href: '/why-us' },
];

export default function Header({ disableNav = false, disableLogoLink = false }: { disableNav?: boolean; disableLogoLink?: boolean }) {
  const [isDark, setIsDark] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const { scrollY } = useScroll();
  const mobileOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const desktopOpacity = useTransform(scrollY, [0, 200], [1, 1]); // Always visible on desktop

  const [isMobile, setIsMobile] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  const [isBM, setIsBM] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
      setIsPortrait(window.matchMedia('(orientation: portrait)').matches);
      setIsBM(window.innerWidth < 1280);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    window.addEventListener('orientationchange', checkDevice);
    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('orientationchange', checkDevice);
    };
  }, []);

  useEffect(() => {
    // Force light mode for privacy page
    if (pathname === '/privacy') {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, [pathname]);

  useEffect(() => {
    if (!disableNav) {
    document.documentElement.classList.toggle('dark', isDark);
    }
  }, [isDark, disableNav]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY < 10);
      
      if (currentScrollY < 10) {
        // Always visible at top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
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
          <motion.div 
            style={{ opacity: isMobile ? mobileOpacity : desktopOpacity }} 
            className="relative left-8 flex items-center h-[72px]"
          >
            {disableLogoLink ? (
              <div className="relative w-[140px] h-[72px] logo-mesh-1960">
                <LogoMesh />
              </div>
            ) : (
              <Link href="/">
                <div className="relative w-[140px] h-[72px] logo-mesh-1960">
                  <LogoMesh />
                </div>
              </Link>
            )}
          </motion.div>

          {/* Centered Navigation - Desktop */}
          {!disableNav && (
          <div className={`w-full transition-all duration-300 hidden md:block ${isVisible || isAtTop ? 'opacity-100' : 'opacity-0'}`}>
            <div className="container mx-auto px-9">
              <nav className="flex items-center space-x-8 lg:ml-[152px]">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`nav-link group text-[var(--foreground)] ${pathname === item.href ? 'font-medium' : ''}`}
                  >
                    {(isMobile || isPortrait) && item.name === 'Neuralteq Fund' ? 'Fund' : item.name}
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
          )}

          {/* Right Side Actions */}
          {!disableNav && (
          <motion.div 
            style={{ opacity: isMobile ? mobileOpacity : desktopOpacity }}
            className="absolute right-8 flex items-center gap-6 my-16"
          >
            {/* Staking Dashboard - Desktop */}
            <Button 
              href="https://staking.tao-validator.com/subnets?_gl=1*1p3hjy1*_ga*MjAzNTIxNDEwMS.xNzM0MDAwMDM0*_ga_G55BM4VS8R*MTc0NTM1Mzc4Mi.xNy4wLjE3NDUzNTM3ODIuMC4wLjA."
              className="flex md:flex-row flex-col items-center text-[14.4px] gap-5.4"
              isCompact
              aria-label="Staking Dashboard"
            >
              <span>Staking dashboard</span>
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
          </motion.div>
          )}

          {/* Mobile Menu Toggle - Always Visible */}
          {!disableNav && (
          <motion.button 
            style={{ opacity: mobileOpacity }}
              onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden absolute right-8 w-10 h-10 flex items-center justify-center rounded bg-[var(--foreground)] text-[var(--background)] hover:bg-transparent hover:text-[var(--foreground)] hover:outline hover:outline-2 hover:outline-[var(--foreground)] transition-all duration-300"
              aria-label="Open menu"
            >
            <Image
              src="/icons/icon_menu.svg"
              alt="Menu"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </motion.button>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      {!disableNav && (
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        isDark={isDark}
        onThemeToggle={toggleTheme}
        disableNav={disableNav}
      />
      )}
    </>
  );
} 