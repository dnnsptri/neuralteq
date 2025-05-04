import type { Metadata } from 'next';
import Header from '@/components/Header';
import ValidatorContent_1 from '@/components/ValidatorContent_1';

export const metadata: Metadata = {
  title: 'Validator (Orbitron) - Neuralteq',
  description: 'Secure and reliable validation services for the Bittensor network. Orbitron font variation.',
};

export default function Validator_1() {
  return (
    <>
      <Header />
      <ValidatorContent_1 />
    </>
  );
} 