import * as React from 'react';
import { cn } from '@/src/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, error, id, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A99A81]"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          type={type}
          ref={ref}
          className={cn(
            'w-full bg-[#20201e] text-[#E8DDC7] placeholder:text-[#998f81]/60 text-[13px] px-3.5 py-2.5 rounded-none border border-[#A99A81]/25 focus:border-[#B99A63] focus:outline-none transition-colors duration-200',
            error && 'border-[#ffb4ab]',
            className
          )}
          {...props}
        />
        {error && <span className="text-[11px] text-[#ffb4ab] mt-0.5">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
