import tw from "tailwind-styled-components";
import { IInputProps } from "./Input";

export const StyledInput = tw.input<IInputProps>`
  appearance-none
  block
  w-full
  bg-white
  text-zinc-700    
  border
  border-zinc-300
  rounded-md
  py-3
  px-4
  mb-3
  leading-tight
  focus:outline-none
  focus:bg-white
  focus:border-zinc-500
  
  ${({ disabled }) => disabled && "bg-zinc-100 text-zinc-500 border-zinc-200"}
`;
