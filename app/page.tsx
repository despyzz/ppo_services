'use client';

import React, { useState } from 'react';
import { Box } from '@mui/material';
import { TargetAudienceEnum } from '@/lib/models';
import { About } from '@/app/_blocks/About';
import { Partners, News } from './_blocks';

export default function Home() {
  const [currentTab, setCurrentTab] = useState<TargetAudienceEnum>(TargetAudienceEnum.NOT_SELECTED);

  return (
    <>
      <div className="flex flex-col items-center max-lg:h-[calc(100dvh-42px)] lg:h-auto">
        {/* Видео */}
        <div className="relative flex-1 w-full h-[206px] lg:h-[552px] lg:flex-initial">
          <div className="object-cover bg-gray-300 h-full" />
          <div className="absolute top-0 bottom-0 right-0 left-0 ">
            <div className="px-[24px] mt-[50dvh] lg:mt-[177px] lg:ml-[42%] max-w-[800px]">
              <p className="font-bold text-[32px] leading-[38px] lg:text-[64px] lg:leading-[64px]">
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
          <Box
            onClick={() => setCurrentTab(TargetAudienceEnum.EMPLOYEE)}
            className={`flex items-center justify-center flex-1 text-center h-[52px] lg:h-[106px] transition-colors border-2 border-[#F34252]
            ${currentTab !== TargetAudienceEnum.EMPLOYEE
              ? 'bg-[#F34252] text-[#ffffff]'
              : 'bg-[#ffffff] text-[#F34252]'}
          `}
          >
            <p>Работнику</p>
          </Box>
          <Box
            onClick={() => setCurrentTab(TargetAudienceEnum.STUDENT)}
            className={`flex items-center justify-center flex-1 text-center h-[52px] lg:h-[106px] transition-colors border-2 border-[#207EEB]
            ${currentTab !== TargetAudienceEnum.STUDENT
              ? 'bg-[#207EEB] text-[#ffffff]'
              : 'bg-[#ffffff] text-[#207EEB]'}
          `}
          >
            <p>Студенту</p>
          </Box>
        </div>
      </div>
      <div className="flex flex-col gap-[30px] lg:gap-[50px] py-[30px] lg:py-[50px]">
        <About />
        <News />
        <Partners />
      </div>
    </>
  );
}
