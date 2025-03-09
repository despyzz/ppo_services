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
      <div className="relative h-[206px] w-full lg:h-[342px]">
        <Image src="/images/pages/dictionary_image.jpg" fill alt="Dictionary image." className="object-cover" />
        <div className="absolute inset-0 flex justify-center">
          <div className="flex w-full max-w-screen-xl items-center px-5">
            <p className="text-[30px] font-bold text-white lg:text-[64px]">
              Просто о сложном
            </p>
          </div>
        </div>
      </div>

      {/* Выбор типа информации */}
      <div className="flex w-full text-[20px] lg:text-[35px]">
        <Box
          onClick={() => setCurrentTab(TargetAudienceEnum.EMPLOYEE)}
          className={`flex h-[52px] flex-1 items-center justify-center border-2 border-[#F34252] text-center transition-colors lg:h-[106px]
            ${currentTab !== TargetAudienceEnum.EMPLOYEE
            ? 'bg-[#F34252] text-[#ffffff]'
            : 'bg-[#ffffff] text-[#F34252]'}
          `}
        >
          <p>Работнику</p>
        </Box>
        <Box
          onClick={() => setCurrentTab(TargetAudienceEnum.STUDENT)}
          className={`flex h-[52px] flex-1 items-center justify-center border-2 border-[#207EEB] text-center transition-colors lg:h-[106px]
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
