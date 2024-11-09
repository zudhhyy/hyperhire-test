import Image from 'next/image';

import { FC } from 'react';

import LogoImg from '@/assets/images/logo.png';

import CardFooter from '@/components/card/CardFooter';
import CardCompanyDetail from '@/components/card/CardCompanyDetail';

import { CompanyDetailType, FooterMenuType } from '@/types/home';

interface FooterProps {
  companyDetail: CompanyDetailType[];
  footerMenu: FooterMenuType[];
}

const Footer: FC<FooterProps> = ({ companyDetail, footerMenu }) => {
  return (
    <div className="bg-primary-white text-secondary-black">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-0">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div>
            <Image alt="logo" src={LogoImg} className="w-[187px]" />
            <p className="mt-4 text-sm">
              우리는 국가의 장벽을 넘어 최고의 인재를 매<br />
              칭해드립니다.
            </p>

            <div className="mt-4 text-[13px] leading-5 text-primary-dark-grey">
              <p>010-0000-0000</p>
              <p className="mt-2">aaaaa@naver.com</p>
            </div>
          </div>

          <div className="mt-[18px] grid grid-cols-2 gap-2 lg:mt-0 lg:grid-cols-4 lg:gap-[15px]">
            {footerMenu.map((item, index) => (
              <CardFooter key={index} text={item.text} subText={item.subText} image={item.image} />
            ))}
          </div>
        </div>

        <div className="mt-[60px] flex flex-wrap gap-x-4 gap-y-10 lg:mt-[46px] lg:justify-between">
          {companyDetail.map((item, index) => (
            <CardCompanyDetail
              key={index}
              title={item.title}
              name={item.name}
              details={item.details}
              subDetails={item.subDetails}
            />
          ))}
        </div>

        <p className="mt-9 text-[13px] leading-5">ⓒ 2023 Hyperhire</p>
      </div>
    </div>
  );
};

export default Footer;
