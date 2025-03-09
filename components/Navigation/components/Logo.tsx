import Link from 'next/link';
import { AppRoutes } from '@/constants';
import Image from 'next/image';
import React from 'react';

export function Logo() {
  return (
    <Link href={AppRoutes.Home}>
      <div className="relative h-[20px] w-[36px] lg:h-[57px] lg:w-[184px]">
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
          className="hidden object-contain lg:block"
        />
      </div>
    </Link>
  );
}
