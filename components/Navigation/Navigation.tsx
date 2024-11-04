import React from 'react';
import { NAVIGATION_CONFIG } from '@/constants';
import { Item } from './Item';
import { Wrapper } from './Wrapper';

export function Navigation() {
  return (
    <Wrapper>
      {Object.entries(NAVIGATION_CONFIG).map(([route, label]) => (
        <Item key={route} route={route} label={label} />
      ))}
    </Wrapper>
  );
}
