import React, { ReactNode } from 'react';

export function PPOPageContentWrapper({ children } : Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex w-full max-w-screen-xl flex-col gap-[30px] px-5 py-[20px] lg:gap-[50px] lg:py-[50px]">
      {children}
    </div>
  );
}
