'use client';

import React from 'react';
import {
  PPOListTitle, PPOListWrapper, PPOPageContentWrapper, PPOSectionWrapper,
} from '@/components';

export default function Dictionary() {
  return (
    <div className="flex flex-col items-center">
      <PPOPageContentWrapper>

        <PPOSectionWrapper>

          <PPOListTitle>
            О разделе
          </PPOListTitle>

          <PPOListWrapper>
            <p className="text-[14px] font-normal lg:text-[26px]">
              В этом разделе вы найдете нужные справочные материалы.
              Мы собрали всю необходимую информацию в удобном формате,
              чтобы вы могли легко найти ответы на свои вопросы.
              Все, что нужно, теперь под рукой!
            </p>
          </PPOListWrapper>

        </PPOSectionWrapper>
      </PPOPageContentWrapper>
    </div>
  );
}
