import { createGlobalStyle } from "styled-components";

export const colors = {
    white: '#fff',
    gray100: '#e1e1e6',
    gray300: '#c4c4cc',
    gray400: '#8d8d99',
    gray600: '#323238',
    gray700: '#29292e',
    gray800: '#202024',
    gray900: '#121214',
    green500: '#00875f'
}

export const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body{
    background-color: ${colors.gray900};
    color: ${colors.gray300};
    --webkit-font-smoothing: antialiased;
    font-weight: 400;
    font-size: 1rem;
  }
`;  