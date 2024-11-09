import { FC } from 'react';
import Image from 'next/image';

import { SkillsType } from '@/types/home';

const CardSkill: FC<SkillsType> = ({ text, image }) => {
  return (
    <div className="flex min-w-[332px] items-center rounded-xl bg-white/20 p-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white/40">
        <Image src={image} alt="" className="h-8 w-8 object-contain" />
      </div>
      <p className="ml-6 text-2xl">{text}</p>
    </div>
  );
};

export default CardSkill;
