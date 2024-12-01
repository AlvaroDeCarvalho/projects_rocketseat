'use client'

import { theme } from "."
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./globalCss";

export const ThemeProviderStyles = ({ children }: { children: any }) => {
    return (
        <ThemeProvider theme={theme}>
            <>
            <GlobalStyle />
            {children}
            </>
        </ThemeProvider>
    );
};