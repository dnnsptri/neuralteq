import React from 'react';

export default function LogoMesh() {
  return (
    <div className="relative w-[140px] h-[72px] flex items-center justify-end">
      <video
        src="/visuals/mesh_orange_dark_50.mp4"
        autoPlay
        loop
        muted
        playsInline
        width={77}
        height={77}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[77px] h-[77px] object-cover"
        style={{ zIndex: 1 }}
      >
        <img
          src="/visuals/logo_neuralteq.png"
          alt="Neuralteq Logo"
          className="w-full h-full object-contain"
          style={{ zIndex: 1, position: 'absolute', top: 0, left: 0 }}
        />
      </video>
      <img
        src="/visuals/logo_neuralteq.svg"
        alt="Neuralteq Logo"
        className="absolute inset-0 w-full h-full object-contain"
        style={{ zIndex: 2 }}
      />
    </div>
  );
} 