import { useTranslation } from 'react-i18next';
import { Line } from '../Line';

export const CareerHiring = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-[40px] flex flex-col justify-center items-center">
      <div className="mb-[50px] text-black text-[34px] font-bold flex justify-center items-center w-full">
        {t('career.hiring')}
      </div>
      <div className="w-[1200px]">
        <Line width="1200" />
        <Line width="1200" end />
        <div className="h-[84px]"></div>
        <Line width="1200" />
        <div className="h-[84px]"></div>
        <Line width="1200" />
        <Line width="1200" end />
      </div>
    </div>
  );
};
