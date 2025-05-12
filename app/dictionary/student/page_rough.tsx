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
import Link from 'next/link';

export default function StudentPage() {
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
                Государственная социальная стипендия
              </p>
            </PPOAccordionSummary>
            <PPOAccordionDetails>
              <div className="flex flex-col gap-5">
                <div>
                  <p>
                    На ГСС претендуют студенты, которые относятся к
                    определенным социальным категориям. Она назначается обучающимся
                    по личному заявлению, а к концу срока действия документа право
                    на выплату необходимо продлевать.
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-semibold">Кому:</span>
                    {' '}
                    обучающимся по очной форме на бюджетной основе,
                    относящимся к социальным категориям.
                  </p>
                  <p>
                    Заявление подается в <Link href="https://e.mospolytech.ru/#" className="underline underline-offset-2">личном кабинете</Link>
                  </p>
                  <p>
                    (Старый дизайн: «Справки, заявления»)
                  </p>
                </div>

                <div>
                  <p>
                    При необходимости, предоставь в
                    университет оригинал документа.
                  </p>
                </div>

                <div>
                  <p>
                    Размер социальной стипендии составляет
                    {' '}
                    <span className="font-semibold text-[#207EEB]">3 300₽</span>
                    {' '}
                    в месяц, а обучающимся на
                    {' '}
                    <span className="font-semibold">2, 3 и 4 семестрах</span>
                    , получающим одновременно
                    {' '}
                    <span className="font-semibold">академическую</span>
                    {' '}
                    и
                    {' '}
                    <span className="font-semibold">социальную</span>
                    {' '}
                    стипендию, государственная социальная
                    стипендия автоматически назначается в
                    {' '}
                    <span className="font-semibold">повышенном размере</span>
                    {' '}
                    (ПГСС), суммой
                    {' '}
                    <span className="font-semibold text-[#207EEB]">12 000 рублей</span>
                    {' '}
                    в месяц.
                  </p>
                </div>
              </div>
            </PPOAccordionDetails>
          </PPOAccordion>
          <PPOAccordion>
            <PPOAccordionSummary>
              <p>
                Повышенная государственная академическая стипендия
              </p>
            </PPOAccordionSummary>
            <PPOAccordionDetails>
              <div className="flex flex-col gap-5">
                <div>
                  <p>
                    Государственная академическая стипендия в повышенном
                    размере (ПГАС) — выплата, назначаемая студентам каждый
                    новый семестр на конкурсной основе. Конкурс на назначение
                    ПГАС объявляется в сентябре и феврале.
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-semibold">Кому:</span>
                    {' '}
                    обучающимся, получающим академическую стипендию и имеющим
                    достижения по одному из направлений деятельности:
                  </p>
                  <p>
                    - учебная
                  </p>
                  <p>
                    - научно-исследовательская
                  </p>
                  <p>
                    - общественная
                  </p>
                  <p>
                    - культурно-творческая
                  </p>
                  <p>
                    - спортивная
                  </p>
                </div>

                <div>
                  <p>
                    За успехи в
                    {' '}
                    <span className="font-semibold">общественной, культурно-творческой, спортивной</span>
                    {' '}
                    деятельности —
                    {' '}
                    <span className="font-semibold text-[#207EEB]">14 000₽</span>
                  </p>
                </div>

                <div>
                  <p>
                    За успехи в
                    {' '}
                    <span className="font-semibold">учебной и научно-исследовательской</span>
                    {' '}
                    деятельности:
                  </p>
                  <p>
                    1-2 курс —
                    {' '}
                    <span className="font-semibold text-[#207EEB]">15 500₽</span>
                  </p>
                  <p>
                    3-4 курс —
                    {' '}
                    <span className="font-semibold text-[#207EEB]">18 000₽</span>
                  </p>
                  <p>
                    5-6 курс —
                    {' '}
                    <span className="font-semibold text-[#207EEB]">21 500₽</span>
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-semibold">Важно:</span>
                    {' '}
                    учитываются достижения обучающихся в течение года до
                    проведения конкурса, подтверждаемые документально.
                  </p>
                  <p>
                    При назначении государственной академической стипендии в
                    повышенном размере, студенту отменяется текущая академическая
                    стипендия. Иными словами,
                    {' '}
                    <span className="font-semibold">выплаты ГАС и ПГАС не суммируются.</span>
                  </p>
                </div>
              </div>
            </PPOAccordionDetails>
          </PPOAccordion>
        </PPOListWrapper>
      </PPOSectionWrapper>

      <PPOSectionWrapper>
        <PPOListTitle>
          Платнику
        </PPOListTitle>

        <PPOListWrapper>
          <PPOAccordion>
            <PPOAccordionSummary>
              <p>
                Стипендия Московского Политеха для
                обучающихся на платной основе обучения
              </p>
            </PPOAccordionSummary>
            <PPOAccordionDetails>
              <div className="flex flex-col gap-5">
                <div>
                  <p>
                    Студенты, имеющие особые достижения в
                    {' '}
                    <span className="font-semibold">учебной, научно-исследовательской, общественной,
                      культурно-творческой и спортивной деятельностях,
                    </span>
                    {' '}
                    могут стать получателями стипендии Московского Политеха
                    для обучающихся на платной основе обучения.
                  </p>
                </div>

                <div>
                  <p>
                  Размер стипендии —
                  {' '}
                  <span className="font-semibold text-[#207EEB]">2 200₽</span>
                  {' '}
                  ежемесячно, срок назначения — 6 месяцев. Назначение
                  стипендии происходит на конкурсной основе.
                  </p>
                </div>
              </div>
            </PPOAccordionDetails>
          </PPOAccordion>

          <PPOAccordion>
            <PPOAccordionSummary>
              <p>
                Перевод с платной основы
                обучения на бюджетную
              </p>
            </PPOAccordionSummary>
            <PPOAccordionDetails>
              <div className="flex flex-col gap-5">
                <div>
                  <p>
                    <span className="font-semibold">Требования:</span>
                    {' '}
                    отсутствие академических задолженностей, дисциплинарных
                    взысканий, задолженности по оплате обучения и наличие
                    вакантных мест.
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-semibold">Кому:</span>
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-semibold">1.</span>
                    {' '}
                    лицам, прошедшим сессию без оценок «удовлетворительно»
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-semibold">2.</span>
                    {' '}
                    следующим категориям
                    {' '}
                    <span className="font-semibold">(Гражданам РФ):</span>
                  </p>
                  <p>
                    2.1. дети-сироты и дети без попечения
                    родителей, лица из их числа
                  </p>
                  <p>
                    2.2. граждане до 20 лет с одним родителем-инвалидом
                    I группы при доходе ниже прожиточного минимума
                  </p>
                  <p>
                    2.3. женщины, родившие ребенка в период обучения
                  </p>
                  <p>
                    2.4. дети лиц, принимающих или принимавших участие в СВО на
                    территориях Украины, ДНР, ЛНР, Запорожской и Херсонской областей
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-semibold">3.</span>
                    {' '}
                    обучающиеся, потерявшие одного или обоих родителей/законных
                    представителей в период обучения
                  </p>
                </div>

                <div>
                  <p>
                    Для перевода необходимо собрать
                    {' '}
                    <span className="font-semibold">перечень документов: заполненное
                      (вручную) <Link href="https://mospolytech.ru/upload/medialibrary/617/j3kff61hjkbrsnydderr22tea2jio1de/Zayavlenie-na-izmenenie-usloviy-obucheniya.pdf" className="underline underline-offset-2">заявление,</Link>
                      {' '}
                      копия паспорта, документы с подтверждением индивидуальных
                      достижений (по желанию), копия зачетной книжки.
                    </span>
                    {' '}
                    Если Вы относитесь к определенной категории, то надо отправить
                    {' '}
                    <span className="font-semibold">документ, подтверждающий
                      отнесение к определенным категориям.
                    </span>
                  </p>
                </div>

                <div>
                  <p>
                    Собранные документы можно подать следующими способами:
                  </p>
                  <p>
                    - лично по адресу: Москва, Б. Семеновская ул., 38, корпус Н, 
                    4 этаж, аудитория Н-408 с 13:45 до 17:00 в будние дни;
                  </p>
                  <p>
                    - почтовым отправлением с уведомлением и описью вложения по
                    адресу: 107023, Москва, ул. Б. Семеновская, 38, в приемную комиссию;
                  </p>
                  <p>
                    - в электронном виде на электронную почту portal@mospolytech.ru.
                  </p>
                </div>

                <div>
                  <p>
                    Документы принимаются
                    {' '}
                    <span className="font-semibold text-[#207EEB]">с 23 марта по 15 августа</span>
                    {' '}
                    (с возможным продлением до
                      <span className="font-semibold">15 сентября</span>
                    ) — для обучения
                    {' '}
                    <span className="font-semibold">на осеннем семестре</span>
                    {' '}
                    (обучение начинается с сентября);
                  </p>
                  <p>
                    <span className="font-semibold text-[#207EEB]">с 16 октября по 28 января</span>
                    {' '}
                    следующего года (с возможным продлением до
                      <span className="font-semibold">20 февраля</span>
                    ) — для обучения
                    {' '}
                    <span className="font-semibold">на весеннем семестре</span>
                    {' '}
                    (обучение начинается в феврале).
                  </p>
                </div>

                <div>
                  <p>
                    С наличием вакантных мест можно ознакомиться по
                    {' '}
                    <Link href="https://mospolytech.ru/postupayushchim/zapolnenie-vakantnyh-mest/kolichestvo-vakantnyh-mest-v-universitete/" className="underline underline-offset-2">ссылке</Link>
                  </p>
                  <p>
                    С результатом перевода можно ознакомиться по
                    {' '}
                    <Link href="https://mospolytech.ru/postupayushchim/zapolnenie-vakantnyh-mest/spiski-podavshih-zayavlenie-i-rezultaty-rassmotreniya/" className="underline underline-offset-2">ссылке</Link>
                  </p>
                </div>
              </div>
            </PPOAccordionDetails>
          </PPOAccordion>

          <PPOAccordion>
            <PPOAccordionSummary>
              <p>
                Оплата обучения
              </p>
            </PPOAccordionSummary>
            <PPOAccordionDetails>
              <div className="flex flex-col gap-5">
                <div>
                  <p>
                    Оплата обучения в Московском Политехе 
                    производится по следующему графику:
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-semibold text-[#207EEB]">До 1 сентября</span>
                    {' '}
                    — осенний семестр
                  </p>
                  <p>
                    <span className="font-semibold text-[#207EEB]">До 1 февраля</span>
                    {' '}
                    — весенний семестр
                  </p>
                </div>
                
                <div>
                  <p>
                    Оплата производится двумя способами:
                  </p>
                </div>

                <div>
                  <p>
                    — На сайте
                  </p>
                  <p>
                    — Через банкоматы, отделения банков
                    и банковские приложения
                  </p>
                </div>
              </div>
            </PPOAccordionDetails>
          </PPOAccordion>

          <PPOAccordion>
            <PPOAccordionSummary>
              <p>
                Скидка на оплату обучения
              </p>
            </PPOAccordionSummary>
            <PPOAccordionDetails>
              <div className="flex flex-col gap-5">
                <div>
                  <p>
                    <span className="font-semibold">Срок действия скидки —</span>
                    {' '}
                    <span className="font-semibold text-[#207EEB]">1 год.</span>
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-semibold">Кому назначается:</span>
                  </p>
                </div>

                <div>
                  <p>
                    — Детям-сиротам и детям, оставшимся
                    без попечения родителей
                  </p>
                  <p>
                    — Инвалидам 1 и 2 групп
                    и инвалидам с детства
                  </p>
                  <p>
                    — Лицам, пострадавшим в результате аварии
                    на Чернобыльской АЭС и иных рад. катастроф
                  </p>
                  <p>
                    — Работникам и детям работников вуза
                  </p>
                  <p>
                    — Получающим государственную
                    социальную помощь
                  </p>
                  <p>
                    — Участникам СВО и детям участников СВО
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-semibold">Требования:</span>
                  </p>
                </div>

                <div>
                  <p>
                    — Отсутствие задолженностей
                    по оплате обучения
                  </p>
                  <p>
                    — Отсутствие дисциплинарных взысканий
                  </p>
                  <p>
                    — Отсутствие академических задолженностей
                  </p>
                </div>
              </div>
            </PPOAccordionDetails>
          </PPOAccordion>
          <PPOAccordion>
            <PPOAccordionSummary>
              <p>
                Отсрочка или рассрочка оплаты обучения
              </p>
            </PPOAccordionSummary>
            <PPOAccordionDetails>
              <div className="flex flex-col gap-5">
                <div>
                  <p>
                   <span className="font-semibold">Основания:</span>
                  </p>
                </div>

                <div>
                  <p>
                    — Материальные или финансовые затруднения
                  </p>
                  <p>
                    — Принадлежность к льготной категории граждан
                  </p>
                </div>

                <div>
                  <p>
                   <span className="font-semibold">Требования:</span>
                  </p>
                </div>

                <div>
                  <p>
                    — Отсутствие задолженностей по оплате
                    в предыдущие платёжные периоды
                  </p>
                  <p>
                    — Внесение 1/3 стоимости
                    образовательных услуг за семестр
                  </p>
                  <p>
                    — Подача заявления
                    {' '}
                    <span className="font-semibold text-[#207EEB]">не позднее 5-ти рабочих дней</span>
                    {' '}
                    до окончания срока оплаты образовательных услуг
                  </p>
                </div>
              </div>
            </PPOAccordionDetails>
          </PPOAccordion>
        </PPOListWrapper>
      </PPOSectionWrapper>

      <PPOSectionWrapper>
        <PPOListTitle>
          Иностранцу
        </PPOListTitle>

        <PPOListWrapper>
          <PPOAccordion>
            <PPOAccordionSummary>
              <p>
                Оформление регистрации
              </p>
            </PPOAccordionSummary>
            <PPOAccordionDetails>
              <div className="flex flex-col gap-5">
                <div>
                  <p>
                    Иностранный отдел осуществляет постановку на
                    миграционный учёт только тех иностранных
                    граждан, которые
                    {' '}
                    <span className="font-semibold">проживают в общежитии,</span>
                    {' '}
                    остальные студенты обязаны
                    {' '}
                    <span className="font-semibold">самостоятельно оформить регистрацию</span>
                    {' '}
                    по месту своего фактического пребывания, соблюдая все
                    установленные законодательством РФ сроки и предоставить
                    копию регистрационных документов в
                    {' '}
                    <span className="font-semibold">кабинет В-102.</span>
                  </p>
                </div>
              </div>
            </PPOAccordionDetails>
          </PPOAccordion>

          <PPOAccordion>
            <PPOAccordionSummary>
              <p>
                Продление визы
              </p>
            </PPOAccordionSummary>
            <PPOAccordionDetails>
              <div className="flex flex-col gap-5">
                <div>
                  <p>
                    Для продления визы иностранный гражданин
                    {' '}
                    <span className="font-semibold">обязан лично</span>
                    {' '}
                    явиться
                    {' '}
                    <span className="font-semibold">в иностранный отдел (В-102)
                      не позднее, чем
                      {' '}
                      <span className="font-semibold text-[#207EEB]">за 1.5 месяца</span>
                      {' '}
                      до окончания срока действия визы и предоставить:
                    </span>
                  </p>
                </div>

                <div>
                  <p>
                    - анкета (подписывается иностранным гражданином лично)
                  </p>
                  <p>
                    - фото 3х4 (1 шт.)
                  </p>
                  <p>
                    - документ, удостоверяющий личность (паспорт)
                  </p>
                  <p>
                    - миграционная карта
                  </p>
                  <p>
                    - регистрация
                  </p>
                  <p>
                    - документ об уплате государственной пошлины
                  </p>
                  <p>
                    - документ об оплате текущего семестра 
                    
                    (для обучающихся на платной основе).
                  </p>
                </div>
              </div>
            </PPOAccordionDetails>
          </PPOAccordion>

          <PPOAccordion>
            <PPOAccordionSummary>
              <p>
                Изменение места проживания
              </p>
            </PPOAccordionSummary>
            <PPOAccordionDetails>
              <div className="flex flex-col gap-5">
                <div>
                  <p>
                    <span className="font-semibold">При переезде с одного адреса на другой,</span>
                    {' '}
                    либо смене общежития
                    {' '}
                    <span className="font-semibold">необходимо сообщить</span>
                    {' '}
                    об этом
                    {' '}
                    <span className="font-semibold">в иностранный отдел
                      (В-102)
                      {' '}
                      <span className="font-semibold text-[#207EEB]">в течение трёх рабочих дней.</span>
                    </span>
                  </p>
                </div>
              </div>
            </PPOAccordionDetails>
          </PPOAccordion>

          <PPOAccordion>
            <PPOAccordionSummary>
              <p>
                Утрата документов
              </p>
            </PPOAccordionSummary>
            <PPOAccordionDetails>
              <div className="flex flex-col gap-5">
                <div>
                  <p>
                    При утрате паспорта, миграционной карты, либо уведомления
                    об установке на миграционный учёт иностранный гражданин
                    обязан
                    {' '}
                    <span className="font-semibold">незамедлительно</span>
                    {' '}
                    обратиться в ближайшее отделение полиции по месту утраты
                    или обнаружения пропажи документа для получения справки о
                    происшествии, а также сообщить об этом в иностранный отдел
                    {' '}
                    <span className="font-semibold">(В-102).</span>
                  </p>
                </div>

                <div>
                  <p>
                    Иностранный студент
                    {' '}
                    <span className="font-semibold">самостоятельно</span>
                    {' '}
                    принимает меры к восстановлению утраченных (похищенных) документов.
                  </p>
                </div>
              </div>
            </PPOAccordionDetails>
          </PPOAccordion>

          <PPOAccordion>
            <PPOAccordionSummary>
              <p>
                Порядок подачи документов для
                постановки на миграционный учёт
              </p>
            </PPOAccordionSummary>
            <PPOAccordionDetails>
              <div className="flex flex-col gap-5">
                <div>
                  <p>
                    <span className="font-semibold text-[#207EEB]">В первый рабочий день</span>
                    {' '}
                    после пересечения границы РФ
                    {' '}
                    <span className="font-semibold">Вы обязаны</span>
                    {' '}
                    лично явиться в иностранный отдел (В-102) для
                    оформления регистрации.
                  </p>
                  <p>
                    Для продления регистрации надо обратиться в иностранный отдел -
                    {' '}
                    <span className="font-semibold text-[#207EEB]">за 25 календарных дней</span>
                    {' '}
                    до окончания срока действия регистрации.
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-semibold">С собой надо будет взять:</span>
                  </p>
                </div>

                <div>
                  <p>
                    - документ, удостоверяющий личность (паспорт)
                  </p>
                  <p>
                    - ВНЖ или РВП (при наличии)
                  </p>
                  <p>
                    - миграционная карта
                  </p>
                  <p>
                    - действующая виза (для визовых стран)
                  </p>
                  <p>
                    - действующая регистрация
                  </p>
                  <p>
                    - дактилоскопия.
                  </p>
                </div>
              </div>
            </PPOAccordionDetails>
          </PPOAccordion>

          <PPOAccordion>
            <PPOAccordionSummary>
              <p>
                Изменения сведений о виде или реквизитах документа
              </p>
            </PPOAccordionSummary>
            <PPOAccordionDetails>
              <div className="flex flex-col gap-5">
                <div>
                  <p>
                    При внесениях изменений в сведения документа, удостоверяющего
                    личность, подтверждающих его право на пребывание в РФ, а также
                    его фамилии, имени, отчества, даты и места рождения, пола, либо
                    гражданства иностранный студент
                    {' '}
                    <span className="font-semibold">обязан
                      {' '}
                      <span className="font-semibold text-[#207EEB]">в течение суток</span>
                      {' '}
                      сообщить о данных фактах
                    </span>
                    {' '}
                    в иностранный отдел (В-102).
                  </p>
                </div>
              </div>
            </PPOAccordionDetails>
          </PPOAccordion>

          <PPOAccordion>
            <PPOAccordionSummary>
              <p>
                Нотариально заверенный перевод
              </p>
            </PPOAccordionSummary>
            <PPOAccordionDetails>
              <div className="flex flex-col gap-5">
                <div>
                  <p>
                    Не забудьте предоставить
                    {' '}
                    <span className="font-semibold">оригинал перевода паспорта</span>
                    {' '}
                    в иностранный отдел (В-102). Также он понадобится Вам при оформлении
                    социальной карты студента, материальной помощи и дотации.
                  </p>
                </div>
              </div>
            </PPOAccordionDetails>
          </PPOAccordion>

          <PPOAccordion>
            <PPOAccordionSummary>
              <p>
                Страховка, медосвидетельствование и дактилоскопия 
              </p>
            </PPOAccordionSummary>
            <PPOAccordionDetails>
              <div className="flex flex-col gap-5">
                <div>
                  <p>
                    С первого дня пребывания в России у каждого иностранного
                    гражданина должен быть оформлен
                    {' '}
                    <span className="font-semibold">страховой медицинский полис.</span>
                    {' '}
                    Оформить студенческий полис можно в любой страховой
                    организации, либо через иностранный отдел (В-102).
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
