import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const MainBanner = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(1);

  type BannerProps = {
    index: number;
  };

  const Banner = ({ index }: BannerProps) => {
    return (
      <>
        <div className="z-10 absolute flex flex-col text-white">
          <h1 className="text-[46px] text-bold mb-[3.75vw]">
            {t(`main.banner.${index}.title`)}
          </h1>
          <div className="flex flex-col text-[32px] mb-[5.89vw] items-center">
            <p className="mb-">{t(`main.banner.${index}.line.1`)}</p>
            <p>{t(`main.banner.${index}.line.2`)}</p>
          </div>
          <div className="w-[586px] h-[80px] rounded-[10px] bg-white text-[34px] self-center flex items-center justify-center font-bold text-rm-red-0">
            {t(`main.banner.${index}.description`)}
          </div>
        </div>
        <Image
          src={`/images/MainBanner${index}.png`}
          alt="MainBanner"
          fill
          priority
          quality={100}
        />
      </>
    );
  };

  const moveTo = (direction: 'left' | 'right') => {
    switch (direction) {
      case 'left':
        index === 2 ? setIndex(1) : index === 3 ? setIndex(2) : setIndex(3);
        return;
      case 'right':
        index === 2 ? setIndex(3) : index === 1 ? setIndex(2) : setIndex(1);
        return;
    }
  };

  return (
    <div className="w-[100vw] h-[41.667vw] relative flex justify-center items-center overflow-hidden">
      <div
        className={`duration-700 transition-transform w-[100vw] h-full flex justify-center items-center absolute ${
          index === 1
            ? ''
            : index === 2
            ? 'translate-x-[-100vw]'
            : 'translate-x-[-200vw]'
        }`}
      >
        <Banner index={1} />
      </div>
      <div
        className={`duration-700 transition-transform w-[100vw] h-full flex justify-center items-center absolute ${
          index === 1
            ? 'translate-x-[100vw]'
            : index === 2
            ? ''
            : 'translate-x-[-100vw]'
        }`}
      >
        <Banner index={2} />
      </div>
      <div
        className={`duration-700 transition-transform w-[100vw] h-full flex justify-center items-center absolute ${
          index === 1
            ? 'translate-x-[200vw]'
            : index === 2
            ? 'translate-x-[100vw]'
            : ''
        }`}
      >
        <Banner index={3} />
      </div>
      <div
        className="w-[30px] h-[30px] absolute z-30 translate-x-[-35vw] hover:cursor-pointer"
        onClick={() => moveTo('left')}
      >
        <Image
          src="/images/MainBannerArrowLeft.png"
          alt="MainBannerArrowLeft"
          width={41}
          height={77}
        />
      </div>
      <div
        className="w-[30px] h-[30px] absolute z-30 translate-x-[35vw] hover:cursor-pointer"
        onClick={() => moveTo('right')}
      >
        <Image
          src="/images/MainBannerArrowRight.png"
          alt="MainBannerArrowRight"
          width={42}
          height={77}
        />
      </div>
      <div className="absolute z-30 flex justify-between gap-[1.5vw] translate-y-[17vw]">
        {Array.from({ length: 3 }, (_, i) => i + 1).map((e) => (
          <div
            key={e}
            className={`duration-700 transition-all w-[14px] h-[14px] bg-white rounded-full ${
              index === e ? '' : 'opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
