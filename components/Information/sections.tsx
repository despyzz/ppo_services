import { Typography } from '@mui/material';
import {
  ADDRESS,
  EMAIL,
  PHONE_EMPLOYEES, PHONE_EMPLOYEES_DISPLAY,
  PHONE_STUDENTS,
  PHONE_STUDENTS_DISPLAY,
  YANDEX_MAPS_LINK,
} from '@/constants/contacts';
import React from 'react';

export const sections = [
  // Секция по работе с обучающимися
  <div
    key="students"
    className="flex flex-col gap-3 text-[17px] font-light lg:w-64"
  >
    <Typography variant="section" className="text-[16px] font-extrabold">
      Секция по работе с обучающимися
    </Typography>

    <a href={`mailto:${EMAIL}`}>
      <Typography variant="infoLink">
        {EMAIL}
      </Typography>
    </a>

    <a href={`tel:${PHONE_STUDENTS}`}>
      <Typography variant="infoLink">
        {PHONE_STUDENTS_DISPLAY}
      </Typography>
    </a>

    <a href={YANDEX_MAPS_LINK} target="_blank" rel="noreferrer">
      <Typography variant="infoLink">
        {ADDRESS}
      </Typography>
    </a>
  </div>,

  // Секция по работе с работниками
  <div
    key="employees"
    className="flex flex-col gap-3 text-[17px] font-light lg:w-64"
  >
    <Typography variant="section" className="text-[16px] font-extrabold">
      Секция по работе с работниками
    </Typography>

    <a href={`mailto:${EMAIL}`}>
      <Typography variant="infoLink">
        {EMAIL}
      </Typography>
    </a>

    <a href={`tel:${PHONE_EMPLOYEES}`}>
      <Typography variant="infoLink">
        {PHONE_EMPLOYEES_DISPLAY}
      </Typography>
    </a>

    <a href={YANDEX_MAPS_LINK} target="_blank" rel="noreferrer" className="text-pretty">
      <Typography variant="infoLink">
        {ADDRESS}
      </Typography>
    </a>
  </div>,
];
