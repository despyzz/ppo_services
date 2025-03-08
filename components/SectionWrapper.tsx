import React, { ReactNode } from 'react';

export function PPOSectionWrapper({ children } : Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-[18px] lg:gap-[38px]">
      {children}
    </div>
  );
}
