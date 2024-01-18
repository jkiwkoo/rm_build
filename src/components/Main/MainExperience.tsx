import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Observer } from '../Observer';

export const MainExperience = () => {
  const { t } = useTranslation();
  const [isCatch, setIsCatch] = useState(false);

  const useCount = (value: number) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let _counter = 0;
      const counter = setInterval(() => {
        setCount(Math.round((value * ++_counter) / 30));
        _counter === 30 && clearInterval(counter);
      }, 15);
    }, [isCatch]);

    return count;
  };

  type ExperienceProps = {
    index: number;
  };

  const Experience = ({ index }: ExperienceProps) => {
    const width = (index: number): number => {
      switch (index) {
        case 1:
          return 96;
        case 2:
          return 81;
        case 3:
          return 92;
        case 4:
          return 93;
        case 5:
          return 72;
        default:
          return 0;
      }
    };

    const height = (index: number): number => {
      switch (index) {
        case 1:
          return 91;
        case 2:
          return 83;
        case 3:
          return 77;
        case 4:
          return 68;
        case 5:
          return 78;
        default:
          return 0;
      }
    };

    return (
      <li className="flex flex-col items-center w-[120px]">
        <Image
          src={`/images/MainExperience${index}.png`}
          alt="MainExperience"
          width={width(index)}
          height={height(index)}
        />
        <div className="text-rm-orange-0 text-[46px] font-bold mt-[35px] mb-[10px]">
          {index === 1 ? useCount(200) : useCount(50)}+
        </div>
        {index === 3 && <Observer dispatch={setIsCatch} />}
        <p>{t(`main.experience.detail.${index}.line.1`)}</p>
        <p>{t(`main.experience.detail.${index}.line.2`)}</p>
      </li>
    );
  };

  return (
    <div className="bg-rm-brown-0 h-[500px] text-white text-[20px] flex flex-col justify-between items-center pt-[60px] pb-[70px] overflow-hidden">
      <h1 className="font-bold text-[34px]">{t('main.experience.title')}</h1>
      <ul className="flex justify-between items-center gap-[9.375vw]">
        {Array.from({ length: 5 }, (_, i) => i + 1).map((e) => (
          <Experience key={e} index={e} />
        ))}
      </ul>
    </div>
  );
};
