import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

import { GlobalStyles } from './global'

import { ButtonVariant } from './components/Button'

import { BrowserRouter } from 'react-router-dom'
import { RouterContainer } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <GlobalStyles />
        <BrowserRouter>
          <RouterContainer />
        </BrowserRouter>
        <ButtonVariant variant="success" />
      </div>
    </ThemeProvider>
  )
}
