import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  type CertificationProps = {
    index: number;
  };

  const Certification = ({ index }: CertificationProps) => {
    const width = (index: number): number => {
      switch (index) {
        case 1:
          return 55;
        case 2:
          return 98;
        case 3:
          return 143;
        case 4:
          return 55;
        case 5:
          return 108;
        case 6:
          return 121;
        default:
          return 0;
      }
    };

    const height = (index: number): number => {
      switch (index) {
        case 1:
          return 53;
        case 2:
          return 44;
        case 3:
          return 47;
        case 4:
          return 55;
        case 5:
          return 56;
        case 6:
          return 45;
        default:
          return 0;
      }
    };

    return (
      <li className="w-[193px] h-[58px] bg-white flex justify-center items-center">
        <Image
          src={`/images/FooterCertification${index}.png`}
          alt="Certification"
          width={width(index)}
          height={height(index)}
        />
      </li>
    );
  };

  return (
    <footer className="px-[18.75vw] h-[290px] flex justify-between items-center bg-rm-black-0 text-white py-[60px] overflow-hidden">
      <div className="mr-[1.2vw]">
        <Image
          src={'/images/FooterLogo.png'}
          alt="FooterLogo"
          width={147}
          height={123}
        />
      </div>
      <div className="w-[19.375vw] mr-[3.125vw] flex flex-col justify-between items-start text-[14px]">
        <div className="text-[24px] mb-[20px]">{t('footer.company')}</div>
        {Array.from({ length: 5 }, (_, i) => i + 1).map((e) => (
          <div key={e}>{t(`footer.line.${e}`)}</div>
        ))}
      </div>
      <div className="flex flex-col justify-between items-center gap-[18px]">
        <div className="text-[24px] mb-[20px]">
          {t('footer.certifications')}
        </div>
        <ul className="grid grid-cols-3 gap-[10px]">
          {Array.from({ length: 6 }, (_, i) => i + 1).map((e) => (
            <Certification key={e} index={e} />
          ))}
        </ul>
      </div>
    </footer>
  );
};
