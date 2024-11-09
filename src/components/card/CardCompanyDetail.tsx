import React, { FC } from 'react';

import { CompanyDetailType } from '@/types/home';

const CardCompanyDetail: FC<CompanyDetailType> = ({ title, name, details, subDetails }) => {
  return (
    <div className="text-[13px] leading-5">
      <p>{title}</p>
      <p className="mt-2.5">{name}</p>
      <p className="mt-2">{details}</p>
      <p>{subDetails}</p>
    </div>
  );
};

export default CardCompanyDetail;
