import React from 'react';
import type { Metadata } from 'next';
import Header from '../../components/Header';
import WhyUsContent from '../../components/WhyUsContent';

export const metadata: Metadata = {
  title: 'Why us - Neuralteq',
  description: 'Learn why Neuralteq is your trusted partner in building the future of decentralised AI through secure validation, research, and business development.',
};

export default function WhyUs() {
  return (
    <>
      <Header />
      <WhyUsContent />
    </>
  );
} 