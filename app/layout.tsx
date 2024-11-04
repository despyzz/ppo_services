'use client';

import './globals.css';
import React, { ReactNode } from 'react';
import { Information, Navigation } from '@/components';
import { withSnackbarProvider } from '@/lib/providers';
import { flowRight } from 'lodash-es';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const providers = [
    withSnackbarProvider,
  ];

  const app = flowRight(...providers)(
    <>
      <header className="px-5 pt-5">
        <Navigation />
      </header>
      <main className="flex-1 px-5">
        {children}
      </main>
      <footer className="px-5 pb-5">
        <Information />
      </footer>
    </>,
  );

  return (
    <html lang="en" className="h-screen">
      <body className="flex flex-col h-full mx-auto max-w-screen-xl">
        {app}
      </body>
    </html>
  );
}
