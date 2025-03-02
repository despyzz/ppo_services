import { Button } from '@mui/material';
import React from 'react';

export function JoinButton() {
  return (
    <Button
      variant="black"
      className="!hidden lg:!flex w-[207px] h-[57px] whitespace-pre-line text-center"
    >
      Вступить в
      {'\n'}
      профсоюз
    </Button>
  );
}
