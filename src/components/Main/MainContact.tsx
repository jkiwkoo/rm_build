import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

export const MainContact = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div className="pt-[130px] w-full flex justify-center items-center text-white text-[22px] mb-[70px] overflow-hidden">
      <div className="w-[62.5vw] h-[20.83vw] flex">
        <div className="w-[31.25vw] relative">
          <Image
            src="/images/MainContact.png"
            alt="MainContact"
            sizes="31.25vw, 20.83vw"
            fill
            priority
            quality={100}
          />
        </div>
        <div className="w-[31.25vw] bg-rm-red-0 py-[2.1vw] px-[2.6vw] flex flex-col justify-between overflow-hidden">
          <div className="flex justify-between text-[40px] font-bold">
            <h1>{t('main.contact.information')}</h1>
            <p
              className="hover:cursor-pointer"
              onClick={() => {
                router.push({
                  pathname: 'contact',
                });
              }}
            >
              +
            </p>
          </div>
          <div>
            <p className="absolute translate-x-[-0.6vw]">•</p>
            <p>{t('main.contact.tel')}</p>
            <p>82-2-1522-4821</p>
          </div>
          <div>
            <p className="absolute translate-x-[-0.6vw]">•</p>
            <p>{t('main.contact.email')}</p>
            <p>info@researchmentor.co.kr</p>
          </div>
          <div>
            <p className="absolute translate-x-[-0.6vw]">•</p>
            <p>{t('main.contact.linkedIn')}</p>
            <a
              href="https://www.linkedin.com/company/researchmentor/"
              target="_blank"
            >
              https://www.linkedin.com/company/researchmentor
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
