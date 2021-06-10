import { FC } from 'react'
import styled from 'styled-components'

import { RiCalendarTodoLine } from 'react-icons/ri'
import { IoChevronDownOutline } from 'react-icons/io5'

import { formatDate } from 'utils/formatters'

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;

    user-select: none;

    > div {
        h1 {
            color: ${({ theme: { colors } }) => colors.black[1]};
            font-size: 3rem;
            font-weight: 600;
        }

        span {
            color: ${({ theme: { colors } }) => colors.gray[5]};
            font-size: 1.2rem;
            font-weight: 600;
        }
    }
`

const DateSelect = styled.div`
    display: flex;
    align-self: center;
    align-items: center;

    cursor: pointer;
    border-radius: 1.7rem;

    padding: 1rem 2rem;

    background-color: ${({ theme: { colors } }) => colors.gray[2]};

    h2 {
        font-weight: 600;
        font-size: 1.4rem;
        margin: 0 2rem 0 1rem;
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

            <DateSelect>
                <RiCalendarTodoLine size={22} />
                <h2>May - Nov 2021</h2>
                <IoChevronDownOutline size={15} />
            </DateSelect>
        </HeaderWrapper>
    )
}

export default Header
