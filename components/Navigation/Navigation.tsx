import React from 'react';
import { AppRoutes } from '@/constants';
import { Item } from './Item';
import { Wrapper } from './Wrapper';

export function Navigation() {
  return (
    <Wrapper>
      <Item route={AppRoutes.Contacts} label="Contacts" />
      <Item route={AppRoutes.Dictionary} label="Dictionary" />
      <Item route={AppRoutes.Documents} label="Documents" />
      <Item route={AppRoutes.Join} label="Join" />
      <Item route={AppRoutes.News} label="News" />
      <Item route={AppRoutes.Projects} label="Projects" />
      <Item route={AppRoutes.Team} label="Team" />
    </Wrapper>
  );
}
