import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const SolutionConsultation = () => {
  const { t } = useTranslation();
  const [solution, setSolution] = useState(0);

  type SolutionProps = {
    index: number;
  };

  const Solution = ({ index }: SolutionProps) => {
    return (
      <div className="flex flex-col justify-center items-center">
        <div
          className="w-[18.22vw] min-w-[250px] h-[70px] text-[20px] border border-white flex justify-between items-center p-[20px] hover:cursor-pointer text-center"
          onClick={() => {
            index === solution ? setSolution(0) : setSolution(index);
          }}
        >
          <div />
          <div>{t(`solution.consultation.solutions.${index}.title`)}</div>
          <div className="text-[12px]">{index === solution ? '▲' : '▼'}</div>
        </div>
        <div
          className={`${
            index === solution ? '' : 'hidden'
          } w-[18.22vw] min-w-[250px] flex justify-center text-start px-[10px] mt-[18px]`}
        >
          {t(`solution.consultation.solutions.${index}.description`)}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="pt-[3.646vw] text-rm-red-0 text-[40px] font-bold mb-[40px]">
        {t('solution.tab.1')}
      </div>
      {Array.from({ length: 2 }, (_, i) => i + 1).map((e) => (
        <div key={e} className="text-black text-[24px]">
          {t(`solution.description.1.line.${e}`)}
        </div>
      ))}
      <div className="w-full flex flex-col justify-start items-center pt-[83px]">
        <div className="h-[33.281vw] w-full relative">
          <Image
            src="/images/SolutionConsultationBanner.png"
            alt="AboutUsVM"
            sizes="100vw, 33.281vw"
            fill
            priority
            quality={100}
          />
        </div>
        <div className="absolute mt-[8.33vw] w-[62.5vw] flex flex-col justify-center items-center bg-rm-red-0 text-white overflow-auto">
          <div className="font-bold text-[26px] my-[50px]">
            {t('solution.consultation.title')}
          </div>
          <div className="flex justify-center items-start gap-[20px] pb-[40px]">
            <div className="flex flex-col justify-start items-center gap-[10px]">
              <Image
                className="mb-[40px]"
                src="/images/SolutionConsultation1.png"
                alt="SolutionConsultation"
                width={101}
                height={91}
              />
              <Solution index={1} />
              <Solution index={2} />
            </div>
            <div className="flex flex-col justify-start items-center gap-[10px]">
              <Image
                className="mb-[40px]"
                src="/images/SolutionConsultation2.png"
                alt="SolutionConsultation"
                width={74}
                height={91}
              />
              <Solution index={3} />
              <Solution index={4} />
              <Solution index={5} />
            </div>
            <div className="flex flex-col justify-start items-center gap-[10px]">
              <Image
                className="mb-[40px]"
                src="/images/SolutionConsultation3.png"
                alt="SolutionConsultation"
                width={73}
                height={91}
              />
              <Solution index={6} />
              <Solution index={7} />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[330px] text-rm-red-0 text-[40px] font-bold mb-[40px]">
        {t('solution.consultation.im.title')}
      </div>
      {Array.from({ length: 3 }, (_, i) => i + 1).map((e) => (
        <div key={e} className="text-black text-[24px]">
          {t(`solution.consultation.im.line.${e}`)}
        </div>
      ))}
      <div className="mt-[100px] mb-[175px] w-[62.604vw] h-[35.104vw] relative">
        <Image
          src="/images/SolutionConsultationImage.png"
          alt="SolutionConsultationImage"
          sizes="62.604vw, 35.104vw"
          fill
          priority
          quality={100}
        />
      </div>
    </div>
  );
};
