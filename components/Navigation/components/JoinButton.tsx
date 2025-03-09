import { Button } from '@mui/material';
import React from 'react';

export function JoinButton() {
  return (
    <Button
      variant="black"
      className="!hidden h-[57px] w-[207px] whitespace-pre-line text-center lg:!flex"
    >
      Вступить в
      {'\n'}
      профсоюз
    </Button>
  );
}
