import { FC } from 'react'
import styled from 'styled-components'

import { BsThreeDots } from 'react-icons/bs'

const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    background-color: ${({ theme: { colors } }) => colors.gray[2]};
    border: 0.1rem solid ${({ theme: { colors } }) => colors.gray[3]};
    border-radius: 1.7rem;

    padding: 1rem 2rem;

    white-space: nowrap;

    img {
        border-radius: 0.8rem;

        height: 3rem;
        width: 3rem;
    }

    h1 {
        font-size: 1.5rem;
        color: ${({ theme: { colors } }) => colors.black[2]};

        max-width: 100%;
        overflow: hidden;
        transition: max-width 0.2s linear;
    }

    svg {
        color: ${({ theme: { colors } }) => colors.gray[5]};
        max-width: 100%;
        overflow: hidden;
        transition: max-width 0.2s linear;
    }

    @media (max-width: ${({ theme: { sizes } }) => sizes.md}) {
        h1,
        svg {
            max-width: 0%;
            display: none;
        }
    }
`

const NavbarProfile: FC = () => {
    return (
        <ProfileWrapper>
            <img src="https://picsum.photos/200" alt="profile" />
            <h1>Albert Flores</h1>
            <BsThreeDots size={25} />
        </ProfileWrapper>
    )
}

export default NavbarProfile
