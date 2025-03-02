import Link from 'next/link';
import { AppRoutes } from '@/constants';
import Image from 'next/image';
import React from 'react';

export function Logo() {
  return (
    <Link href={AppRoutes.Home}>
      <div className="relative w-[36px] h-[20px] lg:w-[184px] lg:h-[57px]">
        <Image
          src="/images/logo/logo_mobile.svg"
          alt="logo"
          fill
          className="object-contain lg:hidden"
        />
        <Image
          src="/images/logo/logo_desktop.svg"
          fill
          alt="logo"
          className="object-contain hidden lg:block"
        />
      </div>
    </Link>
  );
}
