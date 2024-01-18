import { useTranslation } from 'react-i18next';
import { Dispatch, SetStateAction } from 'react';

type SolutionTabProps = {
  tab: number;
  dispatch: Dispatch<SetStateAction<number>>;
};

export const SolutionTab = ({ tab, dispatch }: SolutionTabProps) => {
  const { t } = useTranslation();

  return (
    <div className="z-30 bg-white w-full h-[77px] border-b flex justify-center items-center gap-[5.21vw] text-[24px] text-rm-gray-1 font-bold">
      {Array.from({ length: 4 }, (_, i) => i + 1).map((e) => {
        return (
          <p
            key={e}
            className={`px-[30px] ${
              tab === e
                ? 'border-b-[2px] border-rm-red-0 text-rm-red-0'
                : 'hover:border-rm-red-0 hover:text-rm-red-0 hover:border-b-[2px]'
            } h-full flex justify-center items-center hover:cursor-pointer`}
            onClick={() => {
              dispatch(e);
            }}
          >
            {t(`solution.tab.${e}`)}
          </p>
        );
      })}
    </div>
  );
};
