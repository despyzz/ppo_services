import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="flex w-full max-w-[360px] flex-col items-center gap-4 text-center lg:max-w-[800px] lg:gap-6">
        <Image
          src="/images/pages/not-found/404.svg"
          alt="404"
          width={560}
          height={280}
          className="h-auto w-[280px] lg:w-[560px]"
          priority
        />

        <p className="m-0 text-[24px] font-extrabold uppercase lg:text-[40px]">
          Страница не найдена
        </p>

        <p className="m-0 text-[15px] font-light leading-tight text-[#207EEB] lg:text-[18px]">
          К сожалению, такой страницы не существует.
          <br />
          Вероятно, она была удалена, либо её здесь никогда не было.
        </p>

        <Link
          href="/"
          className="inline-flex h-[46.85px] w-[196.5px] items-center justify-center rounded bg-[#F34252] text-[16px] font-extrabold text-white no-underline lg:h-[60px] lg:w-[300px] lg:text-[18px]"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
