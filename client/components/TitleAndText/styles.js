import styled, {css} from 'styled-components';
import { colors } from '../../styles/Theme';

export const Container = styled.div`
    text-align: ${({align}) => align};
    font-family: "Montserrat";
    max-width: 500px;
    margin: 0 auto;
    @media(max-width: 1023px){
        max-width:95%;
        text-align:left;
    }
`

export const Title = styled.h2`
    color: ${({titleColor}) => colors[titleColor] || colors.dark};
    font-weight: 600;
    font-size:1.5rem;
    line-height:1.4;
    text-transform: uppercase;
    margin-bottom: 20px;
`

export const Text = styled.div`
    color: ${({textColor}) => colors[textColor] || colors.dark};
    font-size: 1.1rem;
    font-weight: normal;
    line-height: 1.5;
    p{
        margin-bottom: 15px;
    }
`