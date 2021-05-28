import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root{
        --navbar-width: 260px
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    html {
        font-size: 62.5%;
        font-weight: 400;
        width: 100%;
        height: -webkit-fill-available;
    }
    body {
        font-family: 'Poppins', sans-serif;
        color: ${({ theme: { colors } }) => colors.black[1]};
        background: ${({ theme: { colors } }) => colors.gray[1]};
        ${({ theme: { mixins } }) => mixins.fillContainer};

        font-family: 'Poppins', sans-serif;
    }
    #root {
        ${({ theme: { mixins } }) => mixins.fillContainer};
    }
    a{
        text-decoration: none;
        color: inherit;
    }
`
