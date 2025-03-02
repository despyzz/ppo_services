import { TELEGRAM_LINK, VK_LINK } from '@/constants/contacts';
import Image from 'next/image';
import React from 'react';

export const links = [
  // Телеграм
  <a
    key="telegram"
    href={TELEGRAM_LINK}
    target="_blank"
    rel="noreferrer"
  >
    <Image
      src="/icons/telegram_icon.svg"
      alt="telegram link"
      width={27}
      height={22}
    />
  </a>,

  // ВКонтакте
  <a
    key="vk"
    href={VK_LINK}
    target="_blank"
    rel="noreferrer"
  >
    <Image
      src="/icons/vk_icon.svg"
      alt="vk link"
      width={32}
      height={19}
    />
  </a>,
];
