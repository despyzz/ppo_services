'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { NewsElementVariants, VariantsToAspectRatio } from './constants';

interface NewsElementProps {
  variant: NewsElementVariants;
  src: string;
  alt: string;
  colorAccent: string; // Теперь это цвет без прозрачности (например, #3b82f6)
  title: string;
  description: string;
  date: string;
}

export function NewsElement({
  variant,
  src,
  alt,
  colorAccent,
  title,
  description,
  date,
}: NewsElementProps) {
  const [isHovered, setIsHovered] = useState(false);

  const accentWithOpacity = `${colorAccent}${isHovered ? 'b3' : '4d'}`; // b3 - 70%, 4d - 30$
  const hoverColor = 'rgba(30, 30, 30, 0.7)';

  return (
    <div
      className={`relative h-[clamp(144px,_35vw,_375px)] overflow-hidden ${VariantsToAspectRatio[variant]}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Изображение с эффектом размытия при наведении */}
      <div className={`relative size-full duration-500 ${isHovered ? 'blur-[2px]' : ''}`}>
        <Image
          src={src}
          alt={alt}
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

        <div className={`min-h-[20px] overflow-y-auto transition-opacity duration-500 ${isHovered ? 'opacity-90' : 'opacity-0'}`}>
          <p className="text-[clamp(12px,_2.5vw,_24px)]">
            {description}
          </p>
        </div>

        <p className="self-end text-[clamp(14px,_3vw,_32px)] font-bold drop-shadow-md">
          {title}
        </p>
      </div>
    </div>
  );
}
