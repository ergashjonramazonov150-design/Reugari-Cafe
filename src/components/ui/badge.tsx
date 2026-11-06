import * as React from 'react';
import { cn } from '@/src/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'gold' | 'default' | 'success' | 'warning' | 'danger';
}

export function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] rounded-none border',
        variant === 'gold' && 'bg-[#B99A63]/15 text-[#e4c287] border-[#B99A63]/40',
        variant === 'default' && 'bg-[#20201e] text-[#cbc6be] border-[#4d463a]/40',
        variant === 'success' && 'bg-[#e4c287]/15 text-[#e4c287] border-[#e4c287]/30',
        variant === 'warning' && 'bg-[#b99a63]/20 text-[#ffdea7] border-[#b99a63]/50',
        variant === 'danger' && 'bg-[#93000a]/20 text-[#ffb4ab] border-[#93000a]/40',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
