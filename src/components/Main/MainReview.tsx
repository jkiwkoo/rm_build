import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const MainReview = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(1);
  const [left, setLeft] = useState(false);

  const Review = () => {
    return (
      <div
        className={`h-[200px] flex flex-col justify-between items-center transition-all ${
          left ? 'animate-fade-in-left' : 'animate-fade-in-right'
        }`}
      >
        <p className="w-[770px] text-center">
          {t(`main.review.text.${index}`)}
        </p>
        <p className="font-bold">{t(`main.review.reviewer.${index}`)}</p>
      </div>
    );
  };

  return (
    <div className="w-[100vw] h-[550px] flex flex-col justify-center items-center text-black text-[20px] gap-[30px]">
      <h1 className="text-[34px] font-bold text-rm-red-0">
        {t('main.review.title')}
      </h1>
      <div className="flex justify-between items-center gap-[50px]">
        <Image
          className="hover:cursor-pointer"
          src="/images/MainReviewArrowLeft.png"
          alt="MainReviewArrowLeft"
          width={27}
          height={48}
          onClick={() => {
            setLeft(true);
            index === 1 ? setIndex(4) : setIndex(index - 1);
          }}
        />
        <div className="flex justify-center items-center w-[48.43vw] min-w-[930px] h-[280px] shadow-md text-black">
          <Review />
        </div>
        <Image
          className="hover:cursor-pointer"
          src="/images/MainReviewArrowRight.png"
          alt="MainReviewArrowRight"
          width={27}
          height={48}
          onClick={() => {
            setLeft(false);
            setIndex((index % 4) + 1);
          }}
        />
      </div>
      <div className="flex justify-center items-center gap-[11px]">
        {Array.from({ length: 4 }, (_, i) => i + 1).map((e) => (
          <div
            key={e}
            className={`duration-700 transition-all w-[8px] h-[8px] rounded-full ${
              index === e ? 'bg-rm-red-0' : 'bg-rm-gray-0'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
