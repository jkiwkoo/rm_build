import { CareerBanner } from '@/components/Career/CareerBanner';
import { CareerCharacteristic } from '@/components/Career/CareerCharacteristic';
import { CareerHiring } from '@/components/Career/CareerHiring';
import { PageTitle } from '@/components/PageTitle';
import { useTranslation } from 'react-i18next';

const Career = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle title={t('header.career')} />
      <CareerBanner />
      <CareerHiring />
      <CareerCharacteristic />
    </>
  );
};

export default Career;
