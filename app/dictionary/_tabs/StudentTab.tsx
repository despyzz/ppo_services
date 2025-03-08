import {
  PPOAccordion, PPOAccordionDetails,
  PPOAccordionSummary,
  PPOListTitle,
  PPOListWrapper,
  PPOPageContentWrapper,
  PPOSectionWrapper,
} from '@/components';
import Link from 'next/link';
import React from 'react';

export function StudentTab() {
  return (
    <PPOPageContentWrapper>

      <PPOSectionWrapper>
        <PPOListTitle>
          Бюджетнику
        </PPOListTitle>

        <PPOListWrapper>
          <PPOAccordion>
            <PPOAccordionSummary>
              <p>
                Государственная академическая стипендия
              </p>
            </PPOAccordionSummary>
            <PPOAccordionDetails>
              <div className="flex flex-col gap-5">
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
          <PPOAccordion>
            <PPOAccordionSummary>
              <p>
                Государственная академическая стипендия
              </p>
            </PPOAccordionSummary>
            <PPOAccordionDetails>
              <div className="flex flex-col gap-5">
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
        </PPOListWrapper>
      </PPOSectionWrapper>

      <PPOSectionWrapper>
        <PPOListTitle>
          Пример заголовка
        </PPOListTitle>

        <PPOListWrapper>
          <PPOAccordion>
            <PPOAccordionSummary>
              <p>
                Пример названия блока
              </p>
            </PPOAccordionSummary>
            <PPOAccordionDetails>
              <div className="flex flex-col gap-5">
                <div>
                  <p>
                    <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="underline underline-offset-2">Пример ссылки</Link>
                  </p>
                </div>
              </div>
            </PPOAccordionDetails>
          </PPOAccordion>
        </PPOListWrapper>
      </PPOSectionWrapper>

    </PPOPageContentWrapper>
  );
}
