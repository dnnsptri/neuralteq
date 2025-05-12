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
      // If just returned from animation, don't increment counter
      if (localStorage.getItem('animationJustPlayed')) {
        localStorage.removeItem('animationJustPlayed');
        setChecked(true);
        return;
      }
      const skipAnimation = localStorage.getItem('skipAnimationOnce');
      if (skipAnimation) {
        localStorage.removeItem('skipAnimationOnce');
        setChecked(true);
        return;
      }
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
      visitData.count += 1;
      localStorage.setItem('animationVisitData', JSON.stringify(visitData));
      if (visitData.count <= 3) {
        // Set flag so we don't increment again after animation
        localStorage.setItem('animationJustPlayed', 'true');
        if (!window.location.pathname.startsWith('/animation')) {
          window.location.href = '/animation';
          return;
        }
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