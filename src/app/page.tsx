"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import IndexContent from '@/components/index';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const skipAnimation = localStorage.getItem('skipAnimationOnce');
      if (skipAnimation) {
        localStorage.removeItem('skipAnimationOnce');
        return;
      }
      const lastVisit = localStorage.getItem('animationLastVisit');
      const now = Date.now();
      const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;
      if (!lastVisit || now - Number(lastVisit) > THIRTY_DAYS) {
        localStorage.setItem('animationLastVisit', String(now));
        router.replace('/animation');
      }
    }
  }, [router]);

  return <IndexContent />;
} 