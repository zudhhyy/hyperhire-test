import { FC } from 'react';

import BubbleText from '@/components/bubble/BubbleText';
import WidgetCarousel from '@/components/widgets/WidgetCarousel';
import WidgetSkill from '@/components/widgets/WidgetSkill';
import CardCheck from '@/components/card/CardCheck';
import CardInfo from '@/components/card/CardInfo';

import { HomeData } from '@/types/home';

interface HeroHomeProps {
  homeData: HomeData;
}

const HeroHome: FC<HeroHomeProps> = ({ homeData }) => {
  return (
    <div>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-stretch lg:flex-row">
        <div className="mt-9 px-4">
          <BubbleText className="animate-fadeIn-delay bg-primary-blue lg:bg-white">
            <p className="text-lg lg:text-primary-teal">풀타임, 파트타임</p>
          </BubbleText>

          <p className="animate-fadeInUp mt-[25px] text-4xl leading-[47px] lg:text-5xl lg:leading-snug">
            최고의 실력을 가진
            <br />
            외국인 인재를 찾고 계신가요?
          </p>
          <div className="animate-fadeInUp">
            <p className="mt-4 text-lg lg:text-2xl">
              법률 및 인사관리 부담없이 <br className="hidden lg:block" />
              1주일 이내에 원격으로 채용해보세요.
            </p>
            <p className="mt-6 hidden text-lg text-white underline lg:block">개발자가 필요하신가요?</p>
          </div>

          <div className="animate-fadeIn mt-[60px] hidden gap-12 lg:flex">
            {homeData.info.map((item, index) => (
              <CardInfo key={index} text={item.text} detail={item.detail} />
            ))}
          </div>
        </div>

        <div className="mt-9">
          <WidgetCarousel candidate={homeData.candidate} />
          <div className="lg:hidden">
            <div className="grid w-[80%] grid-cols-2 gap-2 px-4">
              {homeData.requirement.map((item, index) => (
                <CardCheck key={index} item={item} />
              ))}
            </div>
            <p className="mx-4 mt-4 text-base text-primary-yellow underline">개발자가 필요하신가요?</p>
          </div>
        </div>
      </div>

      <WidgetSkill skills={homeData.skills} />
    </div>
  );
};

export default HeroHome;
