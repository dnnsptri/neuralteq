import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function FooterMesh() {
  const pathname = usePathname();
  let elementSrc = '';
  if (pathname.startsWith('/validator')) elementSrc = '/visuals/element_Validator@2x.png';
  else if (pathname.startsWith('/business-development')) elementSrc = '/visuals/element_Business@2x.png';
  else if (pathname.startsWith('/mining')) elementSrc = '/visuals/element_Mining@2x.png';
  else if (pathname.startsWith('/fund')) elementSrc = '/visuals/element_Fund@2x.png';
  else if (pathname.startsWith('/research')) elementSrc = '/visuals/element_Research@2x.png';
  else if (pathname.startsWith('/why-us') || pathname === '/' || pathname.startsWith('/index') || pathname.startsWith('/animation')) elementSrc = '/visuals/element_Why@2x.png';
  if (!elementSrc) return null;
  return (
    <div className="footer-mesh flex justify-center mb-12 md:mb-20">
      <Image
        src={elementSrc}
        alt="Footer Visual"
        width={80}
        height={80}
        quality={100}
        priority
        className="w-[80px] h-[80px] object-contain rounded-full"
      />
    </div>
  );
} 