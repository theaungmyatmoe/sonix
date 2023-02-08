import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from "react";
import { StyledButton } from "./StyledButton";
import PropTypes from "prop-types";

export interface IButtonProps
  extends PropsWithChildren<ComponentPropsWithoutRef<"button">> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  block?: "true" | "false";
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ children, variant, size, block, disabled, ...rest }, ref) => {
    return (
      <StyledButton
        ref={ref}
        variant={variant}
        size={size}
        disabled={disabled}
        block={block}
        {...rest}
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
  block: PropTypes.oneOf(["true", "false"])
};

Button.defaultProps = {
  variant: "primary",
  size: "medium",
  disabled: false,
  block: "false"
};

Button.displayName = "Button";
