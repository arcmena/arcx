import { FC } from 'react'
import styled from 'styled-components'

import Navbar from '../Navbar'

const Wrapper = styled.div`
    ${({ theme: { mixins } }) => mixins.fillContainer};
    display: flex;
`

const Main = styled.main`
    width: calc(100% - var(--navbar-width));
    display: flex;
    padding: 4rem;
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
