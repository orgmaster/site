import { createGlobalStyle } from 'styled-components';

import { colors, device } from './Theme'

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "Montserrat";
    font-weight: 100;
    font-display: auto;
    src: url("/fonts/Montserrat/Montserrat-Thin.ttf") format("truetype");
}
@font-face {
    font-family: "Montserrat";
    font-weight: 300;
    font-display: auto;
    src: url("/fonts/Montserrat/Montserrat-Light.ttf") format("truetype");
}

@font-face {
    font-family: "Montserrat";
    font-weight: 400;
    font-display: auto;
    src: url("/fonts/Montserrat/Montserrat-Regular.ttf") format("truetype");
}

@font-face {
    font-family: "Montserrat";
    font-weight: 500;
    font-display: auto;
    src: url("/fonts/Montserrat/Montserrat-Medium.ttf") format("truetype");
}
@font-face {
    font-family: "Montserrat";
    font-weight: 700;
    font-display: auto;
    src: url("/fonts/Montserrat/Montserrat-Bold.ttf") format("truetype");
}
@font-face {
    font-family: "Montserrat";
    font-weight: 900;
    font-display: auto;
    src: url("/fonts/Montserrat/Montserrat-Black.ttf") format("truetype");
}

html {
    width: 100%;
    height: 100%; 
}

body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 300;
    color: ${colors.dark};
}

strong, 
.--strong {
    font-weight: 500;
}

sup {
    vertical-align: super;
    font-size: 8px;
}


.mb-10{ margin-bottom:10px;}
.mb-15{ margin-bottom:15px;}
.mb-20{ margin-bottom:20px;}
.mb-30{ margin-bottom:30px;}

`