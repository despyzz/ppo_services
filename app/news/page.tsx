'use client';

import {
  PageTransition,
  PPOAccordion,
  PPOListWrapper,
  PPOPageContentWrapper,
  PPOSectionWrapper,
  PPOAccordionImageSummary,
  PPOAccordionDetails,
} from '@/components';
import Image from 'next/image';
import React from 'react';

export default function News() {
  return (
    <PageTransition>
      <div className="flex flex-col items-center">
        {/* Изображение */}
        <div className="relative h-[206px] w-full lg:h-[342px]">
          <Image src="/images/pages/news_image.jpg" fill alt="News image." className="object-cover" />
          <div className="absolute inset-0 flex justify-center">
            <div className="flex w-full max-w-screen-xl items-center px-5">
              <p className="text-[30px] font-bold text-white lg:text-[64px]">
                То, что нельзя пропустить
              </p>
            </div>
          </div>
        </div>

        <PPOPageContentWrapper>

          <PPOSectionWrapper>
            <PPOListWrapper>
              <PPOAccordion>
                <PPOAccordionImageSummary>
                  <div className="aspect-[352/91] w-full">
                    <Image
                      src="/images/pages/main/9l4N4CdkA8k 1.png"
                      alt="Техническая конференция 2023"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="absolute inset-0 grid grid-rows-[auto_1fr_auto] p-4 text-white">
                    <div className="text-[clamp(12px,_2.5vw,_40px)] font-normal">
                      02.04.2025
                    </div>

                    <p className="self-end text-[clamp(14px,_3vw,_40px)] font-normal">
                      Техническая конференция 2023
                    </p>
                  </div>
                </PPOAccordionImageSummary>
                <PPOAccordionDetails>
                  <div className="mt-5 flex flex-col gap-5">
                    <div>
                      <p>
                        Школа организаторов и конкурс «Ты — лидер» стартовали!
                      </p>
                    </div>
                    <div>
                      <p>
                        В этом году выездные этапы проектов проходят совместно: 7 команд профбюро
                        борются за звание лучших, а 80 участников Школы проходят образовательную
                        программу и поддерживают своих конкурсантов.
                      </p>
                    </div>
                    <div>
                      <p>
                        В этом году выездные этапы проектов проходят совместно: 7 команд профбюро
                        борются за звание лучших, а 80 участников Школы проходят образовательную
                        программу и поддерживают своих конкурсантов.
                      </p>
                    </div>
                    <div>
                      <p>
                        В этом году выездные этапы проектов проходят совместно: 7 команд профбюро
                        борются за звание лучших, а 80 участников Школы проходят образовательную
                        программу и поддерживают своих конкурсантов.
                      </p>
                    </div>
                    <div>
                      <p>
                        В этом году выездные этапы проектов проходят совместно: 7 команд профбюро
                        борются за звание лучших, а 80 участников Школы проходят образовательную
                        программу и поддерживают своих конкурсантов.
                      </p>
                    </div>
                  </div>
                </PPOAccordionDetails>
              </PPOAccordion>
            </PPOListWrapper>
          </PPOSectionWrapper>

        </PPOPageContentWrapper>
      </div>
    </PageTransition>
  );
}
