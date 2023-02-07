import tw from "tailwind-styled-components";
import { IButtonProps } from "./Button";

export const StyledButton = tw.button<IButtonProps>`
${(props) => (props.block === "true" ? "w-full block" : "inline-flex")} 
items-center justify-center font-medium rounded-md focus:outline-none 
focus:ring-2 focus:ring-offset-2 focus:ring-zinc-400

${({ variant }) =>
  variant === "primary"
    ? "bg-zinc-800 text-white hover:bg-zinc-700"
    : "bg-zinc-300 text-zinc-800 hover:bg-zinc-200"}

${({ size }) => {
  switch (size) {
    case "small":
      return "px-3 py-1 text-sm";
    case "medium":
      return "px-4 py-2 text-base";
    case "large":
      return "px-6 py-3 text-lg";
  }
}}
${({ disabled }) => disabled && "opacity-50 cursor-not-allowed"}
${({ className }) => className}
`;
