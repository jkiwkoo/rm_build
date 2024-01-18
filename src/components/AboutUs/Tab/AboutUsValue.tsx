import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const AboutUsValue = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-[414px] bg-rm-gray-4 w-full flex flex-col justify-center items-center pb-[250px]">
      <div
        className={`group flex justify-center items-center w-[9.6875vw] h-[6.6145vw] relative translate-x-[0.5vw]`}
      >
        <Image
          src={`/images/AboutUsValue1.png`}
          alt="AboutUsValue"
          sizes={`9.6875vw, 6.6145vw`}
          fill
          priority
          quality={100}
        />
        <div
          className={`border p-[30px] rounded-[7px] absolute z-10 group-hover:visible invisible translate-y-[-7vw] w-[600px] h-[150px] bg-rm-pink-0 text-rm-gray-3 text-[20px] flex justify-center items-center text-center`}
        >
          {t('aboutUs.value.1')}
        </div>
      </div>
      <div className="flex">
        <div
          className={`group flex justify-center items-center w-[6.8229vw] h-[7.5vw] relative translate-y-[10vw] translate-x-[-1vw]`}
        >
          <Image
            src={`/images/AboutUsValue2.png`}
            alt="AboutUsValue"
            sizes={`6.8229vw, 7.5vw`}
            fill
            priority
            quality={100}
          />
          <div
            className={`border p-[30px] rounded-[7px] absolute z-10 group-hover:visible invisible translate-y-[7vw] translate-x-[-7vw] w-[290px] h-[250px] bg-rm-pink-0 text-rm-gray-3 text-[20px] flex justify-center items-center text-center`}
          >
            {t('aboutUs.value.2')}
          </div>
        </div>
        <div
          className={`flex justify-center items-center w-[34.5833vw] h-[33.0208vw] relative`}
        >
          <Image
            src={`/images/AboutUsValue.png`}
            alt="AboutUsValue"
            sizes={`34.5833vw, 33.0208vw`}
            fill
            priority
            quality={100}
          />
        </div>
        <div
          className={`group flex justify-center items-center w-[6.302vw] h-[6.5625vw] relative translate-y-[11vw] translate-x-[1vw]`}
        >
          <Image
            src={`/images/AboutUsValue3.png`}
            alt="AboutUsValue"
            sizes={`6.302vw, 6.5625vw`}
            fill
            priority
            quality={100}
          />
          <div
            className={`border p-[30px] rounded-[7px] absolute z-10 group-hover:visible invisible translate-x-[7vw] translate-y-[7vw] w-[350px] h-[250px] bg-rm-pink-0 text-rm-gray-3 text-[20px] flex justify-center items-center text-center`}
          >
            {t('aboutUs.value.3')}
          </div>
        </div>
      </div>
      <div className="flex">
        <div
          className={`group flex justify-center items-center w-[7.9167vw] h-[7.2396vw] relative translate-y-[1vw] translate-x-[-4vw]`}
        >
          <Image
            src={`/images/AboutUsValue4.png`}
            alt="AboutUsValue"
            sizes={`7.9167vw, 7.2396vw`}
            fill
            priority
            quality={100}
          />
          <div
            className={`border p-[30px] rounded-[7px] absolute z-10 group-hover:visible invisible translate-y-[7vw] w-[600px] h-[150px] bg-rm-pink-0 text-rm-gray-3 text-[20px] flex justify-center items-center text-center`}
          >
            {t('aboutUs.value.4')}
          </div>
        </div>
        <div
          className={`group flex justify-center items-center w-[15.4167vw] h-[7.1875vw] relative translate-y-[1vw] translate-x-[7vw]`}
        >
          <Image
            src={`/images/AboutUsValue5.png`}
            alt="AboutUsValue"
            sizes={`15.4167vw, 7.1875vw`}
            fill
            priority
            quality={100}
          />
          <div
            className={`border p-[30px] rounded-[7px] absolute z-10 group-hover:visible invisible translate-y-[7vw] w-[600px] h-[150px] bg-rm-pink-0 text-rm-gray-3 text-[20px] flex justify-center items-center text-center`}
          >
            {t('aboutUs.value.5')}
          </div>
        </div>
      </div>
    </div>
  );
};
