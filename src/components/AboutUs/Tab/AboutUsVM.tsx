import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const AboutUsVM = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="h-[33.281vw] w-full relative">
        <Image
          src="/images/AboutUsVM.png"
          alt="AboutUsVM"
          sizes="100vw, 33.281vw"
          fill
          priority
          quality={100}
        />
      </div>
      <div className="absolute text-white flex flex-col justify-center items-center gap-[25px] translate-y-[-9vw]">
        <div
          className="text-[40px] font-bold"
          style={{
            textShadow: '0px 0px 6px rgba(0, 0, 0, 0.85)',
          }}
        >
          {t('aboutUs.vm.vision.title')}
        </div>
        <div
          className="text-[24px] flex flex-col justify-center items-center"
          style={{
            textShadow: '0px 0px 6px rgba(0, 0, 0, 0.85)',
          }}
        >
          <div className="">{t('aboutUs.vm.vision.description.1')}</div>
          <div className="">{t('aboutUs.vm.vision.description.2')}</div>
        </div>
      </div>
      <div className="absolute mt-[17.291vw] w-[62.5vw] h-[22.552vw] flex flex-col justify-center items-center gap-[2.2vw] bg-white border shadow-2xl text-black">
        <div className="text-[40px] font-bold">
          {t('aboutUs.vm.mission.title')}
        </div>
        <Image
          src="/images/AboutUsCheck.png"
          alt="AboutUsCheck"
          width={40}
          height={40}
        />
        <div className="text-[24px] text-rm-gray-3">
          {t('aboutUs.vm.mission.description')}
        </div>
      </div>
    </div>
  );
};
