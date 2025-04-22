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
}

export default function Button({ 
  children, 
  href, 
  onClick,
  className = '',
  icon,
  iconLight,
  isCompact,
  'aria-label': ariaLabel
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
      <span className={isCompact ? "md:block hidden" : ""}>
        {children}
      </span>
      <Image
        src={isDark && !isHovered ? icon : iconLight || icon}
        alt=""
        width={20}
        height={20}
        className={isCompact ? "ml-0 md:ml-2" : "ml-2"}
      />
    </div>
  ) : children;

  const baseStyles = `
    text-base
    font-medium
    ${isCompact ? 'w-10 h-10 p-2 md:w-auto md:h-auto md:px-4 md:py-3' : 'px-4 py-3'}
    rounded 
    transition-all
    duration-300
    bg-[var(--foreground)]
    text-[var(--background)]
    hover:bg-transparent 
    hover:text-[var(--foreground)] 
    hover:outline 
    hover:outline-2 
    hover:outline-[var(--foreground)]
    ${className}
  `.trim();

  const commonProps = {
    className: baseStyles,
    'aria-label': ariaLabel,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false)
  };

  if (href) {
    return (
      <Link href={href} {...commonProps}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} {...commonProps}>
      {content}
    </button>
  );
} 