import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const SolutionCT = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(1);

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

  type SolutionProps = {
    index: number;
  };

  const Solution = ({ index }: SolutionProps) => {
    const lineMap = (_index: number) => {
      switch (_index) {
        case 1:
          return 3;
        case 2:
          return 2;
        case 3:
          return 3;
        case 4:
          return 4;
        case 5:
          return 5;
        default:
          return 0;
      }
    };

    const width = (_index: number): number => {
      switch (_index) {
        case 1:
          return 71;
        case 2:
          return 107;
        case 3:
          return 95;
        case 4:
          return 95;
        case 5:
          return 84;
        default:
          return 0;
      }
    };

    const height = (_index: number): number => {
      switch (_index) {
        case 1:
          return 94;
        case 2:
          return 97;
        case 3:
          return 83;
        case 4:
          return 83;
        case 5:
          return 73;
        default:
          return 0;
      }
    };

    return (
      <div className="flex flex-col justify-center items-center">
        <div className="h-[100px] flex justify-center items-end">
          <Image
            src={`/images/SolutionCT${index}.png`}
            alt="SolutionCT"
            width={width(index)}
            height={height(index)}
          />
        </div>
        <div className="text-white bg-rm-red-0 text-[20px] font-bold flex justify-center items-center w-[300px] h-[50px] mt-[30px] mb-[15px]">
          {t(`solution.ct.solutions.${index}.title`)}
        </div>
        {Array.from({ length: lineMap(index) }, (_, i) => i + 1).map((e) => (
          <div
            key={e}
            className="text-rm-gray-3 self-start w-full ml-[20px] justify-self-center text-[18px]"
          >
            {t(`solution.ct.solutions.${index}.description.${e}`)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col justify-center items-center pb-[83px]">
      <div className="pt-[3.646vw] text-rm-red-0 text-[40px] font-bold mb-[40px]">
        {t('solution.tab.2')}
      </div>
      {Array.from({ length: 4 }, (_, i) => i + 1).map((e) => (
        <div key={e} className="text-black text-[24px]">
          {t(`solution.description.2.line.${e}`)}
        </div>
      ))}
      <div className="mt-[85px] bg-rm-red-0 h-[33.177vw] max-h-[637px] w-full flex flex-col justify-center items-center">
        <div className="text-white text-[34px] font-bold mb-[64px]">
          {t('solution.ct.title')}
        </div>
        <div className="h-[16.51vw] max-h-[317px] w-[62.5vw] max-w-[1200px] relative">
          <Image
            src="/images/SolutionCTPoC.png"
            alt="SolutionCTPoC"
            sizes="62.5vw, 16.51vw"
            fill
            priority
            quality={100}
          />
        </div>
      </div>
      <div className="mt-[80px]">
        <div className="flex justify-center text-[36px] font-bold text-rm-red-0 mb-[60px]">
          {t('solution.ct.solutions.title')}
        </div>
        <div className="flex justify-center items-start gap-[30px]">
          {Array.from({ length: 3 }, (_, i) => i + 1).map((e) => (
            <Solution key={e} index={e} />
          ))}
        </div>
        <div className="flex justify-center items-start gap-[30px] mt-[20px]">
          {Array.from({ length: 2 }, (_, i) => i + 4).map((e) => (
            <Solution key={e} index={e} />
          ))}
        </div>
      </div>
      <div className="mt-[95px] w-full h-[600px] bg-rm-gray-5 flex flex-col justify-center items-center gap-[90px]">
        <div className="text-black text-[34px] font-bold">
          {t('solution.ct.health')}
        </div>
        <div className="flex justify-center items-center gap-[45px]">
          <Image
            className="hover:cursor-pointer"
            src="/images/MainReviewArrowLeft.png"
            alt="MainReviewArrowLeft"
            width={22}
            height={44}
            onClick={() => {
              moveTo('left');
            }}
          />
          <div className="w-[1068px] h-[220px] overflow-hidden">
            <div
              className={`flex gap-[17px] transition-all ${
                index === 2
                  ? 'translate-x-[-1085px]'
                  : index === 3
                  ? 'translate-x-[-2170px]'
                  : ''
              }`}
            >
              {Array.from({ length: 3 }, (_, i) => i + 1).map((e) => (
                <Image
                  key={e}
                  src={`/images/SolutionCTHealth${e}.png`}
                  width={1068}
                  height={220}
                  alt="SolutionCTHealth"
                  priority
                  quality={100}
                />
              ))}
            </div>
          </div>
          <Image
            className="hover:cursor-pointer"
            src="/images/MainReviewArrowRight.png"
            alt="MainReviewArrowRight"
            width={22}
            height={44}
            onClick={() => {
              moveTo('right');
            }}
          />
        </div>
        <div className="flex justify-center items-center gap-[11px]">
          {Array.from({ length: 3 }, (_, i) => i + 1).map((e) => (
            <div
              key={e}
              className={`duration-700 transition-all w-[8px] h-[8px] rounded-full ${
                index === e ? 'bg-rm-red-0' : 'bg-rm-gray-0'
              }`}
            />
          ))}
        </div>
      </div>
      <div className="mt-[120px]">
        <div className="text-black text-[34px] font-bold mb-[54px] flex justify-center">
          {t('solution.ct.network')}
        </div>
        <div className="h-[17.708vw] max-h-[340px] w-[62.5vw] max-w-[1200px] min-h-[170px] min-w-[600px] relative mb-[100px]">
          <Image
            src="/images/SolutionCTNetwork.png"
            alt="SolutionCTNetwork"
            sizes="62.5vw, 17.708vw"
            fill
            priority
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};
