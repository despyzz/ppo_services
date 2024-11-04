'use client';

import React, { ReactNode } from 'react';
import { SnackbarProvider } from 'notistack';

export const withSnackbarProvider = (element: ReactNode): ReactNode => (
  <SnackbarProvider>
    {element}
  </SnackbarProvider>
);
