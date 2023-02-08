import { ComponentPropsWithRef, forwardRef, PropsWithChildren } from "react";
import { useFieldId } from "./FieldContext";
import { StyledInput } from "./StyledInput";

export interface IInputProps
  extends PropsWithChildren<ComponentPropsWithRef<"input">> {
  disabled?: boolean;
}

export const Input = forwardRef<HTMLLabelElement, IInputProps>(
  ({ children, disabled, ...rest }, ref) => {
    const id = useFieldId();
    return (
      <StyledInput
        $as="input"
        ref={ref}
        id={id}
        disabled={disabled}
        {...rest}
      />
    );
  }
);

Input.displayName = "Field.Input";
