import type { ReactNode } from 'react';

/* 


! SIN TERMINAR 

*/
export default function SuccessCaseItem({
  role,
  name,
  quote,
  bulletpoints,
}: {
  role: string;
  name: string;
  quote: string;
  bulletpoints: { text: ReactNode; icon: ReactNode }[];
}) {
  return (
    <figure className="mx-auto max-w-screen-md text-center">
      <blockquote>
        <p className="text-2xl font-medium italic text-white">{quote}</p>
        <ul className="list-disc">
          {bulletpoints.map((bp, idx) => (
            <li key={`highlight_${idx + 1}`}>
              <div className="icon">{bp.icon}</div>
              <span className="text">{bp.text}</span>
            </li>
          ))}
        </ul>
      </blockquote>
      <figcaption className="mt-6 flex items-center justify-center space-x-3 rtl:space-x-reverse">
        <div className="flex items-center divide-x-2 divide-gray-700 rtl:divide-x-reverse">
          <cite className="pe-3 font-medium text-white">{name}</cite>
          <cite className="ps-3 text-sm text-gray-400">{role}</cite>
        </div>
      </figcaption>
    </figure>
  );
}
