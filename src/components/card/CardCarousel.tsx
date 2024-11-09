import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardCarouselProps {
  name: string;
  position: string;
  experience: string;
  skills: string[];
  picture: StaticImageData;
  flag: StaticImageData;
}

const CardCarousel: FC<CardCarouselProps> = ({ name, position, experience, skills, picture, flag }) => {
  return (
    <div className="flex h-full w-full flex-col items-center rounded-xl bg-white px-4 py-9 lg:p-9">
      <div className="relative h-[64px] w-[64px] rounded-full bg-black/10 lg:h-[120px] lg:w-[120px]">
        <Image alt="profile" className="h-full w-full rounded-full" src={picture} />
        <Image
          alt="profile"
          className="absolute bottom-0 right-[-5px] h-[18px] w-[25px] lg:bottom-[3px] lg:right-[7px]"
          src={flag}
        />
      </div>

      <p className="mt-4 text-lg text-primary-black lg:text-2xl">{name}</p>
      <p className="text-sm text-primary-dark-blue lg:text-base">
        {position} · <span>{experience}</span>
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-1 lg:mt-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="rounded-md border border-primary-grey px-3 py-1 text-sm text-primary-dark-grey lg:text-base">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
