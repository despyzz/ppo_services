import Link from 'next/link';
import React from 'react';

export interface NavigationItemProps {
  route: string;
  label: string;
}

export function Item(props: NavigationItemProps) {
  const { label, route } = props;

  return (
    <li>
      <Link href={route}>
        {label}
      </Link>
    </li>
  );
}
