import { AboutUsTab } from '@/components/AboutUs/AboutUsTab';
import { AboutUsTabGroup } from '@/components/AboutUs/AboutUsTabGroup';
import { AboutUsHistory } from '@/components/AboutUs/Tab/AboutUsHistory';
import { PageTitle } from '@/components/PageTitle';
import { useState } from 'react';

import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(1);

  return (
    <>
      <PageTitle title={t('header.aboutUs')} />
      <AboutUsTab tab={index} dispatch={setIndex} />
      <div className={`${index === 4 && 'hidden'}`}>
        <AboutUsTabGroup />
      </div>
      <div className={`${index !== 4 && 'hidden'}`}>
        <AboutUsHistory />
      </div>
    </>
  );
};

export default AboutUs;
