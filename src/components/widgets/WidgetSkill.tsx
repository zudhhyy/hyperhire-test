'use client';

import { FC, useEffect, useState } from 'react';

import { SkillsType } from '@/types/home';
import CardSkill from '@/components/card/CardSkill';

interface WidgetSkillProps {
  skills: SkillsType[];
}

const paddingLeft = (window.innerWidth - 1024) / 4;

const WidgetSkill: FC<WidgetSkillProps> = ({ skills }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const infiniteSkills = [...skills, ...skills];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === skills.length - 1 ? 0 : prevIndex + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <div className="animate-fadeIn mt-[60px] hidden overflow-hidden md:block" style={{ paddingLeft }}>
      <div
        className="flex gap-2.5 transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 342}px)`,
        }}>
        {infiniteSkills.map((item, index) => (
          <CardSkill key={index} text={item.text} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default WidgetSkill;
