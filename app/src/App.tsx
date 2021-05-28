import { ThemeProvider } from 'styled-components'

import { Layout } from 'components/common'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Layout>main content</Layout>
        </ThemeProvider>
    )
}

export default App
