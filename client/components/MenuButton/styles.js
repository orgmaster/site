import styled, {css} from 'styled-components';
import {colors} from '../../styles/Theme';

export const Line = styled.div`
    width: 100%;
    height: 2px;
    border-radius:1px;
    background-color: ${colors.white};
    display:block;
    margin-bottom: 6px;
    transition: .3s all ease-out;
    position: absolute;
    &:first-child{
        top:5px;
    }
    &:nth-child(2) {
        top: calc(50% + -1px);
    }
    &:last-child{
        margin-bottom: 0;
        bottom: 5px;
    }
`;

export const Container = styled.div`
    height:30px;
    width: 30px;
    position:relative;
    &:hover{
        cursor: pointer;
        
    }
    ${({toggle}) => toggle && css`
        z-index: 999;
        div{
            &:first-child{
                top:14px;
                transform: rotate(.125turn);
            }
            &:nth-child(2) {
                opacity:0;
            }
            &:last-child{
                transform: rotate(-.125turn);
                bottom:14px;
            }
        }
    `}
`;