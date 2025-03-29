'use client';

import React from 'react';
import { MobileVersion } from './MobileVersion';
import { DesktopVersion } from './DesktopVersion';

export function About() {
  return (
    <div className="flex justify-center">
      <MobileVersion />
      <DesktopVersion />
    </div>
  );
}
