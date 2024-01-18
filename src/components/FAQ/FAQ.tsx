import { useTranslation } from 'react-i18next';
import { Line } from '../Line';
import Image from 'next/image';
import { useState } from 'react';

export const FAQ = () => {
  const { t } = useTranslation();
  const [oneIsOpen, setOneIsOpen] = useState(false);
  const [twoIsOpen, setTwoIsOpen] = useState(false);
  const [threeIsOpen, setThreeIsOpen] = useState(false);
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [system, setSystem] = useState(1);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="text-[40px] mt-[65px] mb-[85px] text-rm-red-0 font-bold">
        {t('faq.title')}
      </div>
      <Line width="1200" />
      <div className="w-[1200px] my-[25px] px-[50px] flex flex-col">
        <div
          className="flex justify-between w-full text-[21px] items-center hover:cursor-pointer"
          onClick={() => {
            oneIsOpen ? setOneIsOpen(false) : setOneIsOpen(true);
          }}
        >
          <div>{t('faq.1.q')}</div>
          <div className="w-[22px] h-[14px] hover:cursor-pointer">
            {oneIsOpen ? (
              <Image
                src={'/images/_FAQArrowUp.png'}
                alt="FAQArrow"
                width={22}
                height={14}
              />
            ) : (
              <Image
                src={'/images/_FAQArrowDown.png'}
                alt="FAQArrow"
                width={22}
                height={14}
              />
            )}
          </div>
        </div>
        <div className={`mt-[20px] text-[16px] ${oneIsOpen ? '' : 'hidden'}`}>
          {t('faq.1.a')}
        </div>
      </div>
      <Line width="1200" />
      <div className="w-[1200px] my-[25px] px-[50px] flex flex-col">
        <div
          className="flex justify-between w-full text-[21px] items-center hover:cursor-pointer"
          onClick={() => {
            twoIsOpen ? setTwoIsOpen(false) : setTwoIsOpen(true);
          }}
        >
          <div>{t('faq.2.q')}</div>
          <div
            className="w-[22px] h-[14px] hover:cursor-pointer"
            onClick={() => {
              twoIsOpen ? setTwoIsOpen(false) : setTwoIsOpen(true);
            }}
          >
            {twoIsOpen ? (
              <Image
                src={'/images/_FAQArrowUp.png'}
                alt="FAQArrow"
                width={22}
                height={14}
              />
            ) : (
              <Image
                src={'/images/_FAQArrowDown.png'}
                alt="FAQArrow"
                width={22}
                height={14}
              />
            )}
          </div>
        </div>
        <div className={`mt-[20px] text-[16px] ${twoIsOpen ? '' : 'hidden'}`}>
          <div>{t('faq.2.a.1')}</div>
          <div>{t('faq.2.a.2')}</div>
          <div>{t('faq.2.a.3')}</div>
          <div>{t('faq.2.a.4')}</div>
        </div>
      </div>
      <Line width="1200" />
      <div className="w-[1200px] my-[25px] px-[50px] flex flex-col">
        <div className="flex justify-between w-full text-[21px] items-center">
          <div
            className="hover:cursor-pointer"
            onClick={() => {
              threeIsOpen ? setThreeIsOpen(false) : setThreeIsOpen(true);
            }}
          >
            {t('faq.3.q')}
          </div>
          <div
            className="w-[22px] h-[14px] hover:cursor-pointer"
            onClick={() => {
              threeIsOpen ? setThreeIsOpen(false) : setThreeIsOpen(true);
            }}
          >
            {threeIsOpen ? (
              <Image
                src={'/images/_FAQArrowUp.png'}
                alt="FAQArrow"
                width={22}
                height={14}
              />
            ) : (
              <Image
                src={'/images/_FAQArrowDown.png'}
                alt="FAQArrow"
                width={22}
                height={14}
              />
            )}
          </div>
        </div>
        <div className={`mt-[20px] text-[16px] ${threeIsOpen ? '' : 'hidden'}`}>
          <div className="mb-[20px]">{t('faq.3.a')}</div>
          <div className="w-full flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-[74px] translate-y-[-61px] translate-x-[2px]">
              <Image
                className="hover:cursor-pointer"
                src={'/images/FAQSystem1.png'}
                alt="system"
                width={319}
                height={68}
                onClick={() => {
                  setSystem(1);
                  setPopupIsOpen(true);
                }}
              />
              <Image
                className="hover:cursor-pointer"
                src={'/images/FAQSystem6.png'}
                alt="system"
                width={319}
                height={68}
                onClick={() => {
                  setSystem(6);
                  setPopupIsOpen(true);
                }}
              />
              <Image
                className="hover:cursor-pointer"
                src={'/images/FAQSystem3.png'}
                alt="system"
                width={319}
                height={68}
                onClick={() => {
                  setSystem(3);
                  setPopupIsOpen(true);
                }}
              />
              <Image
                className="hover:cursor-pointer"
                src={'/images/FAQSystem8.png'}
                alt="system"
                width={319}
                height={68}
                onClick={() => {
                  setSystem(8);
                  setPopupIsOpen(true);
                }}
              />
              <Image
                className="hover:cursor-pointer"
                src={'/images/FAQSystem9.png'}
                alt="system"
                width={319}
                height={68}
                onClick={() => {
                  setSystem(9);
                  setPopupIsOpen(true);
                }}
              />
            </div>
            <div
              className={`${
                popupIsOpen ? '' : 'hidden'
              } w-[580px] h-[520px] absolute z-10 bg-white flex flex-col justify-between items-center p-[40px] text-[16px] border shadow-2xl`}
            >
              <div className="mb-[25px] flex justify-between items-center w-full text-[24px] font-bold">
                <Image
                  className="hover:cursor-pointer"
                  src={'/images/FAQArrowLeft.png'}
                  alt="FAQArrowLeft"
                  width={20}
                  height={29}
                  onClick={() => {
                    system === 1 ? setSystem(10) : setSystem(system - 1);
                  }}
                />
                {t(`faq.3.system.${system}.title`)}
                <Image
                  className="hover:cursor-pointer"
                  src={'/images/FAQArrowRight.png'}
                  alt="FAQArrowRight"
                  width={20}
                  height={29}
                  onClick={() => {
                    system === 10 ? setSystem(1) : setSystem(system + 1);
                  }}
                />
              </div>
              <div className="flex flex-col justify-between items-start w-full h-full">
                {Array.from({ length: 8 }, (_, i) => i + 1).map((e) => (
                  <div key={e}>
                    <div>{t(`faq.3.system.${system}.line.${e}`)}</div>
                  </div>
                ))}
              </div>
              <div
                className="mt-[25px] w-[490px] h-[50px] text-white bg-rm-red-0 text-[18px] flex justify-center items-center"
                onClick={() => {
                  setPopupIsOpen(false);
                }}
              >
                {t('faq.3.system.close')}
              </div>
            </div>
            <Image
              src={'/images/FAQImage.png'}
              width={388}
              height={784}
              alt="FAQImage"
            />
            <div className="flex flex-col justify-center items-center gap-[74px] translate-y-[-48px]">
              <Image
                className="hover:cursor-pointer"
                src={'/images/FAQSystem2.png'}
                alt="system"
                width={319}
                height={68}
                onClick={() => {
                  setSystem(2);
                  setPopupIsOpen(true);
                }}
              />
              <Image
                className="hover:cursor-pointer"
                src={'/images/FAQSystem5.png'}
                alt="system"
                width={319}
                height={68}
                onClick={() => {
                  setSystem(5);
                  setPopupIsOpen(true);
                }}
              />
              <Image
                className="hover:cursor-pointer"
                src={'/images/_FAQSystem4.png'}
                alt="system"
                width={319}
                height={68}
                onClick={() => {
                  setSystem(4);
                  setPopupIsOpen(true);
                }}
              />
              <Image
                className="hover:cursor-pointer"
                src={'/images/FAQSystem7.png'}
                alt="system"
                width={319}
                height={68}
                onClick={() => {
                  setSystem(7);
                  setPopupIsOpen(true);
                }}
              />
              <Image
                className="hover:cursor-pointer"
                src={'/images/FAQSystem10.png'}
                alt="system"
                width={319}
                height={68}
                onClick={() => {
                  setSystem(10);
                  setPopupIsOpen(true);
                }}
              />
            </div>
          </div>
          <div className="mt-[20px]">{t('faq.3.ex')}</div>
        </div>
      </div>
      <Line width="1200" />
      <div className="mb-[130px]" />
    </div>
  );
};
