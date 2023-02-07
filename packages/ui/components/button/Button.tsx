import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from "react";
import tw from "tailwind-styled-components";

interface IButtonProps
  extends PropsWithChildren<ComponentPropsWithoutRef<"button">> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  className?: string;
  disabled?: boolean;
}

const StyledButton = tw.button<IButtonProps>`
inline-flex items-center justify-center font-medium rounded-md focus:outline-none 
focus:ring-2 focus:ring-offset-2 focus:ring-zinc-400

${({ variant }) =>
  variant === "primary"
    ? "bg-zinc-800 text-white"
    : "bg-zinc-300 text-zinc-800"}

${({ size }) => {
  switch (size) {
    case "small":
      return "px-3 py-1 text-sm";
    case "medium":
      return "px-4 py-2 text-base";
    case "large":
      return "px-6 py-3 text-lg";
  }
}}

$({ disabled }) => (disabled ? "opacity-50 cursor-not-allowed" : "")}
${({ className }) => className}
`;

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ children, variant, size, className, disabled, ...props }, ref) => {
    return (
      <StyledButton
        ref={ref}
        variant={variant}
        size={size}
        className={className}
        disabled={disabled}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
);

Button.defaultProps = {
  variant: "primary",
  size: "medium",
};

Button.displayName = "Button";
