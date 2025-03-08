import React, { ReactNode } from 'react';

export function PPOPageContentWrapper({ children } : Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-[30px] lg:gap-[50px] w-full max-w-screen-xl px-5 py-[20px] lg:py-[50px]">
      {children}
    </div>
  );
}
