import React, { ReactNode } from 'react';
import Image from 'next/image';

function PartnerContainer({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="border-2 border-black p-[8px] lg:p-[24px]">
      {children}
    </div>
  );
}

export function Partners() {
  return (
    <div className="flex flex-col gap-[30px] lg:gap-[50px]">
      <div>
        <p className="font-bold text-center text-[24px] lg:text-[50px]">
          Наши партнеры
        </p>
      </div>
      <div className="flex justify-center gap-[4%] lg:gap-[55px]">
        <PartnerContainer>
          <div className="relative w-[clamp(110px,_30.3vw,_341px)] aspect-[341/90]">
            <Image src="/images/pages/main/partners/partners_mospolytech.svg" alt="Московский политех" fill />
          </div>
        </PartnerContainer>

        <PartnerContainer>
          <div className="relative w-[clamp(81px,_18.29vw,_218px)] aspect-[218/90]">
            <Image src="/images/pages/main/partners/partners_sksprofsoyuza.svg" alt="Московский политех" fill />
          </div>
        </PartnerContainer>

        <PartnerContainer>
          <div className="relative w-[clamp(83px,_22vw,_256px)] aspect-[256/90]">
            <Image src="/images/pages/main/partners/partners_profzoyuzobrazovaniyagorodamoskvy.svg" alt="Московский политех" fill />
          </div>
        </PartnerContainer>
      </div>
    </div>
  );
}
