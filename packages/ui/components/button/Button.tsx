import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from "react";
import { StyledButton } from "./StyledButton";

export interface IButtonProps
  extends PropsWithChildren<ComponentPropsWithoutRef<"button">> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  className?: string;
  disabled?: boolean;
  block?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      children,
      variant,
      size,
      className,
      block: fullWidth = false,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <StyledButton
        ref={ref}
        variant={variant}
        size={size}
        className={className}
        disabled={disabled}
        block={fullWidth}
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
  block: false,
};

Button.displayName = "Button";
