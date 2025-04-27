import type { Metadata } from 'next';
import Header from '@/components/Header';
import MiningContent from '@/components/MiningContent';

export const metadata: Metadata = {
  title: 'Mining - Neuralteq',
  description: 'Join us in mining and developing solutions in the Bittensor network.',
};

export default function Mining() {
  return (
    <>
      <Header />
      <MiningContent />
    </>
  );
} 