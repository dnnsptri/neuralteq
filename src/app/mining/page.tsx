import React from 'react';
import type { Metadata } from 'next';
import Header from '../../components/Header';
import MiningContent from '../../components/MiningContent';

export const metadata: Metadata = {
  title: 'Mining - Neuralteq',
  description: 'Join Neuralteq in mining and developing innovative solutions in the Bittensor network, contributing to the future of decentralized AI.',
};

export default function Mining() {
  return (
    <>
      <Header />
      <MiningContent />
    </>
  );
} 