import "styled-components"
import { DefaultTheme } from "styled-components"
import { theme } from "."

declare module "styled-components" {
        type TypeTheme = typeof theme
        export interface DefaultTheme extends TypeTheme{}
    }
