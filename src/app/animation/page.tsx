import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const TypewriterAnimation = dynamic(() => import('./TypewriterAnimation'), {
  ssr: false
});

export const metadata: Metadata = {
  title: 'Neuralteq - Accelerating Subnet Adoption. Building the TAO Ecosystem',
  description: 'Accelerating Subnet Adoption. Building the TAO Ecosystem with Neuralteq',
};

export default function AnimationPage() {
  return <TypewriterAnimation />;
} 