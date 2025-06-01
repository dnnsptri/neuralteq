import type { Metadata } from 'next';
import TypewriterAnimationClient from './TypewriterAnimationClient';

export const metadata: Metadata = {
  title: 'Neuralteq - Accelerating Subnet Adoption. Building the TAO Ecosystem',
  description: 'Accelerating Subnet Adoption. Building the TAO Ecosystem with Neuralteq',
};

export default function AnimationPage() {
  return <TypewriterAnimationClient />;
} 