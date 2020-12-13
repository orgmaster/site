import styled from 'styled-components';
import {colors, vars} from '../../styles/Theme';


export const Container = styled.div`
    background-color: ${colors.dark};
    color: ${colors.white};
`;

export const Wrapper = styled.div`
    max-width: ${vars.maxWidth}px;
    padding: 0 15px;
    box-sizing: border-box;
    margin: 0 auto;
`;

export const Copyright = styled.div`
    text-align: center;
    box-sizing:border-box;
    font-family:Montserrat;
    padding: 20px 0;
`;

export const Title = styled.h4`
    font-weight: 600;
    font-size:1.6rem;
    line-height: 1.8;
`;

export const Item = styled.div`
    /* max-width: 200px;
    margin:0 auto; */
    margin-bottom: 30px;
    p, a{
        font-size: 1.3rem;
        line-height: 1.2;
    }
`;