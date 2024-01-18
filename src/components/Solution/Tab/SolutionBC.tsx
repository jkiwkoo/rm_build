import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const SolutionBC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center overflow-hidden">
      <div className="w-full h-[62.5vw] relative">
        <Image
          src="/images/SolutionBCImage.png"
          alt="SolutionBCImage"
          sizes="100vw, 62.5vw"
          fill
          priority
        />
      </div>
      <div className="absolute bg-white z-10 flex flex-col justify-between items-start w-[790px] h-[1000px] pt-[100px] pb-[70px] px-[60px]">
        <Image
          src="/images/SolutionBCLogo.png"
          alt="SolutionBCLogo"
          width={484}
          height={168}
        />
        <div className="text-black text-[22px] flex flex-col justify-between items-start h-full my-[50px]">
          {Array.from({ length: 3 }, (_, i) => i + 1).map((e) => (
            <div key={e}>
              <p>{t(`solution.bc.line.${e}`)}</p>
            </div>
          ))}
        </div>
        <div className="text-white text-[24px] rounded-[10px] flex justify-center items-center bg-rm-red-0 w-[300px] h-[80px] hover:cursor-pointer">
          {t('solution.bc.button')}
        </div>
      </div>
    </div>
  );
};
