'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import cn from '@/utils/cn';

import underlineSvg from '../../assets/svg/underline.svg';

// export const HeroHighlightSection = ({
//   children,
//   className,
//   showGradient = true,
//   containerClassName,
// }: {
//   children: React.ReactNode;
//   className?: string;
//   showGradient?: boolean;
//   containerClassName?: string;
// }) => {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   function handleMouseMove({
//     currentTarget,
//     clientX,
//     clientY,
//   }: React.MouseEvent<HTMLDivElement>) {
//     if (!currentTarget) return;
//     const { left, top } = currentTarget.getBoundingClientRect();

//     mouseX.set(clientX - left);
//     mouseY.set(clientY - top);
//   }
//   return (
//     <div
//       className={cn(
//         'relative h-[40rem] flex items-center justify-center w-full group',
//         containerClassName,
//       )}
//       onMouseMove={handleMouseMove}
//     >
//       <div className="pointer-events-none absolute inset-0 bg-dot-thick-neutral-800" />
//       <motion.div
//         className="pointer-events-none absolute inset-0   opacity-0 transition duration-300 group-hover:opacity-100 bg-dot-thick-sky-500"
//         style={{
//           WebkitMaskImage: useMotionTemplate`
//             radial-gradient(
//               200px circle at ${mouseX}px ${mouseY}px,
//               black 0%,
//               transparent 100%
//             )
//           `,
//           maskImage: useMotionTemplate`
//             radial-gradient(
//               200px circle at ${mouseX}px ${mouseY}px,
//               black 0%,
//               transparent 100%
//             )
//           `,
//         }}
//       />
//       {showGradient && (
//         <div className="pointer-events-none absolute inset-0 size-full [mask-image:radial-gradient(ellipse_at_center,transparent,white)] bg-black" />
//       )}
//       <div className={cn('relative z-20', className)}>{children}</div>
//     </div>
//   );
// };

const style = {
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left center',
  display: 'inline',
};
const AnimatedSpan = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => (
  <motion.span
    initial={{
      backgroundSize: '0% 100%',
    }}
    animate={{
      backgroundSize: '100% 100%',
    }}
    transition={{
      duration: 2,
      ease: 'linear',
      delay: 2.7,
    }}
    {...{ className, style }}
  >
    {children}
  </motion.span>
);

export const WordHighlight = ({
  text,
  className,
  animated = false,
  marker = false,
  underline = false,
}: {
  text: React.ReactNode;
  className?: string;
  animated?: boolean;
  marker?: boolean;
  underline?: boolean;
}) => {
  const classes = cn(
    `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-br from-sky-500 to-purple-500 mx-2`,
    marker ? 'text-white' : 'text-transparent bg-clip-text',
    // underline
    //   ? 'underline underline-offset-3 decoration-8 decoration-sky-600'
    //   : '',
    className,
  );

  const underlineElement = underline && (
    <Image src={underlineSvg} alt="underline symbol" width="333" />
  );

  return animated ? (
    <AnimatedSpan className={classes}>
      {text}
      {underlineElement}
    </AnimatedSpan>
  ) : (
    <span className={classes}>
      {text}
      {underlineElement}
    </span>
  );
};
