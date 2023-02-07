import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface IButtonProps
  extends PropsWithChildren<ComponentPropsWithoutRef<"button">> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  className?: string;
  disabled?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ children, variant, size, className, disabled, ...props }, ref) => {
    return (
      <button
        type="button"
        ref={ref}
        className={twMerge(
          "px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-200 focus:ring-white",
          variant === "primary" && "bg-zinc-800 text-white",
          variant === "secondary" && "bg-zinc-100 text-zinc-800",
          size === "small" && "text-sm",
          size === "medium" && "text-base",
          size === "large" && "text-lg",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.defaultProps = {
  variant: "primary",
  size: "medium",
};

Button.displayName = "Button";
