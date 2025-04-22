import { Metadata } from 'next';
import ValidatorContent from '@/components/ValidatorContent';

export const metadata: Metadata = {
  title: 'Validator - Neuralteq',
  description: 'Stake with confidence. Our enterprise-grade validator infrastructure ensures optimal performance and security for your TAO investment.',
};

export default function Validator() {
  return <ValidatorContent />;
} 