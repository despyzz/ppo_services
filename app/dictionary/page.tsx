'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';
import { TargetAudienceEnum } from '@/lib/models';
import { EmployeeTab, NotSelectedTab, StudentTab } from './_tabs';

export default function Dictionary() {
  const [currentTab, setCurrentTab] = useState<TargetAudienceEnum>(TargetAudienceEnum.NOT_SELECTED);

  return (
    <div className="flex flex-col items-center">
      {/* Изображение */}
      <div className="relative w-full h-[206px] lg:h-[342px]">
        <Image src="/images/pages/dictionary_image.jpg" fill alt="Dictionary image." className="object-cover" />
        <div className="absolute flex justify-center top-0 bottom-0 right-0 left-0">
          <div className="flex items-center w-full max-w-screen-xl px-5">
            <p className="text-white font-bold text-[30px] lg:text-[64px]">
              Просто о сложном
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

      {currentTab === TargetAudienceEnum.NOT_SELECTED && <NotSelectedTab />}
      {currentTab === TargetAudienceEnum.EMPLOYEE && <EmployeeTab />}
      {currentTab === TargetAudienceEnum.STUDENT && <StudentTab />}
    </div>
  );
}
