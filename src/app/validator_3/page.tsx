import type { Metadata } from 'next';
import Header from '@/components/Header';
import ValidatorContent_3 from '@/components/ValidatorContent_3';

export const metadata: Metadata = {
  title: 'Validator (Manrope) - Neuralteq',
  description: 'Secure and reliable validation services for the Bittensor network. Manrope font variation.',
};

export default function Validator_3() {
  return (
    <>
      <Header />
      <ValidatorContent_3 />
    </>
  );
} 