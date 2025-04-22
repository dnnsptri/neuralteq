'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface VideoProps {
  src: string;
  className?: string;
}

export default function Video({ src, className = '' }: VideoProps) {
  const videoRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "center center"]
  });

  const width = useTransform(
    scrollYProgress,
    [0, 1],
    ["100%", "95vw"]
  );

  return (
    <motion.div 
      ref={videoRef}
      style={{ width }}
      className={`mx-auto w-full max-w-[1024px] md:max-w-[1500px] aspect-w-16 aspect-h-9 mb-16 md:mb-24 ${className}`}
    >
      <iframe
        src={src}
        allow="autoplay; fullscreen; picture-in-picture"
        className="w-full h-full rounded-lg"
      ></iframe>
    </motion.div>
  );
} 