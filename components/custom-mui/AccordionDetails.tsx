import { AccordionDetails as MuiAccordionDetails, AccordionDetailsProps, styled } from '@mui/material';
import React from 'react';
import classNames from 'classnames';

export const PPOAccordionDetails = styled(({ className, ...otherProps }: AccordionDetailsProps) => (
  <MuiAccordionDetails
    className={classNames(className, 'font-normal text-[14px] lg:text-[26px]')}
    {...otherProps}
  />
))(({ theme }) => ({
  padding: theme.spacing(2),
}));
