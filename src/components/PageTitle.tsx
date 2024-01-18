import Image from 'next/image';

type PageTitleProps = {
  title: string;
};

export const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <div className="w-full h-[7.292vw] flex justify-center items-center text-white font-bold text-[36px] relative overflow-hidden">
      <Image
        src="/images/PageTitle.png"
        alt="PageTitle"
        sizes="100vw, 7.292vw"
        fill
        priority
        quality={100}
      />
      <h1 className="absolute">{title}</h1>
    </div>
  );
};
