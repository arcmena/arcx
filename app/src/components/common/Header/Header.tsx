import { FC } from 'react'
import styled from 'styled-components'

import { formatDate } from 'utils/formatters'

const HeaderWrapper = styled.div`
    user-select: none;

    h1 {
        color: ${({ theme: { colors } }) => colors.black[1]};
        font-size: 3rem;
        font-weight: 600;
    }

    span {
        color: ${({ theme: { colors } }) => colors.gray[5]};
        font-size: 1.2rem;
        font-weight: 700;
    }
`

interface props {
    title: string
}

const Header: FC<props> = ({ title }) => {
    const dateNow = new Date()

    return (
        <HeaderWrapper>
            <div>
                <h1>{title}</h1>
                <span>{formatDate(dateNow, 'eeee, dd MMMM yyyy')}</span>
            </div>
        </HeaderWrapper>
    )
}

export default Header
