import { NewsItemDto } from '@/lib/models';
import { PPOAccordion, PPOAccordionDetails, PPOAccordionImageSummary } from '@/components';
import Image from 'next/image';
import React from 'react';

type NewsItemProps = NewsItemDto;
export default function NewsItem({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id_news,
  name,
  description,
  date,
  path_to_photo,
  Alt,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Colour,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Attribute,
}: NewsItemProps) {
  return (
    <PPOAccordion>
      <PPOAccordionImageSummary>
        <div className="aspect-[352/91] w-full">
          <Image
            // todo сделать адрес настраиваемым
            src={`http://localhost:8080/ppo/images/${path_to_photo}`}
            alt={Alt}
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 grid grid-rows-[auto_1fr_auto] p-4 text-white">
          <div className="text-[clamp(12px,_2.5vw,_40px)] font-normal">
            {date.replace(/-/g, '.')}
          </div>

          <p className="self-end text-[clamp(14px,_3vw,_40px)] font-normal">
            {name}
          </p>
        </div>
      </PPOAccordionImageSummary>
      <PPOAccordionDetails>
        <div className="mt-5 flex flex-col gap-5">
          {/* todo устранить уязвимость к XSS-атакам */}
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </PPOAccordionDetails>
    </PPOAccordion>
  );
}
