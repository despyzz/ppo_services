import React, { ReactNode } from 'react';

export function Wrapper({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <nav>
      <ul className="flex w-full justify-between">
        {children}
      </ul>
    </nav>
  );
}
