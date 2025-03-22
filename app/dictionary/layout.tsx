'use client';

import React, { ReactNode, useState } from 'react';
import Image from 'next/image';
import { TargetAudienceEnum } from '@/lib/models';
import { PageTransition } from '@/components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const StateByPathname: Record<string, TargetAudienceEnum> = {
  '/dictionary': TargetAudienceEnum.NOT_SELECTED,
  '/dictionary/employee': TargetAudienceEnum.EMPLOYEE,
  '/dictionary/student': TargetAudienceEnum.STUDENT,
};

export default function DictionaryLayout({ children } : Readonly<{
  children: ReactNode;
}>) {
  const pathname = usePathname();
  const [currentTab, setCurrentTab] = useState<TargetAudienceEnum>(StateByPathname[pathname]);

  return (
    <PageTransition>
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
        {children}
      </div>
    </PageTransition>
  );
}
