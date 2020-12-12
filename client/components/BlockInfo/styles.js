import styled from 'styled-components';
import {colors} from '../../styles/Theme';

export const Container = styled.div`
    color: ${({color}) => colors[color] || colors.dark};
    max-width:450px;
    margin:0 auto;
    margin-bottom: 30px;
    h3{
        font-weight: 600;
        font-size:1.5rem;
        line-height:1.4;
    }
    p{
        font-weight: normal;
        font-size:1.2rem;
        line-height:1.4;
    }
`;