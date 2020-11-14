import styled from 'styled-components';
import { colors } from '../../styles/Theme';

export const Container = styled.div`
    text-align: ${({align}) => align};
    font-family: "Montserrat";
`

export const Title = styled.h2`
    color: ${({titleColor}) => colors[titleColor] || colors.dark};
    font-weight: 600;
    font-size:40px;
    line-height:1.83;
    text-transform: capitalize;
`

export const Text = styled.div`
    color: ${colors.dark};
    font-size: 24px;
    font-weight: normal;
    line-height: 1.5;
`