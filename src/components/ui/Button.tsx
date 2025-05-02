'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ReactNode, useState, useEffect } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: string;
  iconLight?: string;
  isCompact?: boolean;
  'aria-label'?: string;
  disabled?: boolean;
  showIconOnlyOnMobile?: boolean;
}

export default function Button({ 
  children, 
  href, 
  onClick,
  className = '',
  icon,
  iconLight,
  isCompact,
  'aria-label': ariaLabel,
  disabled = false,
  showIconOnlyOnMobile = false
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDark(document.documentElement.classList.contains('dark'));
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);
  
  const content = icon ? (
    <div className="flex items-center justify-center">
      {showIconOnlyOnMobile ? (
        <>
          <span className="hidden md:block">{children}</span>
          <Image
            src={isDark && !isHovered ? icon : iconLight || icon}
            alt=""
            width={20}
            height={20}
            className={`md:hidden ${isCompact ? "ml-0" : "ml-2"}`}
          />
        </>
      ) : (
        <>
          <span className={isCompact ? "md:block hidden" : ""}>
            {children}
          </span>
          <Image
            src={isDark && !isHovered ? icon : iconLight || icon}
            alt=""
            width={20}
            height={20}
            className={`hidden md:block ${isCompact ? "ml-0 md:ml-2" : "ml-2"}`}
          />
        </>
      )}
    </div>
  ) : children;

  const baseStyles = [
    'text-base font-medium',
    isCompact ? 'w-10 h-10 p-2 md:w-auto md:h-auto md:px-2 md:py-2 text-sm' : 'px-4 py-3',
    'rounded transition-all duration-300',
    'bg-[var(--foreground)] text-[var(--background)]',
    'hover:bg-transparent hover:text-[var(--foreground)] hover:outline hover:outline-2 hover:outline-[var(--foreground)]',
    'disabled:opacity-50 disabled:pointer-events-none',
    className
  ].join(' ');

  const commonProps = {
    className: baseStyles,
    'aria-label': ariaLabel,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    tabIndex: disabled ? -1 : 0,
    'aria-disabled': disabled || undefined
  };

  if (href) {
    // Check if it's an external link
    if (href.startsWith('http')) {
      return (
        <a href={disabled ? undefined : href} target="_blank" rel="noopener noreferrer" {...commonProps}>
          {content}
        </a>
      );
    }
    return (
      <Link href={disabled ? '#' : href} {...commonProps}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} {...commonProps}>
      {content}
    </button>
  );
} 