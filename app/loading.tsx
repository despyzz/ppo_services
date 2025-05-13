import React from 'react';
import Image from 'next/image';

const bars = [
  { key: 'bar-1', src: '/images/pages/loading/bar.svg' },
  { key: 'bar-2', src: '/images/pages/loading/bar.svg' },
  { key: 'bar-3', src: '/images/pages/loading/bar.svg' },
  { key: 'bar-4', src: '/images/pages/loading/bar.svg' },
];

const lefts = [
  'left-0',
  'left-[42px] lg:left-[80px]',
  'left-[84px] lg:left-[160px]',
  'left-[126px] lg:left-[240px]',
];

export default function LoaderPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="relative flex w-[186px] items-end justify-center lg:w-[372px]">
        {bars.map((bar, i) => (
          <div
            key={bar.key}
            className={[
              'absolute',
              lefts[i],
              'bottom-0',
              'animate-jump',
              `[animation-delay:${i}s]`,
            ].join(' ')}
          >
            <Image
              src={bar.src}
              alt={`bar${i + 1}`}
              width={120}
              height={240}
              className="block h-auto w-[60px] lg:w-[120px]"
              priority
            />
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes jump {
            0%, 20%, 100% { transform: translateY(0); }
            10% { transform: translateY(-23px); }
          }
          @media (min-width: 1024px) {
            @keyframes jump {
              0%, 20%, 100% { transform: translateY(0); }
              10% { transform: translateY(-40px); }
            }
          }
          .animate-jump {
            animation: jump 4s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
}
