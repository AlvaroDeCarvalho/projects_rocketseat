import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

import { GlobalStyles } from './global'

import { BrowserRouter } from 'react-router-dom'
import { RouterContainer } from './Router'
import { CyclesContextProvider } from './contexts/CyclesContext'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <BrowserRouter>
          <CyclesContextProvider>
            <RouterContainer />
          </CyclesContextProvider>
        </BrowserRouter>
        <GlobalStyles />
      </div>
    </ThemeProvider>
  )
}
