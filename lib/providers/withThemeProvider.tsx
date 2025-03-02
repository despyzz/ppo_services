'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/constants/theme';

export const withThemeProvider = (element: ReactNode): ReactNode => (
  <ThemeProvider theme={theme}>
    {element}
  </ThemeProvider>
);
