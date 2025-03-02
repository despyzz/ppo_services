import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export function CrossIcon({ onClick }: { onClick: () => void }) {
  return (
    <Box onClick={onClick} className="w-[24px] h-[24px] flex items-center justify-center">
      <Box className="relative w-[16px] h-[16px]">
        <Image src="/images/cross_icon.svg" alt="menu" fill className="object-contain" />
      </Box>
    </Box>
  );
}
