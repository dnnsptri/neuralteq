'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeInUp({ children, className = '', delay = 0 }: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 