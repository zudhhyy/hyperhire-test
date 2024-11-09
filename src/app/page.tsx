import { FC } from 'react';

import Navbar from '@/components/navbar/Navbar';

import Footer from '@/components/footer/Footer';
import HeroHome from '@/components/hero/HeroHome';

import { HomeData } from '@/types/home';

import ProfileImage from '@/assets/images/profile.png';
import FlagImage from '@/assets/images/flag.png';

import DevIcon from '@/assets/icons/dev.png';
import PersonIcon from '@/assets/icons/person.png';
import KorIcon from '@/assets/icons/kor.png';
import SettingIcon from '@/assets/icons/setting.png';

import ChartIcon from '@/assets/icons/chart.png';
import AlbumIcon from '@/assets/icons/album.png';
import BoxIcon from '@/assets/icons/box.png';
import TargetIcon from '@/assets/icons/target.png';
import PhoneIcon from '@/assets/icons/phone.png';

const fetchData = async (): Promise<HomeData> => {
  const requirement = ['한국어 능력', '업무 수행 능력', '겸업 여부', '평판 조회'];

  const candidate = Array.from({ length: 3 }).map((_) => ({
    name: 'Abhishek Gupta',
    position: '마케팅',
    experience: '2y+',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    picture: ProfileImage,
    flag: FlagImage,
  }));

  const info = [
    { text: '평균 월 120만원', detail: '임금을 해당 국가를 기준으로 계산합니다.' },
    { text: '최대 3회 인력교체', detail: '막상 채용해보니 맞지 않아도 걱정하지 마세요.' },
    { text: '평균 3일, 최대 10일', detail: '급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.' },
  ];

  const skills = [
    { text: '해외 마케팅', image: ChartIcon },
    { text: '퍼블리셔', image: AlbumIcon },
    { text: '캐드원(제도사)', image: BoxIcon },
    { text: '해외 세일즈', image: TargetIcon },
    { text: '해외 CS', image: PhoneIcon },
  ];

  const companyDetail = [
    { title: '상호명', name: '하이퍼하이어', details: 'Hyperhire India Private Limited' },
    { title: '대표 CEO', name: '김주현', details: 'Juhyun Kim' },
    { title: '사업자등록번호 CIN', name: '427-86-01187', details: 'U74110DL2016PTC290812' },
    {
      title: '주소 ADDRESS',
      name: '서울특별시 강남대로 479, 지하 1층 238호',
      details: 'D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi,',
      subDetails: '110053 India',
    },
  ];

  const footerMenu = [
    { text: '해외 개발자 원격 채용', image: DevIcon },
    { text: '외국인 원격 채용', subText: '(비개발)', image: PersonIcon },
    { text: '한국어 가능 외국인 채용', image: KorIcon },
    { text: '해외 개발자 활용 서비스', image: SettingIcon },
  ];

  const data = {
    requirement,
    candidate,
    info,
    skills,
    companyDetail,
    footerMenu,
  };

  // Simulate API request
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return data;
};

const Home: FC = async () => {
  const homeData = await fetchData();

  return (
    <div>
      <div className="flex flex-col bg-hero bg-center pb-[60px] text-white lg:bg-[length:100%_100%] lg:pb-[108px]">
        <Navbar />
        <HeroHome homeData={homeData} />
      </div>
      <Footer companyDetail={homeData.companyDetail} footerMenu={homeData.footerMenu} />
    </div>
  );
};

export default Home;
