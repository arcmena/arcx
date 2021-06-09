import { FC } from 'react'
import styled from 'styled-components'

const TopItemsWrapper = styled.div`
    ${({ theme: { mixins } }) => mixins.sectionShadow}

    grid-row: 4;

    padding: 2.6rem;

    h1 {
        font-size: 2.2rem;
        font-weight: 600;
    }
`

const TopItems: FC = () => {
    return (
        <TopItemsWrapper>
            <h1>Top items</h1>
        </TopItemsWrapper>
    )
}

export default TopItems
