import Link from 'next/link';
import React from 'react';

export default function NotFoundPage() {
  return (
    <div>
      <p>
        Not Found
      </p>
      <Link className="cursor-pointer" href="/">
        Return to main page
      </Link>
    </div>
  );
}
