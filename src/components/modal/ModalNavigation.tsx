const ModalNavigation = () => {
  return (
    <div className="absolute right-0 top-0 z-10 w-[240px] rounded-lg bg-white text-sm shadow-2xl">
      <p className="text-tertiary-black cursor-pointer px-4 py-2.5">채용</p>
      <p className="text-tertiary-black cursor-pointer px-4 py-2.5 font-medium">해외 개발자 원격 채용</p>
      <p className="text-tertiary-black cursor-pointer px-4 py-2.5 font-medium">외국인 원격 채용 (비개발 직군)</p>
      <p className="text-tertiary-black border-t border-primary-grey/40 px-4 py-2.5 font-medium">
        한국어 가능 외국인 채용
      </p>
    </div>
  );
};

export default ModalNavigation;
