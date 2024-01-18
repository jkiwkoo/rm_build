import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const AboutUsHistory = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col justify-center items-center pb-[96px]">
      <div className="pt-[3.646vw] text-rm-red-0 text-[40px] font-bold pb-[100px]">
        {t('aboutUs.history.title')}
      </div>
      <Image
        src="/images/AboutUsHistory.png"
        alt="AboutUsHistory"
        width={1289}
        height={2382}
        priority
        quality={100}
      />
    </div>
  );
};
