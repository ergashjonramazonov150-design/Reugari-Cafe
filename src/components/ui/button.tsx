import * as React from 'react';
import { cn } from '@/src/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium uppercase transition-colors duration-200 cursor-pointer disabled:pointer-events-none disabled:opacity-40 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B99A63]',
          // Strict 0-radius geometry as specified by REUGARI design system
          'rounded-none',
          // Variants
          variant === 'primary' &&
            'bg-[#B99A63] text-[#171715] hover:bg-[#C7AC7B] font-semibold tracking-[0.18em]',
          variant === 'secondary' &&
            'bg-[#20201e] text-[#E8DDC7] border border-[#B99A63]/40 hover:border-[#B99A63] hover:bg-[#B99A63]/10 tracking-[0.16em]',
          variant === 'outline' &&
            'bg-transparent text-[#E8DDC7] border border-[#A99A81]/30 hover:border-[#B99A63] hover:text-[#B99A63] tracking-[0.16em]',
          variant === 'ghost' &&
            'bg-transparent text-[#A99A81] hover:text-[#E8DDC7] hover:bg-[#20201e] tracking-[0.14em]',
          variant === 'danger' &&
            'bg-[#93000a]/20 text-[#ffb4ab] border border-[#93000a]/40 hover:bg-[#93000a]/30 tracking-[0.16em]',
          // Sizes
          size === 'sm' && 'text-[10px] py-1.5 px-3 tracking-[0.2em]',
          size === 'md' && 'text-[11px] py-2 px-5 tracking-[0.18em]',
          size === 'lg' && 'text-[13px] py-3.5 px-8 tracking-[0.2em]',
          size === 'icon' && 'h-9 w-9 p-0',
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
