'use client';

import React, { ReactNode } from 'react';
import classNames from 'classnames';

function Square({ className, children } : { className?: string; children: ReactNode }) {
  return (
    <div className={classNames('flex justify-center items-center aspect-square w-[clamp(111px,_30vw,_265px)] lg:w-[clamp(111px,_22vw,_265px)]', className)}>
      {children}
    </div>
  );
}

function MobileVersion() {
  return (
    <div className="flex flex-wrap justify-center gap-[clamp(10px,_2vw,_22px)] lg:hidden">
      <Square>
        <p className="font-bold text-center text-[clamp(24px,_5vw,_50px)]">
          О нас
        </p>
      </Square>
      <Square className="bg-[#F34252] text-[#ffffff]">
        <p className="font-bold text-center text-[clamp(40px,_8vw,_70px)]">
          50+
        </p>
      </Square>
      <Square className="border-2 border-black p-[24px]">
        <p className="font-bold text-center text-[clamp(15px,_3vw,_32px)]">
          Создаем возможности
        </p>
      </Square>
      <Square className="bg-[#207EEB] text-[#ffffff]">
        <p className="font-bold text-center text-[clamp(40px,_8vw,_70px)]">
          9216
        </p>
      </Square>
      <Square className="border-2 border-black">
        <p className="font-bold text-center text-[clamp(15px,_3vw,_32px)]">
          Помогаем
        </p>
      </Square>
      <Square className="bg-[#207EEB] text-[#ffffff]">
        <p className="font-bold text-center text-[clamp(40px,_8vw,_70px)]">
          300+
        </p>
      </Square>
    </div>
  );
}

function DesktopVersion() {
  return (
    <div className="hidden lg:flex flex-wrap justify-center gap-[clamp(10px,_2vw,_22px)] max-w-[1130px]">
      <Square>
        <p className="font-bold text-center text-[50px]">
          О нас
        </p>
      </Square>
      <Square className="border-2 border-black">
        <p className="font-bold text-center text-[clamp(15px,_3vw,_32px)]">
          Помогаем
        </p>
      </Square>
      <Square className="bg-[#F34252] text-[#ffffff]">
        <p className="font-bold text-center text-[clamp(40px,_8vw,_70px)]">
          50+
        </p>
      </Square>
      <Square className="border-2 border-black">
        <p className="font-bold text-center text-[clamp(15px,_3vw,_32px)]">
          Развлекаем
        </p>
      </Square>
      <Square className="bg-[#207EEB] text-[#ffffff] aspect-[2.083/1] lg:aspect-auto lg:w-[clamp(470px,_46vw,_552px)]">
        <p className="font-bold text-center text-[clamp(40px,_8vw,_70px)]">
          9216
        </p>
      </Square>
      <Square className="border-2 border-black">
        <p className="font-bold text-center text-[clamp(15px,_3vw,_32px)]">
          Создаем возможности
        </p>
      </Square>
      <Square className="bg-[#207EEB] text-[#ffffff]">
        <p className="font-bold text-center text-[clamp(40px,_8vw,_70px)]">
          300+
        </p>
      </Square>

    </div>
  );
}

export function About() {
  return (
    <div className="flex justify-center">
      <MobileVersion />
      <DesktopVersion />
    </div>
  );
}
