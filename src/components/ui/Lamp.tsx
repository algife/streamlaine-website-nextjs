/* eslint-disable tailwindcss/no-custom-classname */

'use client';

import { motion } from 'framer-motion';
import React from 'react';

import type { LightDirection } from '@/types/global';
import cn from '@/utils/cn';

import FadeIn from './animations/FadeIn';

const LampBarLight = ({
  classContainer,
  lightDirection = 'down',
}: {
  classContainer?: string;
  lightDirection: LightDirection;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
      }}
      className={`absolute isolate z-0 flex w-full flex-1 scale-y-125 items-center justify-center ${classContainer} ${lightDirection === 'up' ? 'bottom-52 rotate-180' : 'top-56'}`}
    >
      <motion.div
        initial={{ opacity: 0.5, width: '15rem' }}
        whileInView={{ opacity: 1, width: '30rem' }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        style={{
          backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }}
        className={
          'bg-gradient-conic absolute inset-auto right-1/2 h-56 w-[30rem] overflow-visible' +
          ` from-sky-500 ` +
          'via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]'
        }
      >
        <div className="absolute bottom-0 left-0 h-40 w-full bg-slate-950 [mask-image:linear-gradient(to_top,white,transparent)]" />
        <div className="absolute bottom-0 left-0 h-full  w-40 bg-slate-950 [mask-image:linear-gradient(to_right,white,transparent)]" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0.5, width: '15rem' }}
        whileInView={{ opacity: 1, width: '30rem' }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className={
          'bg-gradient-conic absolute inset-auto left-1/2 h-56 w-[30rem] from-transparent via-transparent' +
          ` to-sky-500 ` +
          'text-white [--conic-position:from_290deg_at_center_top]'
        }
        style={{
          backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }}
      >
        <div className="absolute  bottom-0 right-0 h-full  w-40 bg-slate-950 [mask-image:linear-gradient(to_left,white,transparent)]" />
        <div className="absolute  bottom-0 right-0 h-40 w-full bg-slate-950 [mask-image:linear-gradient(to_top,white,transparent)]" />
      </motion.div>
      <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl" />
      <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
      <div
        className={
          'absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full' +
          ` bg-sky-500 ` +
          'opacity-50 blur-3xl'
        }
      />
      <motion.div
        initial={{ width: '8rem' }}
        whileInView={{ width: '16rem' }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className={
          'absolute inset-auto z-30 h-36 w-64 -translate-y-24 rounded-full' +
          ` bg-sky-200 ` +
          'blur-2xl'
        }
      />
      <motion.div
        initial={{ width: '15rem' }}
        whileInView={{ width: '30rem' }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className={
          'absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-28' +
          ` bg-sky-200 `
        }
      />

      <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 " />
    </motion.div>
  );
};

const LampContainer = ({
  className,
  lightDirection,
  children,
}: {
  className?: string;
  lightDirection: LightDirection;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'm-0 p-0',
        'relative flex flex-col size-full items-center justify-center overflow-hidden',
        'bg-slate-950 z-0',
        className,
      )}
    >
      {lightDirection === 'down' && <LampBarLight lightDirection="down" />}

      {/* HEADLINE */}
      <div className="relative mb-20 mt-56 flex flex-col items-center">
        {children}
      </div>

      {lightDirection === 'up' && <LampBarLight lightDirection="up" />}
    </div>
  );
};

export function LampSection({
  lightDirection = 'up',
  cta,
  overline,
  heading,
  subHeading,
  children,
}: {
  lightDirection?: LightDirection;
  cta: React.ReactNode | React.ReactNode[];
  overline?: React.ReactNode;
  heading: React.ReactNode;
  subHeading: React.ReactNode[];
  children?: React.ReactNode;
}) {
  const transition = {
    duration: 0.8,
    ease: 'easeInOut',
  };

  const slideInAnimationProps = {
    initial: { transform: 'translateY(0.618em)' },
    animate: { transform: 'translateY(0)' },
  };

  const layoutElements = {
    overline: null,
    // <FadeIn>
    //   <motion.p
    //     // {...motionProps}
    //     initial={{ transform: 'translateY(0)' }}
    //     animate={{ transform: 'translateY(0)' }}
    //     transition={{...transition,delay: 0}}
    //     className={cn(
    //       'flex flex-col w-full justify-center space-x-0 space-y-4 text-xs uppercase',
    //       'sm:text-base md:flex-row md:space-x-4 md:space-y-0',
    //       'text-neutral-300',
    //     )}
    //   >
    //     {overline}
    //   </motion.p>
    // </FadeIn>
    heading: (
      <FadeIn delay={0.3} duration={1.2}>
        <motion.h1
          {...slideInAnimationProps}
          {...{ transition }}
          className={cn(
            `relative flex flex-row justify-center bg-gradient-to-b`,
            lightDirection === 'up'
              ? 'from-sky-800 to-neutral-900'
              : 'from-sky-200 to-neutral-100',
            `bg-clip-text text-center font-sans text-6xl font-bold text-transparent sm:text-4xl`,
          )}
        >
          {heading}
        </motion.h1>
      </FadeIn>
    ),
    subHeading: (
      <h2
        className={cn(
          'flex-wrap max-w-3xl text-4xl',
          'flex flex-row justify-center text-center align-baseline font-sans',
          'flex flex-col',
        )}
      >
        {subHeading.map((line, idx) => (
          <FadeIn key={+idx} delay={1 * (idx + 0.8) + 0.6} duration={0.8}>
            <motion.div
              {...slideInAnimationProps}
              {...{ transition }}
              className={cn(
                `relative flex flex-row justify-center bg-gradient-to-b`,
                `${
                  lightDirection === 'up'
                    ? 'from-sky-800 to-neutral-950'
                    : 'from-sky-200 to-neutral-400'
                }`,
                `bg-clip-text text-center font-sans text-6xl font-bold text-transparent sm:text-4xl`,
              )}
            >
              {line}
            </motion.div>
          </FadeIn>
        ))}
      </h2>
    ),
    cta: (
      <FadeIn delay={4.5} duration={0.8}>
        <motion.div
          {...slideInAnimationProps}
          {...{ transition }}
          className="mt-10"
        >
          {cta}
        </motion.div>
      </FadeIn>
    ),
    children: (
      <FadeIn delay={5.5} duration={0.8}>
        <motion.div
          {...slideInAnimationProps}
          {...{ transition }}
          className={cn(
            'relative flex flex-row justify-center bg-gradient-to-b mt-20 mb-10',
            lightDirection === 'up'
              ? 'from-sky-800 to-neutral-100'
              : 'from-sky-200 to-neutral-800',
            'bg-clip-text text-center font-sans text-3xl font-medium text-transparent sm:text-2xl',
          )}
        >
          {children}
        </motion.div>
      </FadeIn>
    ),
  };

  return (
    <LampContainer {...{ lightDirection }}>
      {Object.keys(layoutElements).map((k, i) => (
        <div key={`lamp_item_${+i}`}>
          {(layoutElements as { [key: string]: React.ReactNode })[k]!}
        </div>
      ))}
    </LampContainer>
  );
}
