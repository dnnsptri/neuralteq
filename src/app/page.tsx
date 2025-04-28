"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import IndexContent from '@/components/index';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lastVisit = localStorage.getItem('animationLastVisit');
      const now = Date.now();
      const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;
      if (!lastVisit || now - Number(lastVisit) > THIRTY_DAYS) {
        localStorage.setItem('animationLastVisit', String(now));
        router.replace('/animation');
      }
    }
  }, [router]);

  // Optionally render a loading spinner or nothing
  return null;
} 