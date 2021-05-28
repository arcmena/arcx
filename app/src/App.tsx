import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div>arcx</div>
        </ThemeProvider>
    )
}

export default App
