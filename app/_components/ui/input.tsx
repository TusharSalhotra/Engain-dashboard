import * as React from 'react';
import { cn } from '../../../lib/utils';

type InputProps = React.ComponentProps<'input'>;

function Input({ className, type = 'text', ...props }: InputProps) {
  return (
    <input
      type={type}
      className={cn(
        'w-full rounded-md border border-[var(--input)] bg-[var(--background)] px-3 py-2 text-sm text-[#111928] shadow-sm transition-colors placeholder:text-[var(--muted-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}

export { Input };
