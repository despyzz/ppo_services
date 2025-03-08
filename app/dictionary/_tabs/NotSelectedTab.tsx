import {
  PPOListTitle, PPOListWrapper, PPOPageContentWrapper, PPOSectionWrapper,
} from '@/components';
import React from 'react';

export function NotSelectedTab() {
  return (
    <PPOPageContentWrapper>

      <PPOSectionWrapper>

        <PPOListTitle>
          О разделе
        </PPOListTitle>

        <PPOListWrapper>
          <p className="font-normal text-[14px] lg:text-[26px] lg:leading-<1.2>">
            В этом разделе вы найдете нужные справочные материалы.
            Мы собрали всю необходимую информацию в удобном формате,
            чтобы вы могли легко найти ответы на свои вопросы.
            Все, что нужно, теперь под рукой!
          </p>
        </PPOListWrapper>

      </PPOSectionWrapper>
    </PPOPageContentWrapper>
  );
}
