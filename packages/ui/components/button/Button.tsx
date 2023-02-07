import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from "react";
import { StyledButton } from "./StyledButton";
import PropTypes from "prop-types";

export interface IButtonProps
  extends PropsWithChildren<ComponentPropsWithoutRef<"button">> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  className?: string;
  disabled?: boolean;
  block?: "true" | "false";
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ children, variant, size, className, block, disabled, ...props }, ref) => {
    return (
      <StyledButton
        ref={ref}
        variant={variant}
        size={size}
        className={className}
        disabled={disabled}
        block={block}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
);

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  block: PropTypes.oneOf(["true", "false"]),
};

Button.defaultProps = {
  variant: "primary",
  size: "medium",
  disabled: false,
  block: "false",
};

Button.displayName = "Button";
