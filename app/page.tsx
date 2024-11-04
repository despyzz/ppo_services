'use client';

import React from 'react';
import { useSnackbar } from 'notistack';

export default function Home() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleClick = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/-1');
    if (!response.ok) {
      const key = enqueueSnackbar('Ошибка при запросе данных', {
        variant: 'error',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center',
        },
        SnackbarProps: {
          onClick: () => closeSnackbar(key),
        },
      });
    }
  };

  return (
    <div>
      Home page
      <div>
        <button type="button" onClick={handleClick} className="p-2 bg-gray-200">
          Пример уведомления об ошибке
        </button>
      </div>
    </div>
  );
}
