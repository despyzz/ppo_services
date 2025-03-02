import React from 'react';
import { Box, Typography } from '@mui/material';
import moment from 'moment';
import { sections } from './sections';
import { links } from './links';

export function Information({ className } : { className?: string }) {
  const currentYear = moment().year();
  return (
    <div className={`w-full px-5 py-[10px] text-[#353945] ${className}`}>
      <Box className="flex flex-col gap-6">
        <Typography variant="h3" className="font-extrabold text-[20px] lg:text-[24px]">
          Контакты
        </Typography>

        <div className="flex flex-col gap-[25px] lg:gap-20 lg:flex-row">
          {sections.map((section) => section)}
          <div className="flex flex-row gap-5 items-end lg:flex-col">
            {links.map((link) => link)}
          </div>
        </div>

        <Typography variant="copyright" className="text-[14px]">
          © 2017 -
          {' '}
          {currentYear}
          {' '}
          Профсоюзная организация Московского Политеха
        </Typography>
      </Box>
    </div>
  );
}
