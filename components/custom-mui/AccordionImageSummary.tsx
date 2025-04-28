import {
  AccordionSummary as MuiAccordionSummary,
  accordionSummaryClasses,
  AccordionSummaryProps,
  styled,
} from '@mui/material';
import classNames from 'classnames';
import React from 'react';

export const PPOAccordionImageSummary = styled(({
  className,
  ...otherProps
}: AccordionSummaryProps) => (
  <MuiAccordionSummary
    className={classNames(className, 'font-bold text-[16px] lg:text-[32px]')}
    {...otherProps}
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
