type LineProps = {
  width: string;
  end?: boolean;
};

export const Line = ({ width, end }: LineProps) => {
  return (
    <div
      className={`w-[${width}px] border border-transparent ${
        end ? 'border-t-black' : 'border-b-black'
      }`}
    ></div>
  );
};
