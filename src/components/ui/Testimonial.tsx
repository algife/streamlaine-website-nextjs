import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import quoteSvg from '../../assets/svg/quote.svg';

export default function Testimonial({
  image,
  role,
  name,
  quote,
}: {
  image: string | StaticImport;
  role?: string;
  name?: string;
  quote: string;
}) {
  return (
    <figure className="relative mx-auto max-w-screen-md text-center">
      <Image
        src={quoteSvg}
        width={40}
        height={40}
        alt="Quotes Icon"
        className="absolute bottom-0 left-0 z-10 opacity-50"
      />

      <blockquote className="z-20 ml-4 ">
        <p className="text-justify text-2xl font-medium italic text-white">
          {quote}
        </p>
      </blockquote>

      <figcaption className="z-20 mt-6 space-x-3 rtl:space-x-reverse">
        <Image src={image} width={120} height={120} alt="" />
        <div className="flex items-center divide-x-2 divide-gray-700 rtl:divide-x-reverse">
          {name && <cite className="pe-3 font-medium text-white">{name}</cite>}
          {role && <cite className="ps-3 text-sm text-gray-400">{role}</cite>}
        </div>
      </figcaption>
    </figure>
  );
}
