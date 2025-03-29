'use client';

import React, { Children, ReactNode, useState } from 'react';
import classNames from 'classnames';
import { Box } from '@mui/material';

interface SquareProps {
  children: ReactNode | ReactNode[];
  className?: string;
  changeOnHover?: boolean;
}

export function Square({
  children,
  className = '',
  changeOnHover = false,
} : SquareProps) {
  const [isActive, setIsActive] = useState(false);
  const isTouchDevice = typeof window !== 'undefined' ? ('ontouchstart' in window || navigator.maxTouchPoints > 0) : false;

  const childrenArray = Children.toArray(children);
  const mainContent = childrenArray[0];
  const secondaryContent = childrenArray[1] || null;

  const handleInteraction = () => {
    if (isTouchDevice && changeOnHover) {
      setIsActive(!isActive);
    }
  };

  const handleMouseEnter = () => {
    if (changeOnHover) {
      setIsActive(true);
    }
  };

  const handleMouseLeave = () => {
    if (changeOnHover) {
      setIsActive(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (changeOnHover && (e.key === 'Enter' || e.key === ' ')) {
      handleInteraction();
    }
  };

  return (
    <Box
      className={classNames(
        'flex justify-center items-center aspect-square w-[clamp(111px,_30vw,_265px)] lg:w-[clamp(111px,_22vw,_265px)]',
        'relative overflow-hidden',
        className,
      )}
      onMouseEnter={!isTouchDevice ? handleMouseEnter : undefined}
      onMouseLeave={!isTouchDevice ? handleMouseLeave : undefined}
      onClick={handleInteraction}
      role={changeOnHover ? 'button' : undefined}
      tabIndex={changeOnHover ? 0 : undefined}
      onKeyDown={changeOnHover ? handleKeyDown : undefined}
    >
      <div className={classNames({
        'transition-opacity duration-500': changeOnHover,
        'opacity-0': changeOnHover && isActive,
        'opacity-100': !changeOnHover || !isActive,
      })}
      >
        {mainContent}
      </div>

      {secondaryContent && changeOnHover && (
        <div
          className={classNames(
            'absolute inset-0 flex justify-center items-center p-4',
            {
              'transition-opacity duration-300': changeOnHover,
              'opacity-100': isActive,
              'opacity-0': !isActive,
            },
          )}
        >
          {secondaryContent}
        </div>
      )}
    </Box>
  );
}
