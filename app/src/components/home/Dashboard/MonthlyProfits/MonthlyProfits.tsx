import { FC } from 'react'
import styled from 'styled-components'

const MonthlyProfitsWrapper = styled.div`
    ${({ theme: { mixins } }) => mixins.sectionShadow}

    grid-column: 2;
    grid-row: 5 / span 3;

    padding: 2.6rem;

    h1 {
        font-size: 2.2rem;
        font-weight: 600;
    }
`

const MonthlyProfits: FC = () => {
    return (
        <MonthlyProfitsWrapper>
            <h1>Monthly profits</h1>
        </MonthlyProfitsWrapper>
    )
}

export default MonthlyProfits
