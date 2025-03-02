import { AppRoutes, NAVIGATION_CONFIG } from '@/constants';
import { Item } from '@/components/Navigation/Item';
import React from 'react';

export function NavigationItems() {
  return (
    <ul className="hidden lg:flex justify-between font-bold text-[#777E90] text-[16px] w-[40%] max-w-[576px]">
      {Object.entries(NAVIGATION_CONFIG)
        .filter(([key]) => key !== AppRoutes.Home)
        .map(([route, label]) => (<Item key={route} route={route} label={label} />))}
    </ul>
  );
}
