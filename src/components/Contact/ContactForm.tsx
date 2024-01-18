import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import { Line } from '../Line';

export const ContactForm = () => {
  const { t } = useTranslation();

  const [type, setType] = useState<'Consulting' | 'Clinical Trial' | 'Others'>(
    'Consulting',
  );
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [inquiryDetail, setInquirtDetail] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const clear = () => {
    setType('Consulting');
    setName('');
    setPosition('');
    setPhone('');
    setEmail('');
    setCompany('');
    setInquirtDetail('');
  };

  const sendEmail = () => {
    const templateParams = {
      type: type,
      name: name,
      position: position,
      phone: phone,
      email: email,
      company: company,
      inquiryDetail: inquiryDetail,
    };

    if (inquiryDetail === '') {
      alert(t('contact.mail.fail'));
      return;
    }

    try {
      emailjs.send(
        'research_mentor',
        'research_mentor',
        templateParams,
        'eMkIA_HOMy4Km2ziy',
      );
      setIsOpen(true);
      clear();
    } catch {
      alert(t('contact.mail.fail'));
    }
  };

  type CheckBoxProps = {
    _type: 'Consulting' | 'Clinical Trial' | 'Others';
  };

  const CheckBox = ({ _type }: CheckBoxProps) => (
    <div
      className={`border border-black w-[20px] h-[20px] rounded-[3px] flex justify-center items-center cursor-pointer ${
        type === _type ? 'bg-black' : ''
      }`}
      onClick={() => {
        setType(_type);
      }}
    >
      <Image
        src={'/images/ContactCheck.png'}
        alt="ContactCheck"
        width={11}
        height={9}
      />
    </div>
  );

  return (
    <div className="text-black text-[20px] flex flex-col justify-center items-center mb-[64px]">
      <div
        className={`absolute w-[800px] h-[300px] rounded-[20px] shadow-2xl border bg-white z-10 flex flex-col justify-between items-center ${
          isOpen ? '' : 'hidden'
        }`}
      >
        <div className="mt-[67px] text-[24px] text-black flex flex-col justify-center items-center">
          <div>{t('contact.mail.success.line.1')}</div>
          <div>{t('contact.mail.success.line.2')}</div>
        </div>
        <div
          className="mb-[33px] hover:cursor-pointer bg-rm-gray-1 text-white text-[22px] w-[600px] h-[60px] flex justify-center items-center"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          {t('contact.close')}
        </div>
      </div>
      <div className="flex justify-start items-center w-[900px] gap-[100px] mb-[40px]">
        <div className="flex gap-[15px] justify-start items-center">
          <CheckBox _type="Consulting" />
          {t('contact.type.1')}
        </div>
        <div className="flex gap-[15px] justify-start items-center">
          <CheckBox _type="Clinical Trial" />
          {t('contact.type.2')}
        </div>
        <div className="flex gap-[15px] justify-start items-center">
          <CheckBox _type="Others" />
          {t('contact.type.3')}
        </div>
      </div>
      <Line width="900" />
      <Line width="900" end />
      <div className="w-[900px] h-[82px] flex">
        <div className="flex justify-between w-[450px] items-center h-[82px]">
          <div className="ml-[17px]">{t('contact.name')}</div>
          <input
            className="border border-rm-gray-6 px-[10px] rounded-[6px] text-[16px] w-[310px] h-[40px]"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-between w-[450px] items-center h-[82px]">
          <div className="ml-[36px]">{t('contact.position')}</div>
          <input
            className="border border-rm-gray-6 px-[10px] rounded-[6px] text-[16px] w-[310px] h-[40px]"
            value={position}
            onChange={(e) => {
              setPosition(e.target.value);
            }}
          />
        </div>
      </div>
      <Line width="900" />
      <div className="w-[900px] h-[82px] flex">
        <div className="flex justify-between w-[450px] items-center h-[82px]">
          <div className="ml-[17px]">{t('contact.phone')}</div>
          <input
            className="border border-rm-gray-6 px-[10px] rounded-[6px] text-[16px] w-[310px] h-[40px]"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-between w-[450px] items-center h-[82px]">
          <div className="ml-[36px]">{t('contact.email')}</div>
          <input
            className="border border-rm-gray-6 px-[10px] rounded-[6px] text-[16px] w-[310px] h-[40px]"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
      </div>
      <Line width="900" />
      <div className="w-[900px] h-[82px] flex">
        <div className="flex justify-between w-[450px] items-center h-[82px]">
          <div className="ml-[17px]">{t('contact.company')}</div>
          <input
            className="border border-rm-gray-6 px-[10px] rounded-[6px] text-[16px] w-[310px] h-[40px]"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          />
        </div>
      </div>
      <Line width="900" />
      <div className="w-[900px] h-[300px] flex flex-col justify-between items-center py-[25px]">
        <div className="ml-[17px] self-start">{t('contact.inquiryDetail')}</div>
        <textarea
          className="border border-rm-gray-6 p-[10px] rounded-[6px] text-[16px] w-[870px] h-[199px] resize-none"
          value={inquiryDetail}
          onChange={(e) => {
            setInquirtDetail(e.target.value);
          }}
        />
      </div>
      <Line width="900" />
      <Line width="900" end />
      <div
        className="mt-[56px] w-[600px] h-[60px] text-white text-[22px] flex justify-center items-center bg-rm-red-0 hover:cursor-pointer"
        onClick={sendEmail}
      >
        {t('contact.submit')}
      </div>
    </div>
  );
};
