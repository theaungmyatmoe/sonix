import { nanoid } from "nanoid";
import { FC, PropsWithChildren, ReactNode } from "react";
import { FieldContext } from "./FieldContext";
import { Input } from "./Input";
import { Label } from "./Label";

interface IFieldComposition {
  Label: typeof Label;
  Input: typeof Input;
}

export const Field: FC<PropsWithChildren> & IFieldComposition = ({
                                                                   children
                                                                 }) => {
  const id = nanoid();
  return (
    <FieldContext.Provider value={{ id }}>{children}</FieldContext.Provider>
  );
};

Field.Label = Label;
Field.Input = Input;
