import { NavLink as _navLink } from 'react-router-dom'
import styled from 'styled-components'

import { BiGridAlt, BiBox } from 'react-icons/bi'
import { AiOutlineTeam } from 'react-icons/ai'
import { FiShoppingBag } from 'react-icons/fi'
import { FaRegCommentDots } from 'react-icons/fa'

import { APP_URLS } from 'utils/constants'

const List = styled.ul`
    list-style: none;

    margin-top: 4rem;

    li:not(:first-child) {
        margin-top: 1rem;
    }
`

const NavLink = styled(_navLink)`
    font-size: 1.7rem;
    font-weight: 600;

    cursor: pointer;
    border-radius: 1.7rem;

    transition: all 0.2s linear;

    padding: 1.3rem 1.5rem;

    display: flex;

    user-select: none;

    span {
        margin-left: 1.5rem;
        display: block;
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

    @media (max-width: ${({ theme: { sizes } }) => sizes.md}) {
        justify-content: center;

        span {
            display: none;
        }
    }
`

const items = [
    {
        icon: <BiGridAlt size={24} />,
        name: 'Home',
        link: APP_URLS.HOME
    },
    {
        icon: <FiShoppingBag size={24} />,
        name: 'Products',
        link: APP_URLS.PRODUCTS
    },
    {
        icon: <AiOutlineTeam size={24} />,
        name: 'Customers',
        link: APP_URLS.CUSTOMERS
    },
    {
        icon: <BiBox size={24} />,
        name: 'Orders',
        link: APP_URLS.ORDERS
    },
    {
        icon: <FaRegCommentDots size={24} />,
        name: 'Feedback',
        link: APP_URLS.FEEDBACK
    }
]

const NavItems = () => {
    return (
        <List>
            {items.map(({ icon, link, name }, index) => (
                <li key={name}>
                    <NavLink to={link} exact={index === 0}>
                        {icon}
                        <span>{name}</span>
                    </NavLink>
                </li>
            ))}
        </List>
    )
}

export default NavItems
