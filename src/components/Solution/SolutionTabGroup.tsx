import { SolutionConsultation } from './Tab/SolutionConsultation';
import { SolutionCT } from './Tab/SolutionCT';
import { SolutionSA } from './Tab/SolutionSA';
import { SolutionBC } from './Tab/SolutionBC';

type SolutionTabGroupProps = {
  tab: number;
};

export const SolutionTabGroup = ({ tab }: SolutionTabGroupProps) => {
  return (
    <>
      {tab === 1 && <SolutionConsultation />}
      {tab === 2 && <SolutionCT />}
      {tab === 3 && <SolutionSA />}
      {tab === 4 && <SolutionBC />}
    </>
  );
};
