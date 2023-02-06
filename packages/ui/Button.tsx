import { ComponentPropsWithoutRef, forwardRef, ReactNode } from "react";

export const Button = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<"button">
>(({ children, ...props }, ref) => {
  return (
    <button type="button" ref={ref} {...props}>
      {children}
    </button>
  );
});

Button.displayName = "Button";
