'use client';

import React from 'react';
import Image from 'next/image';
import {
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionProps,
  AccordionSummary as MuiAccordionSummary, accordionSummaryClasses,
  AccordionSummaryProps,
  styled,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  '.MuiButtonBase-root': {
    padding: 0,
  },
  '.MuiAccordionDetails-root': {
    padding: '0 0 0 32px',
  },
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<AddIcon />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: 'rotate(45deg)',
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

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
        <div className="text-[25px] font-bold lg:text-[40px]">
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
        <div className="text-[25px] font-bold lg:text-[40px]">
          Бюджетнику
        </div>

        <Accordion>
          <AccordionSummary>
            Государственная академическая стипендия
          </AccordionSummary>
          <AccordionDetails>
            <p className="font-normal text-[14px] lg:text-[35px]">
              ГАС зачисляется ежемесячно, как правило, 25 числа каждого месяца,
              на стипендиальную карту студента. Никаких заявлений или сведений
              на эту выплату подавать не нужно.
            </p>

            <p className="font-normal text-[14px] lg:text-[35px]">
              Кому: обучающимся по очной форме на бюджетной основе
            </p>

            <p className="font-normal text-[14px] lg:text-[35px]">
              Требование: по итогам сессии не иметь оценок «удовлетворительно»
              и академических задолженностей
            </p>

            <p className="font-normal text-[14px] lg:text-[35px]">
              1 семестр 1 курса — 2 200₽
            </p>
            <p className="font-normal text-[14px] lg:text-[35px]">
              более половины оценок «хорошо» — 3 000₽
            </p>
            <p className="font-normal text-[14px] lg:text-[35px]">
              половина и более оценок «отлично» — 4 500₽
            </p>

            <p className="font-normal text-[14px] lg:text-[35px]">
              Далее размер выплат изменяется в зависимости от количества
              закрытых сессий подряд только на «отлично»:
            </p>

            <p>
              1 сессия — 6 000₽
            </p>
            <p>
              2-3 сессий — 7 500₽
            </p>
            <p>
              4-5 сессий — 10 500₽
            </p>
            <p>
              6 и более сессий — 13 500₽
            </p>
          </AccordionDetails>
        </Accordion>

        <div className="text-[25px] font-bold lg:text-[40px]">
          Платнику
        </div>

        <Accordion>
          <AccordionSummary>
            Государственная академическая стипендия
          </AccordionSummary>
          <AccordionDetails>
            <p className="font-normal text-[14px] lg:text-[35px]">
              ГАС зачисляется ежемесячно, как правило, 25 числа каждого месяца,
              на стипендиальную карту студента. Никаких заявлений или сведений
              на эту выплату подавать не нужно.
            </p>

            <p className="font-normal text-[14px] lg:text-[35px]">
              Кому: обучающимся по очной форме на бюджетной основе
            </p>

            <p className="font-normal text-[14px] lg:text-[35px]">
              Требование: по итогам сессии не иметь оценок «удовлетворительно»
              и академических задолженностей
            </p>

            <p className="font-normal text-[14px] lg:text-[35px]">
              1 семестр 1 курса — 2 200₽
            </p>
            <p className="font-normal text-[14px] lg:text-[35px]">
              более половины оценок «хорошо» — 3 000₽
            </p>
            <p className="font-normal text-[14px] lg:text-[35px]">
              половина и более оценок «отлично» — 4 500₽
            </p>

            <p className="font-normal text-[14px] lg:text-[35px]">
              Далее размер выплат изменяется в зависимости от количества
              закрытых сессий подряд только на «отлично»:
            </p>

            <p>
              1 сессия — 6 000₽
            </p>
            <p>
              2-3 сессий — 7 500₽
            </p>
            <p>
              4-5 сессий — 10 500₽
            </p>
            <p>
              6 и более сессий — 13 500₽
            </p>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* Работнику */}
      <div className="w-full max-w-screen-xl px-5 py-[20px] lg:py-[50px]">
        <div className="text-[25px] font-bold lg:text-[40px]">
          О разделе
        </div>

        <p className="font-normal text-[14px] mt-[5px] lg:text-[35px]">
          В этом разделе вы найдете нужные справочные материалы.
          Мы собрали всю необходимую информацию в удобном формате,
          чтобы вы могли легко найти ответы на свои вопросы.
          Все, что нужно, теперь под рукой!
        </p>
      </div>
    </div>
  );
}
