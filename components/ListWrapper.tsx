import React, { ReactNode } from 'react';

export function PPOListWrapper({ children } : Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex flex-col lg:gap-[10px]">
      {children}
    </div>
  );
}
