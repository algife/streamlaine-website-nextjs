import type React from 'react';

import cn from '@/utils/cn';

export default function FloatingBox({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn('box min-h-[5rem] min-w-[61.8] flex', className)}>
      {children}
    </div>
  );
}
