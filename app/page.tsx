import React from 'react';
import { About } from '@/app/_blocks/about/About';
import Switcher from '@/app/_blocks/switcher/Switcher';
import NewsList from '@/app/_blocks/news/NewsList';
import { Partners, NewsWrapper } from './_blocks';

export default function Home() {
  return (
    <div>
      <Switcher />
      <div className="flex flex-col gap-[30px] py-[30px] lg:gap-[50px] lg:py-[50px]">
        <About />
        <NewsWrapper>
          <NewsList />
        </NewsWrapper>
        <Partners />
      </div>
    </div>
  );
}
