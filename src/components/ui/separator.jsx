import React from 'react';
import { cn } from './cn';

function Separator({ className, orientation = 'horizontal', decorative = true, ...props }) {
  const isHorizontal = orientation === 'horizontal';
  return (
    <div
      role={decorative ? 'none' : 'separator'}
      aria-orientation={isHorizontal ? 'horizontal' : 'vertical'}
      className={cn(
        'bg-[#233554]',
        isHorizontal ? 'h-px w-full' : 'w-px h-full',
        className
      )}
      {...props}
    />
  );
}

export { Separator };
