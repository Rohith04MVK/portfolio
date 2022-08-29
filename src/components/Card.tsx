import type { ReactNode } from 'react';

interface CardProps {
  src: string;
  title: string;
  children: ReactNode;
}

const Card = ({ src, title, children }: CardProps) => {
  return (
    <div className="flex justify-between pt-10 px-5">
      <div className="rounded-lg shadow-lg bg-white max-w-sm transform transition-all opacity-50 hover:scale-105">
        <a href="#!">
          <img className="rounded-t-lg" src={src} alt="" />
        </a>
        <div className="p-6">
          <h5 className="text-text text-xl font-medium mb-2">{title}</h5>
          <p className="text-text text-base mb-4">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
