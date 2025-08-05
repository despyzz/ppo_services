'use client';

import React, { ReactNode, useEffect, useRef } from 'react';
import { motion, useAnimationControls, useInView } from 'framer-motion';

interface NewsProps {
  children: ReactNode;
}

export function NewsWrapper({ children }: NewsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const isInView = useInView(containerRef, { once: false });

  useEffect(() => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.scrollWidth;
    const duration = containerWidth / 50;

    controls.start({
      x: -(containerWidth - window.outerWidth),
      transition: {
        duration,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      },
    });
  }, [controls, isInView]);

  return (
    <div className="flex flex-col gap-[30px] overflow-hidden lg:gap-[50px]">
      <div>
        <p className="text-center text-[24px] font-bold lg:text-[50px]">
          Новости
        </p>
      </div>

      <div className="relative">
        <motion.div
          ref={containerRef}
          className="flex size-fit gap-4"
          animate={controls}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
