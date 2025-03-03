import { Accordion as MuiAccordion, AccordionProps, styled } from '@mui/material';
import React from 'react';

export const PPOAccordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  '.MuiButtonBase-root': {
    padding: 0,
  },
  '.MuiAccordionDetails-root': {
    padding: '0 0 0 32px',
    '@media (min-width:1024px)': {
      padding: '0 0 0 40px',
    },
  },
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));
