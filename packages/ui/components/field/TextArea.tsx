import { ComponentPropsWithRef, forwardRef, PropsWithChildren } from "react";
import { useFieldId } from "./FieldContext";
import { StyledTextArea } from "./StyledTextArea";

export interface ITextAreaProps extends PropsWithChildren<ComponentPropsWithRef<"textarea">> {
  disabled?: boolean;
  isResizable?: boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  ({ children, disabled, isResizable, ...rest }, ref) => {
    const id = useFieldId();
    return (
      <StyledTextArea
        $as="textarea"
        isResizable={isResizable}
        ref={ref}
        id={id}
        disabled={disabled}
        {...rest}
      />
    );
  }
);

TextArea.displayName = " Field.TextArea";