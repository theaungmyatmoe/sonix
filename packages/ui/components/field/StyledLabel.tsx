import tw from "tailwind-styled-components";
import { ILabelProps } from "./Label";

export const StyledLabel = tw.label<ILabelProps>`
  block
  text-gray-700
  text-sm
  font-bold
  mb-3
`;
