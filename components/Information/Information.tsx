import React from 'react';
import { Box, Typography } from '@mui/material';
import moment from 'moment';
import { sections } from './sections';
import { links } from './links';

export function Information({ className } : { className?: string }) {
  const currentYear = moment().year();
  return (
    <div className={`w-full px-5 py-[10px] text-[#353945] lg:py-[42px] ${className}`}>
      <Box className="flex flex-col gap-6">
        <Typography variant="h3" className="text-[20px] font-extrabold lg:text-[24px]">
          Контакты
        </Typography>

        <div className="flex flex-col gap-[25px] lg:flex-row lg:gap-20">
          {sections.map((section) => section)}
          <div className="flex flex-row items-end gap-5 lg:flex-col">
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
