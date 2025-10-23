import React from 'react';
import { cn } from './cn';

function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        'rounded-xl border border-[#1f2b45] bg-[#0b1a2a]/60 backdrop-blur-sm text-foreground shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function CardContent({ className, children, ...props }) {
  return (
    <div className={cn('p-6', className)} {...props}>
      {children}
    </div>
  );
}

export { Card, CardContent };
