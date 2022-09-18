import type { ReactNode } from 'react';

interface CardProps {
  src: string;
  title: string;
  children: ReactNode;
  tag1: string;
  tag2: string;
  tag3: string;
}

const Card = ({ src, title, children, tag1, tag2, tag3}: CardProps) => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src={src} alt="Mountain" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {children}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag1}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag2}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag3}</span>
      </div>
    </div>
  );
};

export default Card;
