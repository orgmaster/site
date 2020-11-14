import { ResetStyle } from "../styles/Reset";
import { GlobalStyle } from "../styles/Global";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators  = [(Story) => (
  <>
    <ResetStyle />
    <GlobalStyle />
    <Story />
  </>
)]