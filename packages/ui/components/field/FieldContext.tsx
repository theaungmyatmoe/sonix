import { createContext, useContext, ReactNode } from "react";
import { customAlphabet } from "nanoid/non-secure";

export const nanoid = customAlphabet("1234567890abcdef", 10);

export interface FieldContextValue {
  id: string;
}

export const FieldContext = createContext<FieldContextValue | null>(null);

export const useFieldContext = () => {
  const context = useContext(FieldContext);
  if (!context) {
    throw new Error("FieldContext is not set");
  }
  return context;
};

export const useFieldId = () => {
  const { id } = useFieldContext();
  return id;
};
