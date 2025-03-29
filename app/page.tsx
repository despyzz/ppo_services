'use client';

import React, { useState } from 'react';
import { TargetAudienceEnum } from '@/lib/models';
import { About } from '@/app/_blocks/about/About';
import { PageTransition } from '@/components';
import Link from 'next/link';
import { Partners, News } from './_blocks';

export default function Home() {
  const [currentTab, setCurrentTab] = useState<TargetAudienceEnum>(TargetAudienceEnum.NOT_SELECTED);

  return (
    <PageTransition>
      <div className="flex flex-col items-center max-lg:h-[calc(100dvh-42px)] lg:h-auto">
        {/* Видео */}
        <div className="relative h-[206px] w-full flex-1 lg:h-[552px] lg:flex-initial">
          <div className="h-full bg-gray-300 object-cover" />
          <div className="absolute inset-0 ">
            <div className="mt-[50dvh] max-w-[800px] px-[24px] lg:ml-[42%] lg:mt-[177px]">
              <p className="text-[32px] font-bold leading-[38px] lg:text-[64px] lg:leading-[64px]">
                Профорганизация Московского Политеха
              </p>
              <p className="text-[12px] lg:text-[24px]">
                Стремление к совершенству
              </p>
            </div>
          </div>
        </div>

        {/* Выбор типа информации */}
        <div className="flex w-full text-[20px] lg:text-[35px]">
          <Link
            onClick={() => setCurrentTab(TargetAudienceEnum.EMPLOYEE)}
            href="/dictionary/employee"
            className={`flex h-[52px] flex-1 items-center justify-center border-2 border-[#F34252] text-center transition-colors lg:h-[106px]
            ${currentTab !== TargetAudienceEnum.EMPLOYEE
              ? 'bg-[#F34252] text-[#ffffff]'
              : 'bg-[#ffffff] text-[#F34252]'}
          `}
          >
            <p>Работнику</p>
          </Link>
          <Link
            onClick={() => setCurrentTab(TargetAudienceEnum.STUDENT)}
            href="/dictionary/student"
            className={`flex h-[52px] flex-1 items-center justify-center border-2 border-[#207EEB] text-center transition-colors lg:h-[106px]
            ${currentTab !== TargetAudienceEnum.STUDENT
              ? 'bg-[#207EEB] text-[#ffffff]'
              : 'bg-[#ffffff] text-[#207EEB]'}
          `}
          >
            <p>Студенту</p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-[30px] py-[30px] lg:gap-[50px] lg:py-[50px]">
        <About />
        <News />
        <Partners />
      </div>
    </PageTransition>
  );
}
