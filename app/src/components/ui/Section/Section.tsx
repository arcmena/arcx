import { FC } from 'react'
import styled from 'styled-components'

const SectionWrapper = styled.section`
    border-radius: 1.7rem;
    box-shadow: 0px 0px 148px -26px rgba(0, 1, 5, 0.36);
    background-color: ${({ theme: { colors } }) => colors.white};

    > div {
        ${({ theme: { mixins } }) => mixins.fillContainer}
    }
`

const Section: FC = ({ children }) => {
    return <SectionWrapper>{children}</SectionWrapper>
}

export default Section
