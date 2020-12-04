import styled from 'styled-components';
import { colors } from '../../styles/Theme';

export const Container = styled.div`
    text-align: ${({align}) => align};
    font-family: "Montserrat";
`

export const Title = styled.h2`
    color: ${({titleColor}) => colors[titleColor] || colors.dark};
    font-weight: 600;
    font-size:2.3rem;
    line-height:1.4;
    text-transform: uppercase;
    margin-bottom: 20px;
`

export const Text = styled.div`
    color: ${({textColor}) => colors[textColor] || colors.dark};
    font-size: 24px;
    font-weight: normal;
    line-height: 1.5;
`