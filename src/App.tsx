import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { Router as Routes } from './routes/Router'

import { GlobalStyle } from './common/styles/global'
import { defaultTheme } from './common/styles/theme/default'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>

        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}
