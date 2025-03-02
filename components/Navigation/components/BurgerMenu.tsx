import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export function BurgerMenu({ onClick }: { onClick: () => void }) {
  return (
    <Box
      onClick={onClick}
      className="relative w-[24px] h-[24px] lg:hidden"
    >
      <Image src="/images/burger_menu.svg" alt="menu" fill className="object-contain" />
    </Box>
  );
}
