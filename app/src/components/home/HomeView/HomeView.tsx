import { FC } from 'react'
import styled from 'styled-components'

import { Header } from 'components/common'

const HomeWrapper = styled.div``

const Home: FC = () => {
    return (
        <HomeWrapper>
            <Header title="Dashboard" />
        </HomeWrapper>
    )
}

export default Home
