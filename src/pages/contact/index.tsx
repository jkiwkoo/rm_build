import { ContactForm } from '@/components/Contact/ContactForm';
import { ContactMain } from '@/components/Contact/ContactMain';
import { PageTitle } from '@/components/PageTitle';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle title={t('header.contact')} />
      <ContactMain />
      <ContactForm />
    </>
  );
};

export default Contact;
