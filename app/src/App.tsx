import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Layout } from 'components/common'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'

import { HomeView } from 'components/home'
import { CustomersView } from 'components/customers'

import { APP_URLS } from 'utils/constants'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <BrowserRouter>
                <Switch>
                    <Layout>
                        <Route
                            exact
                            path={APP_URLS.HOME}
                            component={HomeView}
                        />
                        <Route
                            path={APP_URLS.CUSTOMERS}
                            component={CustomersView}
                        />
                    </Layout>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
