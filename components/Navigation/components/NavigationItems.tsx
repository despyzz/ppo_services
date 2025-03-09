import { AppRoutes, NAVIGATION_CONFIG } from '@/constants';
import { Item } from '@/components/Navigation/Item';
import React from 'react';

export function NavigationItems() {
  return (
    <ul className="hidden w-2/5 max-w-[576px] justify-between text-[16px] font-bold text-[#777E90] lg:flex">
      {Object.entries(NAVIGATION_CONFIG)
        .filter(([key]) => key !== AppRoutes.Home)
        .map(([route, label]) => (<Item key={route} route={route} label={label} />))}
    </ul>
  );
}
