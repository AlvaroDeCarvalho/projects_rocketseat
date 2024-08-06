import { ThemeProvider } from 'styled-components'
import { ButtonVariant } from './components/Button'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './global'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <GlobalStyles />

        <h1>Hello World</h1>
        <ButtonVariant variant="success" />
      </div>
    </ThemeProvider>
  )
}
