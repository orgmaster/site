import styled,{css} from 'styled-components';
import { colors } from '../../styles/Theme';

const Default = css`
    font-weight: 700;
    text-transform: uppercase;
    color: ${({color}) => colors[color] || colors.dark};
    line-height: 1.5;
    text-align: ${({align}) => align ? align : 'left'};
`

export const H1 = styled.h1`
    font-size: 40px;
    ${Default}
`

export const H2 = styled.h2`
    font-size: 30px;
    margin-bottom: 15px;
    ${Default}
`