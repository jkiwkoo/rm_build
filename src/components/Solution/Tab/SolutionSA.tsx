import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const SolutionSA = () => {
  const { t } = useTranslation();

  const softwareWidth = (index: number): number => {
    switch (index) {
      case 1:
        return 136;
      case 2:
        return 277;
      case 3:
        return 188;
      case 4:
        return 152;
      default:
        return 0;
    }
  };

  const softwareHeight = (index: number): number => {
    switch (index) {
      case 1:
        return 107;
      case 2:
        return 92;
      case 3:
        return 124;
      case 4:
        return 116;
      default:
        return 0;
    }
  };

  type SolutionProps = {
    index: number;
  };

  const Solution = ({ index }: SolutionProps) => {
    const lineMap = (_index: number) => {
      switch (_index) {
        case 1:
          return 4;
        case 2:
          return 2;
        case 3:
          return 2;
        default:
          return 0;
      }
    };

    const width = (_index: number): number => {
      switch (_index) {
        case 1:
          return 112;
        case 2:
          return 70;
        case 3:
          return 89;
        default:
          return 0;
      }
    };

    const height = (_index: number): number => {
      switch (_index) {
        case 1:
          return 73;
        case 2:
          return 75;
        case 3:
          return 87;
        default:
          return 0;
      }
    };

    return (
      <div className="flex flex-col justify-center items-center">
        <div className="h-[100px] flex justify-center items-end">
          <Image
            src={`/images/SolutionSA${index}.png`}
            alt="SolutionSA"
            width={width(index)}
            height={height(index)}
          />
        </div>
        <div className="text-rm-red-0 bg-white text-[20px] font-bold flex justify-center items-center w-[300px] h-[50px] mt-[30px] mb-[15px]">
          {t(`solution.sa.solutions.${index}.title`)}
        </div>
        {Array.from({ length: lineMap(index) }, (_, i) => i + 1).map((e) => (
          <div
            key={e}
            className="text-white self-start w-full ml-[20px] justify-self-center text-[18px]"
          >
            {t(`solution.sa.solutions.${index}.description.${e}`)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col justify-center items-center pb-[83px]">
      <div className="pt-[3.646vw] text-rm-red-0 text-[40px] font-bold mb-[40px]">
        {t('solution.tab.3')}
      </div>
      {Array.from({ length: 5 }, (_, i) => i + 1).map((e) => (
        <div
          key={e}
          className={`text-black text-[24px] ${e === 2 ? 'mb-[30px]' : ''}`}
        >
          {t(`solution.description.3.line.${e}`)}
        </div>
      ))}
      <div className="mt-[113px] bg-rm-red-0 h-[615px] w-full flex justify-center items-center">
        <div className="flex justify-center items-start gap-[30px]">
          {Array.from({ length: 3 }, (_, i) => i + 1).map((e) => (
            <Solution key={e} index={e} />
          ))}
        </div>
      </div>
      <div className="mt-[150px] text-rm-red-0 text-[34px] font-bold">
        {t('solution.sa.title')}
      </div>
      <div className="mt-[133px] flex justify-center items-center gap-[90px] mb-[50px]">
        {Array.from({ length: 4 }, (_, i) => i + 1).map((e) => (
          <Image
            src={`/images/SolutionSaSoftware${e}.png`}
            alt="MainExperience"
            width={softwareWidth(e)}
            height={softwareHeight(e)}
          />
        ))}
      </div>
    </div>
  );
};
