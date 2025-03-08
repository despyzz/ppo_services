import React, { ReactNode } from 'react';

export function PPOListTitle({ children } : Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="text-[25px] font-bold lg:text-[32px]">
      {children}
    </div>
  );
}
