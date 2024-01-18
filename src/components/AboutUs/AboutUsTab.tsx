import { useTranslation } from 'react-i18next';
import { Dispatch, SetStateAction } from 'react';
import { animateScroll } from 'react-scroll';

type AboutUsTabProps = {
  tab: number;
  dispatch: Dispatch<SetStateAction<number>>;
};

export const AboutUsTab = ({ tab, dispatch }: AboutUsTabProps) => {
  const { t } = useTranslation();
  const scrollOptions = {
    duration: 300,
    smooth: true,
  };

  return (
    <div className="z-30 bg-white sticky top-0 w-full h-[77px] border-b flex justify-center items-center gap-[5.21vw] text-[24px] text-rm-gray-1 font-bold">
      <p
        className={`px-[30px] ${
          tab === 1
            ? 'border-b-[2px] border-rm-red-0 text-rm-red-0'
            : 'hover:border-rm-red-0 hover:text-rm-red-0 hover:border-b-[2px]'
        } h-full flex justify-center items-center hover:cursor-pointer`}
        onClick={() => {
          dispatch(1);
          animateScroll.scrollTo(342, scrollOptions);
        }}
      >
        {t(`aboutUs.tab.1`)}
      </p>
      <p
        className={`px-[30px] ${
          tab === 2
            ? 'border-b-[2px] border-rm-red-0 text-rm-red-0'
            : 'hover:border-rm-red-0 hover:text-rm-red-0 hover:border-b-[2px]'
        } h-full flex justify-center items-center hover:cursor-pointer`}
        onClick={() => {
          dispatch(2);
          animateScroll.scrollTo(1397, scrollOptions);
        }}
      >
        {t(`aboutUs.tab.2`)}
      </p>
      <p
        className={`px-[30px] ${
          tab === 3
            ? 'border-b-[2px] border-rm-red-0 text-rm-red-0'
            : 'hover:border-rm-red-0 hover:text-rm-red-0 hover:border-b-[2px]'
        } h-full flex justify-center items-center hover:cursor-pointer`}
        onClick={() => {
          dispatch(3);
          animateScroll.scrollTo(2400, scrollOptions);
        }}
      >
        {t(`aboutUs.tab.3`)}
      </p>
      <p
        className={`px-[30px] ${
          tab === 4
            ? 'border-b-[2px] border-rm-red-0 text-rm-red-0'
            : 'hover:border-rm-red-0 hover:text-rm-red-0 hover:border-b-[2px]'
        } h-full flex justify-center items-center hover:cursor-pointer`}
        onClick={() => {
          dispatch(4);
          animateScroll.scrollTo(342, scrollOptions);
        }}
      >
        {t(`aboutUs.tab.4`)}
      </p>
    </div>
  );
};
