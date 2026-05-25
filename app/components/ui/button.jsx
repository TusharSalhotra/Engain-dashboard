import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '../../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        solid: 'button',
        light: 'button button-light',
        ghost:
          'border border-transparent bg-transparent text-[var(--foreground)] shadow-none hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]',
        unstyled: '',
      },
      size: {
        default: 'min-h-10 px-4 py-2 text-[15px]',
        sm: 'min-h-9 px-3 text-sm',
        lg: 'min-h-11 px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'solid',
      size: 'default',
    },
  },
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}

export { Button, buttonVariants };
