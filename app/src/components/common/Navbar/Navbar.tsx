import { FC } from 'react'
import styled from 'styled-components'
import { NavLink as _navLink } from 'react-router-dom'

import { BiGridAlt } from 'react-icons/bi'
import { AiOutlineTeam } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'

import { APP_URLS } from 'utils/constants'

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
`

const NavLink = styled(_navLink)`
    font-size: 1.7rem;
    font-weight: 600;

    cursor: pointer;
    border-radius: 1.2rem;

    transition: all 0.2s linear;

    padding: 1rem 2rem;

    display: flex;

    user-select: none;

    span {
        margin-left: 1rem;
    }

    color: ${({ theme: { colors } }) => colors.gray[4]};

    &.active {
        background-color: ${({ theme: { colors } }) => colors.gray[3]};
        color: ${({ theme: { colors } }) => colors.black[2]};
    }

    &:hover {
        color: ${({ theme: { colors } }) => colors.black[2]};
        background-color: ${({ theme: { colors } }) => colors.gray[3]};
    }
`

const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

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
    }

    svg {
        color: ${({ theme: { colors } }) => colors.gray[5]};
    }
`

const Navbar: FC = () => {
    return (
        <NavbarWrapper>
            <div>
                <h1>arcx</h1>

                <MenuList>
                    <li>
                        <NavLink to={APP_URLS.HOME} exact>
                            <BiGridAlt size={25} />
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={APP_URLS.CUSTOMERS}>
                            <AiOutlineTeam size={25} />
                            <span>Customers</span>
                        </NavLink>
                    </li>
                </MenuList>
            </div>
            <Profile>
                <div />
                <h1>Albert Flores</h1>
                <BsThreeDots size={25} />
            </Profile>
        </NavbarWrapper>
    )
}

export default Navbar
