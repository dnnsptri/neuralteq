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
      // If more than 2 weeks have passed, reset counter
      if (now - visitData.lastReset > TWO_WEEKS) {
        visitData = { count: 0, lastReset: now };
      }
      // Only increment and redirect if not already redirected in this session
      if (!sessionStorage.getItem('animationShownThisVisit')) {
        visitData.count += 1;
        localStorage.setItem('animationVisitData', JSON.stringify(visitData));
        if (visitData.count <= 3) {
          sessionStorage.setItem('animationShownThisVisit', 'true');
          router.replace('/animation');
          return;
        }
      }
      // If skipAnimationOnce is set, skip animation and clear the flag
      const skipAnimation = localStorage.getItem('skipAnimationOnce');
      if (skipAnimation) {
        localStorage.removeItem('skipAnimationOnce');
        setChecked(true);
        return;
      }
    }
    setChecked(true);
  }, [router, searchParams]);

  if (!checked) {
    // Optionally, show a loading spinner here
    return null;
  }

  return <IndexContent />;
} 