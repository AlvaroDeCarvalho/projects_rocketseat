import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

import { GlobalStyles } from './global'

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
      </div>
    </ThemeProvider>
  )
}
