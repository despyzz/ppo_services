'use client';

import './globals.css';
import React, { ReactNode } from 'react';
import { Information, Navigation } from '@/components';
import { withSnackbarProvider } from '@/lib/providers';
import { flowRight } from 'lodash-es';
import { withThemeProvider } from '@/lib/providers/withThemeProvider';
import { AnimatePresence } from 'framer-motion';

import localFont from 'next/font/local';

const gilroy = localFont({
  src: [
    // Normal
    { path: '../public/fonts/Gilroy-Thin.woff', weight: '100', style: 'normal' },
    { path: '../public/fonts/Gilroy-UltraLight.woff', weight: '200', style: 'normal' },
    { path: '../public/fonts/Gilroy-Light.woff', weight: '300', style: 'normal' },
    { path: '../public/fonts/Gilroy-Regular.woff', weight: '400', style: 'normal' },
    { path: '../public/fonts/Gilroy-Medium.woff', weight: '500', style: 'normal' },
    { path: '../public/fonts/Gilroy-SemiBold.woff', weight: '600', style: 'normal' },
    { path: '../public/fonts/Gilroy-Bold.woff', weight: '700', style: 'normal' },
    { path: '../public/fonts/Gilroy-ExtraBold.woff', weight: '800', style: 'normal' },

    // Italic
    { path: '../public/fonts/Gilroy-ThinItalic.woff', weight: '100', style: 'italic' },
    { path: '../public/fonts/Gilroy-UltraLightItalic.woff', weight: '200', style: 'italic' },
    { path: '../public/fonts/Gilroy-LightItalic.woff', weight: '300', style: 'italic' },
    { path: '../public/fonts/Gilroy-RegularItalic.woff', weight: '400', style: 'italic' },
    { path: '../public/fonts/Gilroy-MediumItalic.woff', weight: '500', style: 'italic' },
    { path: '../public/fonts/Gilroy-SemiBoldItalic.woff', weight: '600', style: 'italic' },
    { path: '../public/fonts/Gilroy-BoldItalic.woff', weight: '700', style: 'italic' },
    { path: '../public/fonts/Gilroy-ExtraBoldItalic.woff', weight: '800', style: 'italic' },
  ],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const providers = [
    withSnackbarProvider,
    withThemeProvider,
  ];

  const app = flowRight(...providers)(
    <>
      <header className="sticky top-0 z-10 flex w-full justify-center bg-white shadow">
        <Navigation />
      </header>
      <main className="w-full flex-1">
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </main>
      <footer className="w-full bg-[#F4F5F6]">
        <Information className="mx-auto w-full max-w-screen-xl" />
      </footer>
    </>,
  );

  return (
    <html lang="en" className={gilroy.className}>
      <body className="flex h-full min-h-dvh flex-col items-center">
        {app}
      </body>
    </html>
  );
}
