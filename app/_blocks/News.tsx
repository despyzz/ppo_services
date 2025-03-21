import React from 'react';
import Image from 'next/image';

enum NewsElementVariants {
  Square,
  Rectangle,
}

interface NewsElementProps {
  variant: NewsElementVariants;
}

const VariantsToAspectRatio = {
  [NewsElementVariants.Square]: 'w-[clamp(144px,_35vw,_375px)]',
  [NewsElementVariants.Rectangle]: 'aspect-[2/1]',
};

function NewsElement({ variant }: NewsElementProps) {
  return (
    <div className={`relative h-[clamp(144px,_35vw,_375px)] bg-gray-300 ${VariantsToAspectRatio[variant]}`}>
      <Image src="/images/pages/main/9l4N4CdkA8k 1.png" alt="Картинка новости" fill className="object-cover" />
    </div>
  );
}

export function News() {
  return (
    <div className="flex flex-col gap-[30px] lg:gap-[50px]">
      <div>
        <p className="text-center text-[24px] font-bold lg:text-[50px]">
          Новости
        </p>
      </div>

      <div className="overflow-x-scroll scroll-smooth">
        <div className="flex size-fit">
          <NewsElement variant={NewsElementVariants.Square} />
          <NewsElement variant={NewsElementVariants.Rectangle} />
          <NewsElement variant={NewsElementVariants.Square} />
          <NewsElement variant={NewsElementVariants.Rectangle} />
          <NewsElement variant={NewsElementVariants.Square} />
          <NewsElement variant={NewsElementVariants.Rectangle} />
          <NewsElement variant={NewsElementVariants.Square} />
          <NewsElement variant={NewsElementVariants.Rectangle} />
        </div>
      </div>
    </div>
  );
}
