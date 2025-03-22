'use client';

import Link from 'next/link';
import React from 'react';
import { PageTransition } from '@/components';

export default function NotFoundPage() {
  return (
    <PageTransition>
      <p>
        Not Found
      </p>
      <Link className="cursor-pointer" href="/">
        Return to main page
      </Link>
    </PageTransition>
  );
}
