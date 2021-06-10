import { FC } from 'react'
import styled from 'styled-components'

import { NavbarProfile } from 'components/profile'

import NavItems from './NavItems'

const NavbarWrapper = styled.div`
    width: var(--navbar-width);
    padding: 4rem 2rem;
    background-color: ${({ theme: { colors } }) => colors.white};

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: ${({ theme: { sizes } }) => sizes.md}) {
        width: var(--navbar-width-mobile);
        padding: 2rem 1.3rem;
    }
`

const Nav = styled.nav``

const Logo = styled.h1`
    font-size: 2.7rem;
`

const Navbar: FC = () => {
    return (
        <NavbarWrapper>
            <Nav>
                <Logo>arcx</Logo>

                <NavItems />
            </Nav>
            <NavbarProfile />
        </NavbarWrapper>
    )
}

export default Navbar
