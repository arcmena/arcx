import { createGlobalStyle } from 'styled-components'

import ExtraLight from 'assets/fonts/Poppins-ExtraLight.ttf'
import Light from 'assets/fonts/Poppins-Light.ttf'
import Regular from 'assets/fonts/Poppins-Regular.ttf'
import Medium from 'assets/fonts/Poppins-Medium.ttf'
import SemiBold from 'assets/fonts/Poppins-SemiBold.ttf'
import Bold from 'assets/fonts/Poppins-Bold.ttf'

export default createGlobalStyle`
    @font-face {
        font-family: "Poppins";
        src: url(${ExtraLight}) format("truetype");
        font-weight: 200;
    }
    @font-face {
        font-family: "Poppins";
        src: url(${Light}) format("truetype");
        font-weight: 300;
    }
    @font-face {
        font-family: "Poppins";
        src: url(${Regular}) format("truetype");
        font-weight: 400;
    }
    @font-face {
        font-family: "Poppins";
        src: url(${Medium}) format("truetype");
        font-weight: 500;
    }
    @font-face {
        font-family: "Poppins";
        src: url(${SemiBold}) format("truetype");
        font-weight: 600;
    }
    @font-face {
        font-family: "Poppins";
        src: url(${Bold}) format("truetype");
        font-weight: 700;
    }
    :root{
        --navbar-width: 260px;
        --navbar-width-mobile: 98px
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
