import type { Metadata } from 'next';
import Header from '@/components/Header';
import ValidatorContent_5 from '@/components/ValidatorContent_5';

export const metadata: Metadata = {
  title: 'Validator (Syne) - Neuralteq',
  description: 'Secure and reliable validation services for the Bittensor network. Syne font variation.',
};

export default function Validator_5() {
  return (
    <>
      <Header />
      <ValidatorContent_5 />
    </>
  );
} 