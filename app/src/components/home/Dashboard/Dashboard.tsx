import { FC } from 'react'
import styled from 'styled-components'

import MonthlyProfits from './MonthlyProfits'
import NewUsers from './NewUsers'
import OrdersToday from './OrdersToday'
import ReportOverview from './ReportOverview'
import TopItems from './TopItems'
import UserActivity from './UserActivity'

const DashboardWrapper = styled.div`
    margin-top: 2.5rem;
    overflow: auto;

    display: grid;
    gap: 2.5rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));

    width: 100%;
    height: calc(100% - 88px);

    @media (max-width: ${({ theme: { sizes } }) => sizes.lg}) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`

const Center = styled.div`
    grid-column: 1 / span 2;
    grid-row: 1 / span 3;

    gap: 2.5rem;

    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(12, minmax(0, 1fr));
    max-height: calc(100vh - 163px);

    @media (max-width: ${({ theme: { sizes } }) => sizes.lg}) {
        grid-column: 1 / span 3;
        grid-row: 1 / span 3;
    }
`

const Side = styled.div`
    grid-column: 3;
    grid-row: 1 / span 3;

    gap: 2.5rem;

    display: grid;
    grid-template-rows: repeat(12, minmax(0, 1fr));
    max-height: calc(100vh - 163px);

    @media (max-width: ${({ theme: { sizes } }) => sizes.lg}) {
        grid-column: 1 / span 3;
        grid-row: 4 / span 3;
    }
`

const Dashboard: FC = () => {
    return (
        <DashboardWrapper>
            <Center>
                <ReportOverview />
                <UserActivity />
                <NewUsers />
                <MonthlyProfits />
            </Center>
            <Side>
                <OrdersToday />
                <TopItems />
            </Side>
        </DashboardWrapper>
    )
}

export default Dashboard
