'use client';

import React from 'react';
import Image from 'next/image';
import { PPOAccordion } from '@/components/custom-mui/Accordion';
import { PPOAccordionDetails } from '@/components/custom-mui/AccordionDetails';
import { PPOAccordionSummary } from '@/components/custom-mui/AccordionSummary';

export default function Dictionary() {
  return (
    <div className="flex flex-col items-center">
      {/* Изображение */}
      <div className="relative w-full h-[206px] lg:h-[342px]">
        <Image src="/images/pages/dictionary_image.webp" fill alt="Dictionary image." className="object-cover" />
      </div>

      {/* Выбор типа информации */}
      <div className="flex w-full text-[#ffffff] text-[20px] lg:text-[35px]">
        <div className="flex items-center justify-center flex-1 bg-[#F34252] text-center h-[52px] lg:h-[106px]">
          <p>Работнику</p>
        </div>
        <div className="flex items-center justify-center flex-1 bg-[#207EEB] text-center h-[52px] lg:h-[106px]">
          <p>Студенту</p>
        </div>
      </div>

      {/* Тело страницы */}
      <div className="w-full max-w-screen-xl px-5 py-[20px] lg:py-[50px]">
        <div className="text-[25px] font-bold lg:text-[48px]">
          О разделе
        </div>

        <p className="font-normal text-[14px] mt-[5px] lg:text-[35px]">
          В этом разделе вы найдете нужные справочные материалы.
          Мы собрали всю необходимую информацию в удобном формате,
          чтобы вы могли легко найти ответы на свои вопросы.
          Все, что нужно, теперь под рукой!
        </p>
      </div>

      {/* Студенту */}
      <div className="w-full max-w-screen-xl px-5 py-[20px] lg:py-[50px]">
        <div className="text-[25px] font-bold lg:text-[48px]">
          Бюджетнику
        </div>

        <PPOAccordion>
          <PPOAccordionSummary>
            <p className="font-extrabold text-[16px] lg:text-[42px]">
              Государственная академическая стипендия
            </p>
          </PPOAccordionSummary>
          <PPOAccordionDetails>
            <div className="flex flex-col gap-5 font-normal text-[14px] lg:text-[35px]">
              <div>
                <p>
                  ГАС зачисляется ежемесячно, как правило, 25 числа каждого месяца,
                  на стипендиальную карту студента. Никаких заявлений или сведений
                  на эту выплату подавать не нужно.
                </p>
              </div>

              <div>
                <p>
                  <span className="font-semibold">Кому:</span>
                  {' '}
                  обучающимся по очной форме на бюджетной основе
                </p>
              </div>

              <div>
                <p>
                  <span className="font-semibold">Требование:</span>
                  {' '}
                  по итогам сессии не иметь оценок «удовлетворительно»
                  и академических задолженностей
                </p>
              </div>

              <div>
                <p>
                  1 семестр 1 курса —
                  {' '}
                  <span className="font-semibold text-[#207EEB]">2 200₽</span>
                </p>
                <p>
                  более половины оценок «хорошо» —
                  {' '}
                  <span className="font-semibold text-[#207EEB]">3 000₽</span>
                </p>
                <p>
                  половина и более оценок «отлично» —
                  {' '}
                  <span className="font-semibold text-[#207EEB]">4 500₽</span>
                </p>
              </div>

              <div>
                <p>
                  Далее размер выплат изменяется в зависимости от количества
                  закрытых сессий
                  {' '}
                  <span className="font-semibold">подряд</span>
                  {' '}
                  только на «отлично»:
                </p>
              </div>

              <div>
                <p>
                  1 сессия —
                  {' '}
                  <span className="font-semibold text-[#207EEB]">6 000₽</span>
                </p>
                <p>
                  2-3 сессий —
                  {' '}
                  <span className="font-semibold text-[#207EEB]">7 500₽</span>
                </p>
                <p>
                  4-5 сессий —
                  {' '}
                  <span className="font-semibold text-[#207EEB]">10 500₽</span>
                </p>
                <p>
                  6 и более сессий —
                  {' '}
                  <span className="font-semibold text-[#207EEB]">13 500₽</span>
                </p>
              </div>
            </div>
          </PPOAccordionDetails>
        </PPOAccordion>

        <div className="text-[25px] font-bold lg:text-[48px]">
          Платнику
        </div>

        <PPOAccordion>
          <PPOAccordionSummary>
            <p className="font-extrabold text-[16px] lg:text-[42px]">
              Государственная академическая стипендия
            </p>
          </PPOAccordionSummary>
          <PPOAccordionDetails>
            <div className="flex flex-col gap-5 font-normal text-[14px] lg:text-[35px]">
              <div>
                <p>
                  ГАС зачисляется ежемесячно, как правило, 25 числа каждого месяца,
                  на стипендиальную карту студента. Никаких заявлений или сведений
                  на эту выплату подавать не нужно.
                </p>
              </div>

              <div>
                <p>
                  <span className="font-semibold">Кому:</span>
                  {' '}
                  обучающимся по очной форме на бюджетной основе
                </p>
              </div>

              <div>
                <p>
                  <span className="font-semibold">Требование:</span>
                  {' '}
                  по итогам сессии не иметь оценок «удовлетворительно»
                  и академических задолженностей
                </p>
              </div>

              <div>
                <p>
                  1 семестр 1 курса —
                  {' '}
                  <span className="font-semibold text-[#207EEB]">2 200₽</span>
                </p>
                <p>
                  более половины оценок «хорошо» —
                  {' '}
                  <span className="font-semibold text-[#207EEB]">3 000₽</span>
                </p>
                <p>
                  половина и более оценок «отлично» —
                  {' '}
                  <span className="font-semibold text-[#207EEB]">4 500₽</span>
                </p>
              </div>

              <div>
                <p>
                  Далее размер выплат изменяется в зависимости от количества
                  закрытых сессий
                  {' '}
                  <span className="font-semibold">подряд</span>
                  {' '}
                  только на «отлично»:
                </p>
              </div>

              <div>
                <p>
                  1 сессия —
                  {' '}
                  <span className="font-semibold text-[#207EEB]">6 000₽</span>
                </p>
                <p>
                  2-3 сессий —
                  {' '}
                  <span className="font-semibold text-[#207EEB]">7 500₽</span>
                </p>
                <p>
                  4-5 сессий —
                  {' '}
                  <span className="font-semibold text-[#207EEB]">10 500₽</span>
                </p>
                <p>
                  6 и более сессий —
                  {' '}
                  <span className="font-semibold text-[#207EEB]">13 500₽</span>
                </p>
              </div>
            </div>
          </PPOAccordionDetails>
        </PPOAccordion>
      </div>
    </div>
  );
}
