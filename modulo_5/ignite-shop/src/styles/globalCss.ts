import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-weight: 400;
    background-color: ${({ theme }) => theme.colors.gray900};
  }
`;