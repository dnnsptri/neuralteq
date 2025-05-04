import type { Metadata } from 'next';
import Header from '@/components/Header';
import ValidatorContent_4 from '@/components/ValidatorContent_4';

export const metadata: Metadata = {
  title: 'Validator (Exo 2) - Neuralteq',
  description: 'Secure and reliable validation services for the Bittensor network. Exo 2 font variation.',
};

export default function Validator_4() {
  return (
    <>
      <Header />
      <ValidatorContent_4 />
    </>
  );
} 