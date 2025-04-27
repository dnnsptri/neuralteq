import React from 'react';
import type { Metadata } from 'next';
import Header from '../../components/Header';
import ResearchContent from '../../components/ResearchContent';

export const metadata: Metadata = {
  title: 'Research - Neuralteq',
  description: 'Explore Neuralteq\'s research initiatives in decentralized AI, machine learning optimization, and blockchain technology.',
};

export default function Research() {
  return (
    <>
      <Header />
      <ResearchContent />
    </>
  );
} 