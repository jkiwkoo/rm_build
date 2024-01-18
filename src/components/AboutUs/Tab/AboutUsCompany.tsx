import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const AboutUsCompany = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col justify-center items-center pb-[96px]">
      <div className="pt-[3.646vw] text-rm-red-0 text-[40px] font-bold">
        {t('aboutUs.company.title')}
      </div>
      <div className="mt-[8.906vw] flex flex-col justify-center gap-[1.145vw] items-center bg-rm-gray-2 self-end w-[76.04vw] h-[37.5vw] text-[20px] text-rm-gray-1 overflow-hidden">
        {Array.from({ length: 3 }, (_, i) => i + 1).map((e) => (
          <div key={e} className="w-[28.125vw] h-[7.8vw] text-center">
            {t(`aboutUs.company.description.${e}`)}
          </div>
        ))}
      </div>
      <div className="absolute mt-[3.385vw] ml-[15vw] flex justify-center self-start items-center bg-rm-red-0 w-[27.6vw] h-[36.46vw]">
        <Image
          src="/images/_AboutUsCompany.png"
          alt="AboutUsCompany"
          sizes="27.6vw, 36.46vw"
          fill
          priority
          quality={100}
        />
      </div>
    </div>
  );
};
