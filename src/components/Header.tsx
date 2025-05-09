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
  { name: 'Fund', href: '/fund' },
  { name: 'Why us', href: '/why-us' },
];

export default function Header({ disableNav = false, disableLogoLink = false }: { disableNav?: boolean; disableLogoLink?: boolean }) {
  const [isDark, setIsDark] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerOpacity, setHeaderOpacity] = useState(1);
  const pathname = usePathname();

  const { scrollY } = useScroll();
  const mobileOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const desktopOpacity = useTransform(scrollY, [0, 200], [1, 1]); // Always visible on desktop

  const [isMobile, setIsMobile] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [showHeaderContent, setShowHeaderContent] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
      setIsPortrait(window.matchMedia('(orientation: portrait)').matches);
      setIsSmallScreen(window.innerWidth <= 1336);
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
    // Initialize theme state only once on mount
    const storedTheme = localStorage.getItem('theme');
    // Default to dark mode if no theme is set
    if (!storedTheme) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      // Apply the stored theme
      if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        setIsDark(true);
      } else {
        document.documentElement.classList.remove('dark');
        setIsDark(false);
      }
    }
  }, []); // Empty dependency array means this only runs once on mount

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      setIsAtTop(currentScrollY < 10);

      const isAtBottom = windowHeight + currentScrollY >= docHeight - 10;
      
      if (currentScrollY < 120) {
        setHeaderOpacity(1);
      } else if (isAtBottom) {
        setIsVisible(false);
      } else if (currentScrollY > lastScrollY) {
        setHeaderOpacity(0);
      } else {
        setHeaderOpacity(1);
      }
      
      setLastScrollY(currentScrollY);
      setShowHeaderContent(currentScrollY < 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleTheme = () => {
    setIsDark(prev => {
      const next = !prev;
      const html = document.documentElement;
      if (next) {
        html.classList.add('dark');
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        html.classList.remove('dark');
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  };

  return (
    <>
      <header className="fixed top-4 md:top-8 left-0 right-0 z-50" style={{ opacity: headerOpacity, transition: 'opacity 0.5s' }}>
        <div className="relative flex items-center h-[72px]">
          {showHeaderContent && (
            <>
              {/* Logo */}
              <motion.div 
                style={{ opacity: isMobile ? mobileOpacity : desktopOpacity }} 
                className="relative left-8 flex items-center h-[72px]"
              >
                <Link href="/" onClick={() => localStorage.setItem('skipAnimationOnce', 'true')}>
                  <div className="relative w-[140px] h-[72px] logo-mesh-1960">
                    <LogoMesh />
                  </div>
                </Link>
              </motion.div>

              {/* Centered Navigation - Desktop */}
              {!disableNav && (
                <div className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 hidden md:block">
                  <div className={`rounded-full px-4 py-2 flex items-center shadow-sm ${isDark ? 'bg-[#061C2B]' : 'bg-[#FFFFFF]'}` }>
                    <nav className="flex items-center space-x-1 whitespace-nowrap">
                      {navigationItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`nav-link group text-[var(--foreground)] ${pathname === item.href ? (isDark ? 'nav-link-active' : 'bg-[#ECFBFA]') : ''}`}
                          style={pathname === item.href && !isDark ? { background: '#ECFBFA', color: '#021019', fontWeight: 600 } : {}}
                        >
                          {item.name === 'Fund' || item.name === 'Fund' ? 'Fund' : item.name}
                          <span className="nav-link-hover" />
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
                className="absolute right-8 hidden md:flex items-center gap-6 my-16"
              >
                {/* Staking Dashboard - Desktop */}
                <Button 
                  href="https://dashboard.neuralteq.com"
                  aria-label="Staking Dashboard"
                >
                  <span className="hidden max-[1336px]:inline relative w-5 h-5">
                    <Image
                      src="/icons/icon_dashboard.svg"
                      alt="Dashboard"
                      width={20}
                      height={20}
                      className="w-5 h-5 absolute group-hover:opacity-0 transition-opacity"
                    />
                    <Image
                      src="/icons/icon_dashboard_light.svg"
                      alt="Dashboard"
                      width={20}
                      height={20}
                      className="w-5 h-5 absolute opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </span>
                  <span className="inline max-[1336px]:hidden">Staking dashboard</span>
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
                className="md:hidden absolute right-8 w-10 h-10 flex items-center justify-center rounded-[4px] bg-[var(--foreground)] text-[var(--background)] hover:bg-transparent hover:text-[var(--foreground)] hover:outline hover:outline-2 hover:outline-[var(--foreground)] transition-all duration-300"
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
            </>
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