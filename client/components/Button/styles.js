import styled,{css} from 'styled-components';
import {colors} from '../../styles/Theme';

const Base = styled.button`
    font-family: 'Montserrat';
    box-sizing: border-box;
    border-radius: 5px;
    padding: 20px 40px;
    transition: opacity .3s ease-in-out;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: normal;
    &:hover{
        opacity: .7;
        cursor: pointer;
    }
    border: 1px solid ${({color}) => colors[color] || colors.red};
    /* @media(max-width: 1023px){
        width:100%;
    } */
`

export const Fill = styled(Base)`
    background-color: ${({color}) => colors[color] || colors.red};
    ${({color}) => {
        if(['white','light'].includes(color)) {
            return css`
                color: ${colors.dark};
            `;
        }
        return css`
            color: ${colors.white}
        `
    }}
`

export const Outline = styled(Base)`
    color:${({color}) => colors[color] || colors.red};
    background-color: transparent;
`