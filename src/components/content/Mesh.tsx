'use client';

import React from 'react';
import Image from 'next/image';

interface MeshProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function Mesh({ 
  src, 
  alt, 
  width = 88, 
  height = 88, 
  className = '' 
}: MeshProps) {
  return (
    <div className={`mesh ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`w-[${width}px] h-[${height}px]`}
      />
    </div>
  );
} 