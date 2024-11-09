import React, { FC } from 'react';

import { InfoType } from '@/types/home';

const CardInfo: FC<InfoType> = ({ text, detail }) => {
  return (
    <div className='max-w-40'>
      <div className="h-[1px] w-[130px] bg-white" />
      <p className="mt-2 text-lg">{text}</p>
      <p className="mt-2 text-base opacity-80">{detail}</p>
    </div>
  );
};

export default CardInfo;
