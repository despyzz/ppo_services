'use client';

import React from 'react';
import Image from 'next/image';

export default function Error500Page() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
      <Image
        src="/images/pages/error/sticker.svg"
        alt="Error sticker"
        width={200}
        height={200}
        className="
          mb-4 h-auto w-[200px]
          lg:absolute lg:bottom-4 lg:right-4 lg:mb-0 lg:w-[400px]
        "
        priority
      />

      <p
        className="
          m-0 font-sans text-[20px] font-light leading-snug text-[#207EEB]
          lg:text-[40px]
        "
        style={{ fontFamily: "'Gilroy Light', sans-serif" }}
      >
        Ой, кажется, мы упали.
        <br />
        Уже работаем над этим.
      </p>
    </div>
  );
}
