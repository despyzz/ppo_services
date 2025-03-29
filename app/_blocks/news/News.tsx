import React, { useEffect, useRef } from 'react';
import { motion, useAnimationControls, useInView } from 'framer-motion';
import { NewsElementVariants } from './constants';
import { NewsElement } from './NewsElement';

const newsItems = [
  {
    id: 1,
    variant: NewsElementVariants.Square,
    src: '/images/pages/main/9l4N4CdkA8k 1.png',
    alt: 'Техническая конференция 2023',
    colorAccent: '#3b82f6',
    title: 'Итоги TechConf 2023',
    description: 'Крупнейшая техническая конференция года собрала более 5000 участников со всего мира. конференция года собрала более 5000 участников со всего мира.',
    date: '15.10.2023',
  },
  {
    id: 2,
    variant: NewsElementVariants.Rectangle,
    src: '/images/pages/main/9l4N4CdkA8k 1.png',
    alt: 'Запуск нового продукта',
    colorAccent: '#10b981',
    title: 'Новый продукт выпущен',
    description: 'Представляем инновационное решение для автоматизации бизнес-процессов.',
    date: '22.09.2023',
  },
  {
    id: 3,
    variant: NewsElementVariants.Square,
    src: '/images/pages/main/9l4N4CdkA8k 1.png',
    alt: 'Корпоративное мероприятие',
    colorAccent: '#f59e0b',
    title: 'Наш летний тимбилдинг',
    description: 'Отличный способ укрепить командный дух и отдохнуть от рабочих задач.',
    date: '05.08.2023',
  },
  {
    id: 4,
    variant: NewsElementVariants.Rectangle,
    src: '/images/pages/main/9l4N4CdkA8k 1.png',
    alt: 'Благотворительный марафон',
    colorAccent: '#ef4444',
    title: 'Благотворительный забег',
    description: 'Собрано более 2 миллионов рублей для детских медицинских учреждений.',
    date: '12.07.2023',
  },
  {
    id: 5,
    variant: NewsElementVariants.Square,
    src: '/images/pages/main/9l4N4CdkA8k 1.png',
    alt: 'Новый офис компании',
    colorAccent: '#8b5cf6',
    title: 'Открытие нового офиса',
    description: 'Теперь мы работаем в современном пространстве в центре города.',
    date: '30.06.2023',
  },
  {
    id: 6,
    variant: NewsElementVariants.Rectangle,
    src: '/images/pages/main/9l4N4CdkA8k 1.png',
    alt: 'Церемония награждения',
    colorAccent: '#ec4899',
    title: 'Мы получили награду',
    description: 'Лучший работодатель года в IT-секторе по версии профессионального сообщества.',
    date: '18.05.2023',
  },
];

export function News() {
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
          {newsItems.map((news) => (
            <NewsElement
              key={news.title}
              variant={news.variant}
              src={news.src}
              alt={news.alt}
              colorAccent={news.colorAccent}
              title={news.title}
              description={news.description}
              date={news.date}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
