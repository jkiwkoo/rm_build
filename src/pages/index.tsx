import { MainBanner } from '@/components/Main/MainBanner';
import { MainContact } from '@/components/Main/MainContact';
import { MainDescription } from '@/components/Main/MainDescription';
import { MainExperience } from '@/components/Main/MainExperience';
import { MainNews } from '@/components/Main/MainNews';
import { MainReview } from '@/components/Main/MainReview';

const Main = () => {
  return (
    <>
      <MainBanner />
      <MainDescription />
      <MainReview />
      <MainExperience />
      <MainNews />
      <MainContact />
    </>
  );
};

export default Main;
