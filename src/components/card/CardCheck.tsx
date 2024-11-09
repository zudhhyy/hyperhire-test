import Image from 'next/image';

import CheckboxIcon from '@/assets/icons/checkbox.png';
import { FC } from 'react';

interface CardCheckProps {
  item: string;
}

const CardCheck: FC<CardCheckProps> = ({ item }) => {
  return (
    <div className="flex items-center">
      <Image alt="checkbox" src={CheckboxIcon} className="h-5 w-5" />
      <p className="ml-3 text-base">{item}</p>
    </div>
  );
};

export default CardCheck;
