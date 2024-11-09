'use client';

import { useState } from 'react';
import Image from 'next/image';

import LogoImg from '@/assets/images/logo-white.png';
import DownIcon from '@/assets/icons/down.png';

import ModalNavigation from '@/components/modal/ModalNavigation';

const Navbar = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4">
      <Image src={LogoImg} alt="Hyperhire" className="w-[114px] object-contain" />

      <div className="hidden gap-[60px] lg:flex">
        <div className="relative flex cursor-pointer items-center" onClick={handleModal}>
          <p>채용</p>
          <Image alt="down" src={DownIcon} className="ml-2 h-4 w-4" />
          {modalVisible && <ModalNavigation />}
        </div>
        <p>해외 개발자 활용 서비스</p>
      </div>

      <div className="hidden cursor-pointer rounded-lg bg-white px-6 py-1.5 lg:block">
        <p className="text-primary-dark-blue">문의하기</p>
      </div>
    </div>
  );
};

export default Navbar;
