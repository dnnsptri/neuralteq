import type { Metadata } from 'next';
import Header from '@/components/Header';
import ValidatorContent from '@/components/ValidatorContent';

export const metadata: Metadata = {
  title: 'Validator - Neuralteq',
  description: 'Secure and reliable validation services for the Bittensor network.',
};

export default function Validator() {
  return (
    <>
      <Header />
      <ValidatorContent />
    </>
  );
} 