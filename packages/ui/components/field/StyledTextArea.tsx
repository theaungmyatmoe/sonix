import { StyledInput } from "./StyledInput";
import tw from "tailwind-styled-components";
import { ITextAreaProps } from "./TextArea";

export const StyledTextArea = tw(StyledInput)<ITextAreaProps>`
${({ isResizable }) => (isResizable ? "resize" : "resize-none")}
 `;
