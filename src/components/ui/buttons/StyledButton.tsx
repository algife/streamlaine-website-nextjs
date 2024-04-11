/* eslint-disable react/button-has-type */
import React, { type ButtonHTMLAttributes } from 'react';

import cn from '@/utils/cn';

import { HighlightedBorderButton } from './HighlightedBorderButton';

export default function StyledButton({
  type = 'submit',
  variant,
  color = 'primary',
  text,
  className,
  onClick,
  children,
}: {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  variant: 'filled' | 'outlined' | 'highlight';
  color?: 'primary' | 'accent';
  text?: string;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode | React.ReactNode[];
}) {
  const content = text ?? children;

  const sharedClasses = cn(
    'uppercase text-base font-medium font-sans text-center tracking-wider text-white items-center justify-center',
    'm-0 py-2.5',
    className,
  );

  switch (variant) {
    case 'highlight':
      return (
        <HighlightedBorderButton
          onClick={onClick}
          {...{ color }}
          className={cn(sharedClasses, 'p-0.5')}
        >
          {content}
        </HighlightedBorderButton>
      );
    case 'filled':
      return (
        <button
          type={type}
          onClick={onClick}
          className={cn(
            'rounded-lg hover:bg-gradient-to-bl focus:outline-none focus:ring-1 bg-gradient-to-br',
            sharedClasses,
            'px-2',
            color === 'accent'
              ? 'from-pink-500 to-orange-400 focus:ring-pink-800'
              : 'from-purple-600 to-sky-500 focus:ring-sky-800',
          )}
        >
          {content}
        </button>
      );
    case 'outlined':
      return (
        <button
          type={type}
          onClick={onClick}
          className={cn(
            sharedClasses,
            'inline-flex p-0.5 rounded-lg',
            'bg-gradient-to-br',
            'text-gray-900 hover:text-white',
            color === 'accent'
              ? 'from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 text-slate-100 focus:ring-pink-800'
              : 'from-purple-500 to-sky-400 group-hover:from-purple-500 group-hover:to-sky-400 text-slate-100 focus:ring-purple-800',
          )}
        >
          <span className="relative rounded-md bg-gray-900 px-5 py-2.5 text-base transition-all duration-75 ease-in group-hover:bg-opacity-0">
            {content}
          </span>
        </button>
      );

    default:
      throw new Error('Invalid Styled Button Variant');
  }
}
