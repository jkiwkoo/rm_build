import Image from 'next/image';

export const CareerBanner = () => {
  return (
    <div className="w-full h-[23.958vw] relative">
      <Image
        src="/images/CareerBanner.png"
        alt="CareerBanner"
        sizes="100vw, 23.958vw"
        fill
        priority
        quality={100}
      />
    </div>
  );
};
