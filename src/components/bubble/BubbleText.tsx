import { FC, ReactNode } from 'react';

interface BubbleTextProps {
  children: ReactNode;
  className?: string;
  tailClassName?: string;
}

const BubbleText: FC<BubbleTextProps> = ({ children, className, tailClassName }) => {
  return (
    <div>
      <div className={`relative inline-flex w-auto text-white rounded-lg px-4 py-1.5 text-lg shadow-md ${className}`}>
        {children}
        <div
          className={`absolute bottom-0 left-4 w-3 h-3 bg-inherit rotate-45 transform translate-y-1/2 ${tailClassName}`}></div>
      </div>
    </div>
  );
};

export default BubbleText;
