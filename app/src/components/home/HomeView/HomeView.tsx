import { FC } from 'react'
import styled from 'styled-components'

import { Header } from 'components/common'

import { Dashboard } from '../Dashboard'

const HomeWrapper = styled.div`
    ${({ theme: { mixins } }) => mixins.fillContainer}
`

const Home: FC = () => {
    return (
        <HomeWrapper>
            <Header title="Dashboard" />
            <Dashboard />
        </HomeWrapper>
    )
}

export default Home
