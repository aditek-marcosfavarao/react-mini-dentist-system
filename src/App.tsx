import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './common/styles/global'
import { defaultTheme } from './common/styles/theme/default'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <h1>App</h1>

        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}
