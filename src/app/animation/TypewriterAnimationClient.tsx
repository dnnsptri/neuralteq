'use client';
import dynamic from 'next/dynamic';

const TypewriterAnimation = dynamic(() => import('./TypewriterAnimation'), {
  ssr: false
});

export default function TypewriterAnimationClient() {
  return <TypewriterAnimation />;
} 