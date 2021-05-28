import { FC } from 'react'
import styled from 'styled-components'

import Navbar from '../Navbar'

const Wrapper = styled.div`
    display: flex;
    ${({ theme: { mixins } }) => mixins.fillContainer};
`

const Main = styled.main`
    display: flex;
    width: calc(100% - var(--navbar-width));
`

const Layout: FC = ({ children }) => {
    return (
        <Wrapper>
            <Navbar />

            <Main>{children}</Main>
        </Wrapper>
    )
}

export default Layout
