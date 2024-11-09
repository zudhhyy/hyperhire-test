import { StaticImageData } from 'next/image';

export interface HomeData {
  requirement: string[];
  candidate: CandidateType[];
  info: InfoType[];
  skills: SkillsType[];
  companyDetail: CompanyDetailType[];
  footerMenu: FooterMenuType[];
}

export interface CandidateType {
  name: string;
  position: string;
  experience: string;
  skills: string[];
  picture: StaticImageData;
  flag: StaticImageData;
}

export interface InfoType {
  text: string;
  detail: string;
}

export interface SkillsType {
  text: string;
  image: StaticImageData;
}

export interface CompanyDetailType {
  title: string;
  name: string;
  details: string;
  subDetails?: string;
}

export interface FooterMenuType {
  text: string;
  subText?: string;
  image: StaticImageData;
}
