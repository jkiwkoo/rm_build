import { PageTitle } from '@/components/PageTitle';
import { useTranslation } from 'react-i18next';

const News = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle title={t('header.news')} />
      {/* 임시 */}
      <div className="mt-[120px] flex flex-col justify-center items-center mb-[100px]">
        <div className="text-[34px] text-rm-red-0 font-bold mb-[100px]">
          Playing a role in scientific advancements
        </div>
        <div className="w-[1200px] bg-rm-red-0 h-[7px]" />
        <div className="flex flex-col justify-center items-start w-[1200px] px-[62px] gap-[20px] py-[50px]">
          <div className="text-[16px] text-rm-gray-1">2022.08.10 09:38</div>
          <div className="text-[34px] text-black font-bold">
            SD Biotechnologies, Approval for Individual Recognition
            <br />
            'Steamed Zingiber officinale Roscoe Extract'
          </div>
          <div className="text-[18px] text-black">
            [아시아경제 장효원 기자] 화장품 및 건강식품 제조·판매 전문기업인
            에스디생명공학 은 지난 4일 식품의약품안전처로부터
            ‘증숙생강추출분말(GGE03)’에 대해 ‘건강기능식품 개별인정형 원료’
            허가를 획득했다고 10일 밝혔다.
          </div>
          <div className="text-[18px] text-black">
            개별인정형 기능성 원료는 자체적으로 연구를 통해, 식약처로부터
            기능성을 인정받은 원료로 ‘증숙생강추출분말’은 위 점막을 보호해 위
            건강에 도움을 줄 수 있다는 내용으로 기능성을 인정받았다.
            에스디생명공학은 경희대학교 강동호 교수 연구팀, 성균관대학교 이선미
            교수 연구팀, 천연물 신소재 연구개발 기업인 제넨셀 및 건강기능식품
            인체적용시험 전문 CRO 기업인 리서치멘토와 함께 2017년 11월부터
            지난해 2월까지 농림식품기술기획평가원(ipet)의
            ‘농생명산업기술개발사업’의 지원을 받아 해당 원료를 개발했다.
          </div>
          <div
            className="hover:cursor-pointer bg-rm-red-0 w-[80px] h-[26px] flex justify-center items-start hover:cursor-pointertext-[18px] text-white"
            onClick={() => {
              window.open(
                'https://www.asiae.co.kr/article/2022081009381003473',
              );
            }}
          >
            more
          </div>
        </div>
        <div className="w-[1200px] bg-rm-red-0 h-[7px]" />
      </div>
    </>
  );
};

export default News;
