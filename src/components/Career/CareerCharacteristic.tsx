import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const CareerCharacteristic = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-[114px]">
      <div className="mb-[50px] text-black text-[34px] font-bold flex justify-center items-center w-full">
        {t('career.characteristic.title')}
      </div>
      <div className="flex justify-center items-center gap-[30px] pb-[80px]">
        {Array.from({ length: 3 }, (_, i) => i + 1).map((e) => (
          <div key={e} className="w-[380px] h-[580px]">
            <Image
              className="absolute"
              src={`/images/CareerCharacteristic${e}.png`}
              alt="CareerCharacteristic"
              width={380}
              height={580}
            />
            <div className="flex justify-center items-center absolute w-[380px] h-[580px] z-10 text-white text-[24px]">
              <p>{t(`career.characteristic.${e}`)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
