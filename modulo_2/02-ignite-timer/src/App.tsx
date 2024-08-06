import { ThemeProvider } from 'styled-components'
import { ButtonVariant } from './components/Button'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <h1>Hello World</h1>
        <ButtonVariant variant="success" />
      </div>
    </ThemeProvider>
  )
}
