import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

export const MainNews = () => {
  const { t } = useTranslation();
  const router = useRouter();

  type NewsProps = {
    index: number;
  };

  const News = ({ index }: NewsProps) => {
    return (
      <div className="w-[14.06vw] h-[21.35vw] border hover:bg-rm-red-0">
        <div className="hidden">{index}</div>
      </div>
    );
  };

  return (
    <div className="pt-[100px] w-full flex justify-center items-center text-black text-[16px] overflow-hidden">
      <div className="w-[62.5vw] flex justify-between">
        <div className="flex flex-col justify-between items-start">
          <div>
            <h1 className="text-[40px] font-bold mb-[38px]">
              {t('main.news.title.line.1')}
              <br />
              {t('main.news.title.line.2')}
            </h1>
            <p>
              {t('main.news.description.line.1')}
              <br />
              {t('main.news.description.line.2')}
            </p>
          </div>
          <div
            className="bg-rm-red-0 w-[98px] h-[36px] flex justify-center items-start text-white text-[22px] hover:cursor-pointer"
            onClick={() => {
              router.push({
                pathname: 'news',
              });
            }}
          >
            {t('main.news.more')}
          </div>
        </div>
        <ul className="flex justify-between items-center gap-[0.521vw]">
          {Array.from({ length: 3 }, (_, i) => i + 1).map((e) => (
            <News key={e} index={e} />
          ))}
        </ul>
      </div>
    </div>
  );
};
