import { FC } from 'react'
import styled from 'styled-components'

import { Header } from 'components/common'

import { Dashboard } from '../Dashboard'

const HomeWrapper = styled.div`
    max-width: 1130px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
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
