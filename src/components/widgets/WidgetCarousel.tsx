'use client';

import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-3d-carousel';

import DollarImg from '@/assets/images/dollar.webp';

import BubbleText from '@/components/bubble/BubbleText';
import CardCarousel from '@/components/card/CardCarousel';

import { CandidateType } from '@/types/home';

interface WidgetCarouselProps {
  candidate: CandidateType[];
}

const WidgetCarousel: FC<WidgetCarouselProps> = ({ candidate }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Only run on the client side
    if (typeof window !== 'undefined') {
      const handleResize = () => setWidth(window.innerWidth);

      // Initial width setting
      handleResize();

      // Adjust width on window resize
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className="animate-fadeIn flex flex-col items-center">
      <BubbleText className="animate-fadeIn bg-secondary-green" tailClassName="!left-0 right-0 mx-auto">
        <Image alt="dollar" className="mr-2.5 h-[26px] w-[26px] object-contain" src={DollarImg} />
        <p className="text-lg text-primary-green">월 100만원</p>
      </BubbleText>

      <div className="w-full lg:w-[521px]">
        <Carousel
          autoPlay={false}
          depth={1}
          interval={5000}
          width={width < 1024 ? '234px' : '292px'}
          height={width < 1024 ? '311px' : '408px'}
          isArrowsShadow={false}
          spread={width < 1024 ? 'normal' : 'wide'}
          showStatus={false}
          arrowsWidth="30px"
          arrowsHeight="30px"
          arrowsStrokeWidth={3}
          arrowsHoveredColor="#FFFFFF"
          showIndicators={false}>
          {candidate.map((item, index) => (
            <CardCarousel
              key={index}
              name={item.name}
              position={item.position}
              experience={item.experience}
              skills={item.skills}
              picture={item.picture}
              flag={item.flag}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default WidgetCarousel;
