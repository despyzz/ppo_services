'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { NewsItemDto } from '@/lib/models';
import { NewsElementVariants, VariantsToAspectRatio } from './constants';

type NewsItemProps = NewsItemDto;

export default function NewsItem({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id_news,
  name,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  description,
  date,
  path_to_photo,
  Alt,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Colour,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Attribute,
}: NewsItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  const accentWithOpacity = `${Colour}${isHovered ? 'b3' : '4d'}`; // b3 - 70%, 4d - 30%
  const hoverColor = 'rgba(30, 30, 30, 0.7)';

  return (
    <div
      className={`relative h-[clamp(144px,_35vw,_375px)] overflow-hidden ${VariantsToAspectRatio[NewsElementVariants.Rectangle]}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Изображение с эффектом размытия при наведении */}
      <div className={`relative size-full duration-500 ${isHovered ? 'blur-[2px]' : ''}`}>
        <Image
          // todo сделать адрес настраиваемым
          src={`http://localhost:8080/ppo/images/${path_to_photo}`}
          alt={Alt}
          fill
          className="object-cover"
        />
      </div>

      {/* Наложение цвета с прозрачностью */}
      <div
        className="absolute inset-0 transition-colors duration-500"
        style={{
          backgroundColor: isHovered ? hoverColor : accentWithOpacity,
        }}
      />

      <div className="absolute inset-0 grid grid-rows-[auto_1fr_auto] p-4 text-white">
        <div className="text-[clamp(12px,_2.5vw,_32px)] opacity-90">
          {date}
        </div>

        <p className="self-end text-[clamp(14px,_3vw,_32px)] font-bold drop-shadow-md">
          {name}
        </p>
      </div>
    </div>
  );
}
