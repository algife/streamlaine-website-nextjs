import Image from 'next/image';

import cn from '@/utils/cn';

import quoteSvg from '../../assets/svg/quote.svg';

export default function ProofStatement({
  text,
  subText,
  date,
  className,
}: {
  text?: string;
  subText?: string;
  date: string;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        'mx-auto flex max-w-screen-md flex-row text-center',
        className,
      )}
    >
      <div className="relative flex flex-row pl-3 pt-3 text-start">
        <Image
          src={quoteSvg}
          width={80}
          height={80}
          alt="Quotes Icon"
          className="absolute left-0 top-0 z-10 opacity-20"
        />

        <blockquote className="z-20 font-serif italic tracking-wide opacity-90">
          <div className="inline text-pretty text-base font-extralight text-white">
            {text}
            &nbsp;
            <span className="subText text-gray-500">{subText}</span>
          </div>
          <figcaption className="inline items-center divide-x-2 divide-gray-700 rtl:divide-x-reverse">
            {date && (
              <cite className="ps-3 text-sm text-gray-500">- {date}</cite>
            )}
          </figcaption>
        </blockquote>
      </div>
    </figure>
  );
}
