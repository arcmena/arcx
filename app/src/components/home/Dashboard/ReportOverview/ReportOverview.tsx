import styled, { css } from 'styled-components'

import { AiOutlineUser } from 'react-icons/ai'
import { BiBox } from 'react-icons/bi'
import { FiShoppingBag } from 'react-icons/fi'
import { RiImageLine } from 'react-icons/ri'

const ReportWrapper = styled.div`
    ${({ theme: { mixins } }) => mixins.sectionShadow}

    grid-column: 1 / span 2;
    grid-row: 1 / span 2;

    padding: 2.6rem;

    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    > div {
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            color: ${({ theme: { colors } }) => colors.white};
        }

        div {
            display: flex;
            justify-content: center;
            flex-direction: column;

            h5 {
                color: ${({ theme: { colors } }) => colors.gray[5]};
                font-size: 1.2rem;
                font-weight: 600;
            }

            h3 {
                color: ${({ theme: { colors } }) => colors.black[1]};
                font-size: 1.5rem;
                font-weight: 500;

                line-height: 1.7rem;
            }
        }
    }

    > div:not(:first-child) {
        border-left: 0.1rem solid ${({ theme: { colors } }) => colors.gray[3]};
    }
`

const IconStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.9rem;
    padding: 0.9rem 0.9rem;

    margin-right: 1rem;
`

const UserIcon = styled.div`
    ${IconStyle};
    background-color: ${({ theme: { colors } }) => colors.pink};
`

const OrdersIcon = styled.div`
    ${IconStyle};
    background-color: ${({ theme: { colors } }) => colors.purple};
`

const ItemsIcon = styled.div`
    ${IconStyle};
    background-color: ${({ theme: { colors } }) => colors.orange};
`

const RevenueIcon = styled.div`
    ${IconStyle};
    background-color: ${({ theme: { colors } }) => colors.blue[1]};
`

const ReportOverview = () => {
    return (
        <ReportWrapper>
            <div>
                <UserIcon>
                    <AiOutlineUser size={22} />
                </UserIcon>

                <div>
                    <h5>Users</h5>
                    <h3>44 125</h3>
                </div>
            </div>
            <div>
                <OrdersIcon>
                    <BiBox size={22} />
                </OrdersIcon>
                <div>
                    <h5>Orders</h5>
                    <h3>2 458</h3>
                </div>
            </div>
            <div>
                <ItemsIcon>
                    <RiImageLine size={22} />
                </ItemsIcon>
                <div>
                    <h5>Items</h5>
                    <h3>896</h3>
                </div>
            </div>
            <div>
                <RevenueIcon>
                    <FiShoppingBag size={22} />
                </RevenueIcon>
                <div>
                    <h5>Revenue</h5>
                    <h3>$4 534</h3>
                </div>
            </div>
        </ReportWrapper>
    )
}

export default ReportOverview
