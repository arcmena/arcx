import { FC } from 'react'
import styled from 'styled-components'

const NewUsersWrapper = styled.div`
    ${({ theme: { mixins } }) => mixins.sectionShadow}

    grid-column: 1;
    grid-row: 5 / span 3;

    padding: 2.6rem;

    h1 {
        font-size: 2.2rem;
        font-weight: 600;
    }
`

const NewUsers: FC = () => {
    return (
        <NewUsersWrapper>
            <h1>New users</h1>
        </NewUsersWrapper>
    )
}

export default NewUsers
