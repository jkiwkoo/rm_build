import { useEffect, useRef } from 'react';
import { Dispatch, SetStateAction } from 'react';

type ObserverProps = {
  dispatch: Dispatch<SetStateAction<boolean>>;
};

export const Observer = ({ dispatch }: ObserverProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          target === ref.current && dispatch(isIntersecting);
        });
      },
      {
        threshold: 0.5,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return <div className="w-0 h-0" ref={ref} />;
};
