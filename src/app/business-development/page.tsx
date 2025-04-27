import type { Metadata } from 'next';
import Header from '@/components/Header';
import BusinessContent from '@/components/BusinessContent';

export const metadata: Metadata = {
  title: 'Business Development - Neuralteq',
  description: 'We connect Bittensor Subnets with real-world applications, helping gain enterprise recognition and commercial traction.',
};

export default function BusinessDevelopment() {
  return (
    <>
      <Header />
      <BusinessContent />
    </>
  );
} 