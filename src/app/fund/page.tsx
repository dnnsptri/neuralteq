import type { Metadata } from 'next';
import Header from '@/components/Header';
import FundContent from '@/components/FundContent';

export const metadata: Metadata = {
  title: 'Fund - Neuralteq',
  description: 'Invest in the future of decentralized AI with Neuralteq Fund. Join us in supporting and accelerating innovative projects within the Bittensor ecosystem.',
};

export default function Fund() {
  return (
    <>
      <Header />
      <FundContent />
    </>
  );
} 