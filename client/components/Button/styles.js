import styled,{css} from 'styled-components';
import {colors} from '../../styles/Theme';

const stylesBase = css`
    font-family: 'Montserrat';
    box-sizing: border-box;
    border-radius: 5px;
    padding: 20px 40px;
    transition: all .4s ease-in-out;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: normal;
    display:inline-block;
    text-align:center;
    &:hover{
        opacity: .7;
        cursor: pointer;
    }
    border: 1px solid ${({color}) => colors[color] || colors.red};
    /* @media(max-width: 1023px){
        width:100%;
    } */
`;


const stylesFill = css`
    background-color: ${({color}) => colors[color] || colors.red};
    ${({color}) => {
        if(['white','light'].includes(color)) {
            return css`
                color: ${colors.dark} !important;
            `;
        }
        return css`
            color: ${colors.white} !important;
        `
    }}
`;

const stylesOutline = css`
    color:${({color}) => colors[color] || colors.red};
    background-color: transparent;
`;

const BaseButton = styled.button`
    ${stylesBase}
`;

const BaseLink = styled.a`
    ${stylesBase}
    text-decoration:none !important;
`;

export const Fill = styled(BaseButton)`
    ${stylesFill}
`;

export const Outline = styled(BaseButton)`
    ${stylesOutline}
`;

export const FillLink = styled(BaseLink)`
    ${stylesFill}
`;

export const OutlineLink = styled(BaseLink)`
    ${stylesOutline}
`;