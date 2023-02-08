import tw from "tailwind-styled-components";

export const StyledInput = tw.input<any>`
      mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
  
  ${({ disabled }) =>
    disabled &&
    "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"}
`;
