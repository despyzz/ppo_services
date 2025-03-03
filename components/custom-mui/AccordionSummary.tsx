import {
  AccordionSummary as MuiAccordionSummary,
  accordionSummaryClasses,
  AccordionSummaryProps,
  styled,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';

export const PPOAccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={(
      <div className="relative w-[16px] h-[16px] lg:w-[32px] lg:h-[32px]">
        <Image src="/icons/expand_icon.svg" alt="Expand option" fill />
      </div>
    )}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: 'rotate(45deg)',
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
}));
