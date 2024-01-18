import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t } = useTranslation();
  const router = useRouter();

  type PathProps = {
    pathName: string;
    route: string;
  };

  const Path = ({ pathName, route }: PathProps) => {
    return (
      <li
        className={`text-[20px] hover:cursor-pointer hover:text-rm-red-0 font-bold ${
          router.asPath === `/${pathName}` ? 'text-rm-red-0' : 'text-rm-gray-1'
        }`}
        onClick={() => {
          router.push({
            pathname: `${route}`,
          });
        }}
      >
        {t(`header.${pathName}`)}
      </li>
    );
  };

  return (
    <header className="px-[18.75vw] h-[125px] flex justify-between items-center">
      <Image
        src="/images/HeaderLogo.png"
        className="hover:cursor-pointer"
        alt="HeaderLogo"
        width={398}
        height={54}
        onClick={() => {
          router.push({
            pathname: '/',
          });
        }}
      />
      <div className="flex flex-col justify-between items-end h-full py-[20px]">
        <ul className="flex justify-between items-center gap-[1.04vw]">
          <li
            className="hover:cursor-pointer"
            onClick={() => {
              window.open('https://www.instagram.com/kr_researchmentor');
            }}
          >
            <Image
              src="/images/HeaderInstagram.png"
              alt="instagram"
              width={26}
              height={26}
            />
          </li>
          <li
            className="hover:cursor-pointer"
            onClick={() => {
              window.open('https://www.linkedin.com/company/researchmentor');
            }}
          >
            <Image
              src="/images/HeaderLinkedIn.png"
              alt="linkedIn"
              width={26}
              height={26}
            />
          </li>
          <li className="hover:cursor-pointer">
            <a href="mailto:info@researchmentor.co.kr">
              <Image
                src="/images/HeaderMail.png"
                alt="mail"
                width={26}
                height={26}
              />
            </a>
          </li>
          <li className="hover:cursor-pointer">
            <Image
              src="/images/HeaderEn.png"
              alt="english"
              width={30}
              height={30}
            />
          </li>
        </ul>
        <ul className="flex justify-between items-center gap-[2.6vw]">
          <Path pathName="aboutUs" route="aboutUs" />
          <Path pathName="solution" route="solution" />
          <Path pathName="news" route="news" />
          <Path pathName="career" route="career" />
          <Path pathName="contact" route="contact" />
          <Path pathName="faq" route="faq" />
        </ul>
      </div>
    </header>
  );
};
