"use client";

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import IndexContent from '@/components/index';

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (searchParams.get('skipAnimation') === '1') {
      localStorage.removeItem('animationInProgress');
      setChecked(true);
      return;
    }
    if (typeof window !== 'undefined') {
      const now = Date.now();
      const TWO_WEEKS = 14 * 24 * 60 * 60 * 1000;
      const visitDataRaw = localStorage.getItem('animationVisitData');
      let visitData = { count: 0, lastReset: now };
      if (visitDataRaw) {
        try {
          visitData = JSON.parse(visitDataRaw);
        } catch {}
      }
      if (now - visitData.lastReset > TWO_WEEKS) {
        visitData = { count: 0, lastReset: now };
      }
      // Only redirect if animation is not already in progress
      if (!localStorage.getItem('animationInProgress')) {
        visitData.count += 1;
        localStorage.setItem('animationVisitData', JSON.stringify(visitData));
        if (visitData.count <= 3) {
          localStorage.setItem('animationInProgress', 'true');
          router.replace('/animation');
          return;
        }
      }
      // If skipAnimationOnce is set, skip animation and clear the flag
      const skipAnimation = localStorage.getItem('skipAnimationOnce');
      if (skipAnimation) {
        localStorage.removeItem('skipAnimationOnce');
        localStorage.removeItem('animationInProgress');
        setChecked(true);
        return;
      }
      // Always clear animationInProgress when landing on homepage
      localStorage.removeItem('animationInProgress');
    }
    setChecked(true);
  }, [router, searchParams]);

  if (!checked) {
    // Optionally, show a loading spinner here
    return null;
  }

  return <IndexContent />;
} 