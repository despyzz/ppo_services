'use client';

import React from 'react';
import {
  PPOAccordion,
  PPOAccordionDetails,
  PPOAccordionSummary,
  PPOListTitle,
  PPOListWrapper, PPOPageContentWrapper,
  PPOSectionWrapper,
} from '@/components';

export default function EmployeePage() {
  return (
    <PPOPageContentWrapper>

      <PPOSectionWrapper>
        <PPOListTitle>
          Материальная помощь
        </PPOListTitle>

        <PPOListWrapper>
          <PPOAccordion>
            <PPOAccordionSummary>
              <p>
                Материальная помощь работникам
              </p>
            </PPOAccordionSummary>
            <PPOAccordionDetails>
              <div className="flex flex-col gap-5">
                <div>
                  <p>
                    <span className="font-semibold">
                      Материальная помощь может
                      быть выдана по следующим причинам:
                    </span>
                  </p>
                </div>

                <div>
                  <p>
                    - Платное стационарное лечение
                  </p>
                  <p>
                    - Выход на пенсию, в том числе по
                    болезни, инвалидности (без продолжения работы)
                  </p>
                  <p>
                    - Рождение ребёнка (усыновление (удочерение)/установление
                    опеки и попечительства)
                  </p>
                  <p>
                    - Поступление ребёнка в первый класс (родителям, законным представителям)
                  </p>
                  <p>
                    - Бракосочетание члена Профсоюза
                  </p>
                  <p>
                    - Частичная компенсация затрат работника на услуги по оздоровлению и занятию
                    физической культурой и спортом (бассейн, тренажёрный зал,
                    спортивный клуб и т.п.)
                  </p>
                </div>

                <div>
                  <p>
                    Для получения выплаты нужно обратиться в Профком с
                    {' '}
                    <span className="font-semibold">подтверждающими документами</span>
                    {' '}
                    и
                    {' '}
                    <span className="font-semibold">реквизитами расчетного счета</span>
                    {' '}
                    для перечисления материальной помощи.
                    {' '}
                    <span className="font-semibold">Приоритетно:</span>
                    {' '}
                    счет в Сбербанке.
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-semibold">А также материальную помощь можно получить за:</span>
                  </p>
                  <p>
                    - Приобретение дорогостоящих медицинских препаратов и
                    лечебного оборудования (лечебных материалов)
                  </p>
                  <p>
                    - Лечение и протезирование зубов
                  </p>
                  <p>
                    - Проведение хирургических операций по жизненно важным показаниям
                  </p>
                  <p>
                    - Возникновение у работника критических обстоятельств
                    (кража, пожар, затопление и т.д.)
                  </p>
                  <p>
                    - Смерть близкого родственника (муж, жена, дети, родители)
                  </p>
                  <p>
                    - Смерть члена Профсоюза
                  </p>
                  <p>
                    - Воспитание ребёнка-инвалида в возрасте до 18 лет
                  </p>
                  <p>
                    - Одинокому родителю несовершеннолетнего ребёнка (детей)
                  </p>
                  <p>
                    - Многодетным родителям, законным представителям (на несовершеннолетних
                    детей или до окончания обучения детей в образовательной организации по
                    очной форме)
                  </p>
                  <p>
                    - Частичная компенсация затрат на организованную Профсоюзом программу
                    оздоровления и отдыха работников и (или) их детей в возрасте до 15 лет
                  </p>
                  <p>
                    - Лечение детей работников-членов Профсоюза в специализированных медицинских
                    и оздоровительных учреждениях на территории Российской Федерации
                  </p>
                  <p>
                    - Помощь ветеранам и участникам ВОВ, одиноким и неработающим
                    пенсионерам-членам Профсоюза
                  </p>
                  <p>
                    - Временно оказавшимся в сложной жизненной ситуации, в иных случаях по решению
                    профсоюзного комитета (президиума).
                  </p>
                </div>
              </div>
            </PPOAccordionDetails>
          </PPOAccordion>
        </PPOListWrapper>
      </PPOSectionWrapper>

      <PPOSectionWrapper>
        <PPOListTitle>
          Выплаты в связи с юбилеем
        </PPOListTitle>

        <PPOListWrapper>
          <PPOAccordion>
            <PPOAccordionSummary>
              <p>
                По стажу работы
              </p>
            </PPOAccordionSummary>
            <PPOAccordionDetails>
              <div className="flex flex-col gap-5">
                <div>
                  <p>
                    <span className="font-semibold">Минимальный стаж для выплаты -</span>
                    {' '}
                    <span className="font-semibold text-[#207EEB]">15 лет.</span>
                  </p>
                </div>

                <div>
                  <p>
                    Для определения стажа работы в Университете засчитываются периоды работы:
                  </p>
                </div>

                <div>
                  <p>
                    - В федеральном государственном бюджетном образовательном учреждении
                    высшего образования
                    {' '}
                    <span className="font-semibold">«Московский государственный технический университет «МАМИ»</span>
                  </p>
                  <p>
                    - В федеральном государственном образовательном учреждении среднего
                    профессионального образования
                    {' '}
                    <span className="font-semibold">«Ивантеевский промышленно-экономический колледж»</span>
                  </p>
                  <p>
                    - В федеральном государственном образовательном учреждении среднего
                    профессионального образования
                    {' '}
                    <span className="font-semibold">«Тучковский автотранспортный колледж»</span>
                  </p>
                  <p>
                    - В федеральном государственном бюджетном образовательном учреждении высшего
                    профессионального образования
                    {' '}
                    <span className="font-semibold">«Московский государственный университет инженерной экологии»</span>
                  </p>
                  <p>
                    - В федеральном государственном бюджетном учреждении
                    {' '}
                    <span className="font-semibold">«Федеральный музей профессионального образования»</span>
                  </p>
                  <p>
                    - В федеральном государственном бюджетном образовательном учреждении высшего
                    профессионального образования
                    {' '}
                    <span className="font-semibold">«Московский государственный вечерний металлургический институт»</span>
                  </p>
                  <p>
                    - В федеральном государственном бюджетном образовательном учреждении высшего
                    профессионального образования
                    {' '}
                    <span className="font-semibold">«Московский государственный открытый университет имени В.С. Черномырдина»</span>
                  </p>
                  <p>
                    - В федеральном государственном бюджетном образовательном учреждении высшего
                    профессионального образования
                    {' '}
                    <span className="font-semibold">«Московский государственный индустриальный университет»</span>
                  </p>
                  <p>
                    - В федеральном государственном бюджетном образовательном учреждении высшего
                    профессионального образования
                    {' '}
                    <span className="font-semibold">«Московский государственный университет печати имени Ивана Федорова»</span>
                  </p>
                  <p>
                    - В Электростальском политехническом институте (филиале) федерального
                    государственного автономного образовательного учреждения высшего
                    профессионального образования
                    {' '}
                    <span className="font-semibold">«Национальный исследовательский технологический университет«МИСиС»</span>
                  </p>
                </div>
              </div>
            </PPOAccordionDetails>
          </PPOAccordion>

          <PPOAccordion>
            <PPOAccordionSummary>
              <p>
                По возрасту
              </p>
            </PPOAccordionSummary>
            <PPOAccordionDetails>
              <div className="flex flex-col gap-5">
                <div>
                  <p>
                    Начиная с
                    {' '}
                    <span className="font-semibold text-[#207EEB]">50-и лет.</span>
                  </p>
                </div>

                <div>
                  <p>
                    Для получения выплаты обратиться к
                    {' '}
                    <span className="font-semibold">председателю Профбюро.</span>
                  </p>
                </div>
              </div>
            </PPOAccordionDetails>
          </PPOAccordion>
        </PPOListWrapper>
      </PPOSectionWrapper>

      <PPOSectionWrapper>
        <PPOListTitle>
          Дополнительные оплачиваемые дни отпуска
        </PPOListTitle>

        <PPOListWrapper>
          <PPOAccordion>
            <PPOAccordionSummary>
              <p>
                Дополнительные оплачиваемые дни отпуска
              </p>
            </PPOAccordionSummary>
            <PPOAccordionDetails>
              <div className="flex flex-col gap-5">
                <div>
                  <p>
                    Согласно коллективному договору работникам предоставляются дополнительные
                    оплачиваемые дни отпуска по следующим причинам:
                  </p>
                  <p>
                    - работникам, имеющим
                    {' '}
                    <span className="font-semibold">двоих и более</span>
                    {' '}
                    детей в возрасте
                    {' '}
                    <span className="font-semibold">до 14 лет, -</span>
                    {' '}
                    <span className="font-semibold text-[#207EEB]">3 (три)</span>
                    {' '}
                    календарных дня;
                  </p>
                  <p>
                    - работникам, имеющим
                    {' '}
                    <span className="font-semibold">ребёнка-инвалида</span>
                    {' '}
                    в возрасте
                    {' '}
                    <span className="font-semibold">до 18 лет, -</span>
                    {' '}
                    <span className="font-semibold text-[#207EEB]">5 (пять)</span>
                    {' '}
                    календарных дней;
                  </p>
                  <p>
                    <span className="font-semibold">одиноким матерям (отцам) -</span>
                    {' '}
                    <span className="font-semibold text-[#207EEB]">5 (пять)</span>
                    {' '}
                    календарных дней;
                  </p>
                  <p>
                    работникам в
                    {' '}
                    <span className="font-semibold"> случаях рождения ребёнка,регистрации брака, смерти близких родственников -</span>
                    {' '}
                    <span className="font-semibold text-[#207EEB]">3 (три)</span>
                    {' '}
                    календарных дня;
                  </p>
                  <p>
                    - работникам,
                    {' '}
                    <span className="font-semibold">сопровождающим детей</span>
                    {' '}
                    младшего школьного возраста в школу в
                    {' '}
                    <span className="font-semibold">первый день учебного года, -</span>
                    {' '}
                    <span className="font-semibold text-[#207EEB]">1 (один) день;</span>
                    {' '}
                  </p>
                  <p>
                    - работникам, имеющим общий стаж работы в Университете:
                  </p>
                  <p>
                    {'  '}
                    <span className="font-semibold">от 20 до 25 лет -</span>
                    {' '}
                    <span className="font-semibold text-[#207EEB]">1 (один) день;</span>
                  </p>
                  <p>
                    {'  '}
                    <span className="font-semibold">от 25 до 30 лет -</span>
                    {' '}
                    <span className="font-semibold text-[#207EEB]">2 (два) дня;</span>
                  </p>
                  <p>
                    {'  '}
                    <span className="font-semibold">от 30 до 35 лет -</span>
                    {' '}
                    <span className="font-semibold text-[#207EEB]">3 (три) дня;</span>
                  </p>
                  <p>
                    {'  '}
                    <span className="font-semibold">свыше 35 лет -</span>
                    {' '}
                    <span className="font-semibold text-[#207EEB]">4 (четыре) дня.</span>
                  </p>
                </div>

                <div>
                  <p>
                    Ежегодный дополнительный отпуск предоставляется в текущем календарном году,
                    {' '}
                    <span className="font-semibold">не переносится</span>
                    {' '}
                    на следующий год,
                    {' '}
                    <span className="font-semibold">не суммируется</span>
                    {' '}
                    и
                    {' '}
                    <span className="font-semibold">не может быть разделён</span>
                    {' '}
                    на части.
                  </p>
                </div>
              </div>
            </PPOAccordionDetails>
          </PPOAccordion>
        </PPOListWrapper>
      </PPOSectionWrapper>

      <PPOSectionWrapper>
        <PPOListTitle>
          Оздоровление и отдых
        </PPOListTitle>

        <PPOListWrapper>
          <PPOAccordion>
            <PPOAccordionSummary>
              <p>
                Программа «Мать и дитя»
              </p>
            </PPOAccordionSummary>
            <PPOAccordionDetails>
              <div className="flex flex-col gap-5">
                <div>
                  <p>
                    Актуальная информация в Профкоме
                  </p>
                </div>
              </div>
            </PPOAccordionDetails>
          </PPOAccordion>

          <PPOAccordion>
            <PPOAccordionSummary>
              <p>
                «ПРОФКУРОРТ»
              </p>
            </PPOAccordionSummary>
            <PPOAccordionDetails>
              <div className="flex flex-col gap-5">
                <div>
                  <p>
                    Федерация Независимых Профсоюзов России в лице уполномоченной компании
                    «СКО ФНПР «ПРОФКУРОРТ» предоставляет возможность приобретения профсоюзных
                    путевок в лучшие профсоюзные санатории России
                    {' '}
                    <span className="font-semibold text-[#207EEB]">с 20% скидкой.</span>
                    {' '}
                    Скидки распространяются на членов семей.
                  </p>
                </div>

                <div>
                  <p>
                    <a href="https://www.profkurort.ru/unions/" className="underline underline-offset-2" target="_blank" rel="noreferrer">Льготные путевки в санаторий членам профсоюзов (ФНПР)</a>
                  </p>
                </div>
              </div>
            </PPOAccordionDetails>
          </PPOAccordion>

          <PPOAccordion>
            <PPOAccordionSummary>
              <p>
                Санаторно-курортное лечение
              </p>
            </PPOAccordionSummary>
            <PPOAccordionDetails>
              <div className="flex flex-col gap-5">
                <div>
                  <p>
                    Санаторно-курортное лечение в здравницах Белоруссии
                    совместно с &#34;Белпрофсоюзкурорт&#34;
                    {' '}
                    <span className="font-semibold text-[#207EEB]">со скидкой 10%.</span>
                    {' '}
                    Подробнее:
                    {' '}
                    <a href="https://kurort.by" className="underline underline-offset-2" target="_blank" rel="noreferrer">https://kurort.by</a>
                  </p>
                </div>
              </div>
            </PPOAccordionDetails>
          </PPOAccordion>
        </PPOListWrapper>
      </PPOSectionWrapper>

      <PPOSectionWrapper>
        <PPOListTitle>
          Программы лояльности
        </PPOListTitle>

        <PPOAccordion>
          <PPOAccordionSummary>
            <p>
              ПрофПлюс
            </p>
          </PPOAccordionSummary>
          <PPOAccordionDetails>
            <div className="flex flex-col gap-5">
              <div>
                <p>
                  ПрофПлюс - Широкая программа лояльности и скидок для сотрудников
                  {' '}
                  <a href="https://profplus.info" className="underline underline-offset-2" target="_blank" rel="noreferrer">https://profplus.info</a>
                </p>
              </div>
            </div>
          </PPOAccordionDetails>
        </PPOAccordion>
      </PPOSectionWrapper>

    </PPOPageContentWrapper>
  );
}
