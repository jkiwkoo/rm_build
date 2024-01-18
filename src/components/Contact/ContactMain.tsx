import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const ContactMain = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col font-bold text-[28px] text-black justify-center items-center mb-[130px]">
      <div className="mt-[72px]">{t('contact.line.1')}</div>
      <div className="mb-[57px]">{t('contact.line.2')}</div>
      <Image
        src={'/images/ContactMain.png'}
        width={896}
        height={164}
        alt="ContactMain"
        quality={100}
        priority
      />
    </div>
  );
};
