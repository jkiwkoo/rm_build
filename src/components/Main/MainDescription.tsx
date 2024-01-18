import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const MainDescription = () => {
  const { t } = useTranslation();

  return (
    <div className="w-[100vw] h-[37.5vw] relative flex justify-center items-center overflow-hidden">
      <Image
        src="/images/MainDescription.png"
        alt="MainDescription"
        fill
        priority
        quality={100}
      />
      <div className="z-10 absolute flex justify-between items-center gap-[8.4vw] text-black">
        <div className="text-[24px] w-[32vw]">
          <h1 className="mb-[2.34vw] text-rm-red-0 text-[34px] font-bold">
            {Array.from({ length: 3 }, (_, i) => i + 1).map((e) => {
              return (
                <p key={e}>
                  {t(`main.description.title.line.${e}`)}
                  <br />
                </p>
              );
            })}
          </h1>
          <div className="mb-[0.8vw]">
            {Array.from({ length: 5 }, (_, i) => i + 1).map((e) => {
              return (
                <p key={e}>
                  {t(`main.description.description.line.${e}`)}
                  <br />
                </p>
              );
            })}
          </div>
          <h2 className="mb-[0.8vw] font-bold">
            {t('main.description.list.title')}
          </h2>
          {Array.from({ length: 3 }, (_, i) => i + 1).map((e) => {
            return (
              <p key={e}>
                {t(`main.description.list.line.${e}`)}
                <br />
              </p>
            );
          })}
        </div>
        <div className="w-[33.07vw] h-[26.67vw] relative">
          <Image
            src="/images/MainDescriptionSub.png"
            alt="MainDescriptionSub"
            sizes="33.07vw, 26.67vw"
            fill
            priority
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};
