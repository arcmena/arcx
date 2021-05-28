import { FC } from 'react'
import styled from 'styled-components'

const NavbarWrapper = styled.nav`
    width: var(--navbar-width);
    padding: 4rem 2rem;
    background-color: ${({ theme: { colors } }) => colors.white};

    h1 {
        font-size: 2.7rem;
    }

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const MenuList = styled.ul`
    list-style: none;

    margin-top: 4rem;

    li {
        font-size: 1.7rem;
        font-weight: 600;
        color: ${({ theme: { colors } }) => colors.black[2]};

        cursor: pointer;
        border-radius: 1.2rem;

        transition: all 0.2s linear;

        padding: 1rem 2rem;

        &:hover {
            background-color: ${({ theme: { colors } }) => colors.gray[3]};
        }
    }
`

const Profile = styled.div`
    display: flex;
    align-items: center;

    cursor: pointer;

    background-color: ${({ theme: { colors } }) => colors.gray[2]};

    border-radius: 1.2rem;
    padding: 1rem 2rem;

    > div {
        background-color: ${({ theme: { colors } }) => colors.black[2]};

        border-radius: 0.8rem;

        height: 3rem;
        width: 3rem;
    }

    h1 {
        font-size: 1.5rem;
        color: ${({ theme: { colors } }) => colors.black[2]};

        padding-left: 0.9rem;
    }
`

const Navbar: FC = () => {
    return (
        <NavbarWrapper>
            <div>
                <h1>arcx</h1>

                <MenuList>
                    <li>Home</li>
                    <li>Curstomers</li>
                </MenuList>
            </div>
            <Profile>
                <div />
                <h1>Albert Flores</h1>
            </Profile>
        </NavbarWrapper>
    )
}

export default Navbar
