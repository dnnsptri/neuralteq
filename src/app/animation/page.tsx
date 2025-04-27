import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const TypewriterAnimation = dynamic(() => import('./TypewriterAnimation'), {
  ssr: false
});

export const metadata: Metadata = {
  title: 'Animation - Neuralteq',
  description: 'Neuralteq animation showcase',
};

export default function AnimationPage() {
  return <TypewriterAnimation />;
} 