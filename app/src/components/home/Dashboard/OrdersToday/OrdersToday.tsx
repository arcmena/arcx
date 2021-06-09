import { FC } from 'react'
import styled from 'styled-components'

const OrdersTodayWrapper = styled.div`
    grid-row: 1 / span 3;

    ${({ theme: { mixins } }) => mixins.sectionShadow}

    padding: 2.6rem;

    h1 {
        font-size: 2.2rem;
        font-weight: 600;
    }
`

const OrdersToday: FC = () => {
    return (
        <OrdersTodayWrapper>
            <h1>Orders today</h1>
        </OrdersTodayWrapper>
    )
}

export default OrdersToday
