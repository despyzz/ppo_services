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
        <p className="text-center text-[clamp(24px,_5vw,_50px)] font-bold">
          О нас
        </p>
      </Square>
      <Square className="bg-[#F34252] text-[#ffffff]">
        <p className="text-center text-[clamp(40px,_8vw,_70px)] font-bold">
          50+
        </p>
      </Square>
      <Square className="border-2 border-black p-[24px]">
        <p className="text-center text-[clamp(15px,_3vw,_32px)] font-bold">
          Создаем возможности
        </p>
      </Square>
      <Square className="bg-[#207EEB] text-[#ffffff]">
        <p className="text-center text-[clamp(40px,_8vw,_70px)] font-bold">
          9216
        </p>
      </Square>
      <Square className="border-2 border-black">
        <p className="text-center text-[clamp(15px,_3vw,_32px)] font-bold">
          Помогаем
        </p>
      </Square>
      <Square className="bg-[#207EEB] text-[#ffffff]">
        <p className="text-center text-[clamp(40px,_8vw,_70px)] font-bold">
          300+
        </p>
      </Square>
    </div>
  );
}

function DesktopVersion() {
  return (
    <div className="hidden max-w-[1130px] flex-wrap justify-center gap-[clamp(10px,_2vw,_22px)] lg:flex">
      <Square>
        <p className="text-center text-[50px] font-bold">
          О нас
        </p>
      </Square>
      <Square className="border-2 border-black">
        <p className="text-center text-[clamp(15px,_3vw,_32px)] font-bold">
          Помогаем
        </p>
      </Square>
      <Square className="bg-[#F34252] text-[#ffffff]">
        <p className="text-center text-[clamp(40px,_8vw,_70px)] font-bold">
          50+
        </p>
      </Square>
      <Square className="border-2 border-black">
        <p className="text-center text-[clamp(15px,_3vw,_32px)] font-bold">
          Развлекаем
        </p>
      </Square>
      <Square className="aspect-[2.083/1] bg-[#207EEB] text-[#ffffff] lg:aspect-auto lg:w-[clamp(470px,_46vw,_552px)]">
        <p className="text-center text-[clamp(40px,_8vw,_70px)] font-bold">
          9216
        </p>
      </Square>
      <Square className="border-2 border-black">
        <p className="text-center text-[clamp(15px,_3vw,_32px)] font-bold">
          Создаем возможности
        </p>
      </Square>
      <Square className="bg-[#207EEB] text-[#ffffff]">
        <p className="text-center text-[clamp(40px,_8vw,_70px)] font-bold">
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
