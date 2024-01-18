import { FAQ } from '@/components/FAQ/FAQ';
import { PageTitle } from '@/components/PageTitle';
import { useTranslation } from 'react-i18next';

const FAQPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle title={t('header.faq')} />
      <FAQ />
    </>
  );
};

export default FAQPage;
