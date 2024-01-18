import { PageTitle } from '@/components/PageTitle';
import { SolutionTab } from '@/components/Solution/SolutionTab';
import { SolutionTabGroup } from '@/components/Solution/SolutionTabGroup';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Solution = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(1);

  return (
    <>
      <PageTitle title={t('header.solution')} />
      <SolutionTab tab={index} dispatch={setIndex} />
      <SolutionTabGroup tab={index} />
    </>
  );
};

export default Solution;
