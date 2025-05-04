import type { Metadata } from 'next';
import Header from '@/components/Header';
import ValidatorContent_2 from '@/components/ValidatorContent_2';

export const metadata: Metadata = {
  title: 'Validator (Rajdhani) - Neuralteq',
  description: 'Secure and reliable validation services for the Bittensor network. Rajdhani font variation.',
};

export default function Validator_2() {
  return (
    <>
      <Header />
      <ValidatorContent_2 />
    </>
  );
} 