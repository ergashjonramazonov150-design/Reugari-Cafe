import * as React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function Dialog({
  isOpen,
  onClose,
  title,
  description,
  children,
  className,
}: DialogProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0e0e0c]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Surface */}
      <div
        className={cn(
          'relative z-10 w-full max-w-lg bg-[#24221D] border border-[#B99A63]/30 p-6 md:p-8 shadow-2xl text-[#E8DDC7] rounded-none animate-in fade-in-0 zoom-in-95 duration-200',
          className
        )}
      >
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 text-[#A99A81] hover:text-[#B99A63] transition-colors p-1"
          aria-label="Yopish"
        >
          <X className="w-5 h-5" />
        </button>

        {title && (
          <div className="mb-4 pr-6">
            <h3 className="font-serif text-2xl text-[#E8DDC7] tracking-normal font-normal">
              {title}
            </h3>
            {description && (
              <p className="text-xs text-[#A99A81] mt-1 leading-relaxed">{description}</p>
            )}
          </div>
        )}

        <div>{children}</div>
      </div>
    </div>
  );
}
