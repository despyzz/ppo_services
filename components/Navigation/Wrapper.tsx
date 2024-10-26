import React, { ReactNode } from 'react';

export function Wrapper({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <nav>
      <ul>
        {children}
      </ul>
    </nav>
  );
}
