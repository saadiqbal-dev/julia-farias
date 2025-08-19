/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center max-w-fit justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "px-[32px]! py-3 justify-center items-center gap-2 rounded-full border-[1.6px] border-[#F8F1E4] bg-[rgba(248,241,228,0.90)] [backdrop-filter:blur(2px)] text-secondary-light-4 font-sora text-center h-[50px]! text-[20px]! font-semibold hover:border-[#F8F1E4] hover:[background:linear-gradient(0deg,rgba(237,218,187,0.40),rgba(237,218,187,0.40)),rgba(248,241,228,0.90)] hover:[backdrop-filter:blur(2px)] active:[background:linear-gradient(0deg,rgba(237,218,187,0.88),rgba(237,218,187,0.88)),rgba(248,241,228,0.90)] transition-all duration-300 ease-in-out active:border-transparent active:[backdrop-filter:blur(2px)]",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "justify-center items-center gap-2 shrink-0 rounded-full border-[1.6px] border-secondary-dark-2 bg-primary-light-1-b text-secondary-dark-2 text-center font-sora text-base font-semibold leading-[130%] hover:bg-primary-dark-2 hover:text-primary-light-1-b active:text-primary-light-1-b active:[background:linear-gradient(0deg,rgba(248,241,228,0.12),rgba(248,241,228,0.12)),#7E482E]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9.5] py-2 px-6 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
