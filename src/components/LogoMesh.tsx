'use client';

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function LogoMesh() {
  const pathname = usePathname();
  const isPrivacyPage = pathname === '/privacy';

  return (
    <div className="relative w-[140px] h-[72px] flex items-center justify-end">
      {!isPrivacyPage && (
        <video
          autoPlay
          loop
          muted
          playsInline
          width={77}
          height={77}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[77px] h-[77px] object-cover pointer-events-none"
          style={{ zIndex: 1 }}
        >
          <source src="/visuals/mesh_orange_gray_50.mp4" type="video/mp4" />
          <source src="/visuals/mesh_orange_gray_50.webm" type="video/webm" />
          {/* Fallback for browsers that don't support video */}
          <Image
            src="/visuals/mesh_orange@2x.png"
            alt="Mesh Background"
            width={77}
            height={77}
            className="object-cover"
          />
        </video>
      )}
      <Image
        src={isPrivacyPage ? "/visuals/logo_neuralteq_light.png" : "/visuals/logo_neuralteq.svg"}
        alt="Neuralteq Logo"
        width={140}
        height={72}
        className="absolute inset-0 w-full h-full object-contain"
        style={{ zIndex: 2 }}
        priority
      />
    </div>
  );
} 