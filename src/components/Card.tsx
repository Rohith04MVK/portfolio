import type { ReactNode } from 'react';

interface CardProps {
  src: string;
  title: string;
  children: ReactNode;
  href: string;
  tag1: string;
  tag2: string;
  tag3: string;
}

const Card = ({ src, title, href, children, tag1, tag2, tag3 }: CardProps) => {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white transform transition-all hover:scale-105">
      <a href={href}>
        <img className="w-full" src={src} alt="Mountain" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{children}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray rounded-full px-3 py-1 text-sm font-semibold text-text mr-2 mb-2">
            #{tag1}
          </span>
          <span className="inline-block bg-gray rounded-full px-3 py-1 text-sm font-semibold text-text mr-2 mb-2">
            #{tag2}
          </span>
          <span className="inline-block bg-gray rounded-full px-3 py-1 text-sm font-semibold text-text mr-2 mb-2">
            #{tag3}
          </span>
        </div>
      </a>
    </div>
  );
};

export default Card;
