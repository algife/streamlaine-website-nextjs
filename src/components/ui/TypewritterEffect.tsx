'use client';

import { motion } from 'framer-motion';

import useTypewriter from '@/hooks/useTypewriter';
import cn from '@/utils/cn';

const TypewriterCursor = () => (
  <motion.span
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 0.8,
      repeat: Infinity,
      repeatType: 'reverse',
    }}
    className={cn(
      'inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-sky-500',
    )}
  />
);

export const TypewriterEffectCarrousel = ({
  typewritenSentences,
  className,
}: {
  typewritenSentences: string[];
  className: string;
}) => {
  const textContent = useTypewriter(1500, 1000, typewritenSentences);

  return (
    <div className="flex flex-row">
      <span
        className={cn('text-center font-medium text-transparent', className)}
      >
        {textContent}
      </span>
      <TypewriterCursor />
    </div>
  );
};
