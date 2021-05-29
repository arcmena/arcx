import { FC } from 'react'
import styled from 'styled-components'

import { Header } from 'components/common'

const CustomersWrapper = styled.div``

const CustomersView: FC = () => {
    return (
        <CustomersWrapper>
            <Header title="Customers" />
        </CustomersWrapper>
    )
}

export default CustomersView
