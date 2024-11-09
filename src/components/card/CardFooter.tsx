import { FC } from 'react';
import Image from 'next/image';

import RightIcon from '@/assets/icons/right.png';

import { FooterMenuType } from '@/types/home';

const CardFooter: FC<FooterMenuType> = ({ text, subText, image }) => {
  return (
    <div className="flex h-[160px] w-[160px] flex-col justify-between rounded-xl bg-white p-4 pr-2 lg:h-[142px] lg:w-[187px]">
      <div>
        <div className="bg-primary-white flex h-10 w-10 items-center justify-center rounded-lg">
          <Image alt="icon" src={image} className="h-6 w-6 object-contain" />
        </div>
        <p className="mt-3 hidden text-sm lg:block">
          {text} {subText}
        </p>

        <p className="mt-3 text-sm lg:hidden">{text}</p>
        <p className="text-sm lg:hidden">{subText}</p>
      </div>
      <div className="flex cursor-pointer items-center">
        <p className="mr-1 text-sm text-primary-dark-grey">바로가기</p>
        <Image alt="right" src={RightIcon} className="h-[17px] w-[17px]" />
      </div>
    </div>
  );
};

export default CardFooter;
