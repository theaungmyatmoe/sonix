import { ComponentPropsWithRef, forwardRef, PropsWithChildren } from "react";
import { useFieldId } from "./FieldContext";
import { StyledLabel } from "./StyledLabel";

export interface ILabelProps extends PropsWithChildren<ComponentPropsWithRef<"label">> {
}

export const Label = forwardRef<HTMLLabelElement, ILabelProps>(
  ({ children, ref, ...rest }) => {
    const id = useFieldId();
    return (
      <StyledLabel ref={ref} htmlFor={id} {...rest}>
        {children}
      </StyledLabel>
    );
  }
);


Label.displayName = "Field.Label";

