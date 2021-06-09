import { FC } from 'react'
import styled from 'styled-components'

const UserActivityWrapper = styled.div`
    ${({ theme: { mixins } }) => mixins.sectionShadow};

    grid-column: 1 / span 2;
    grid-row: 3 / span 5;

    padding: 2.6rem;

    h1 {
        font-size: 2.2rem;
        font-weight: 600;
    }
`

const UserActivity: FC = () => {
    return (
        <UserActivityWrapper>
            <h1>Users in the last 6 hours</h1>
        </UserActivityWrapper>
    )
}

export default UserActivity
