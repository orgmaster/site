import styled, {css} from 'styled-components';
import {colors} from '../../styles/Theme';

export const Line = styled.div`
    width: 100%;
    height: 3px;
    border-radius:3px;
    background-color: ${colors.white};
    display:block;
    margin-bottom: 6px;
    transition: .3s all ease-out;
    position: absolute;
    &:first-child{
        top:5px;
        right:0;
        width: 95%;
    }
    &:nth-child(2) {
        top: calc(50% + -1.5px);
    }
    &:last-child{
        margin-bottom: 0;
        bottom: 5px;
        width: 75%;
        right:0;
    }
`;

export const Container = styled.div`
    height:30px;
    width: 30px;
    position:relative;
    &:hover{
        cursor: pointer;
        div{
            box-shadow: 0 0 3px ${colors.white};
            &:last-child, &:first-child {
                width: 100%;
            }
        }
    }
    ${({toggle}) => toggle && css`
        z-index: 999;
        div{
            &:first-child{
                top:14px;
                transform: rotate(.125turn);
                width: 100%;
            }
            &:nth-child(2) {
                opacity:0;
            }
            &:last-child{
                transform: rotate(-.125turn);
                bottom:14px;
                width: 100%;
            }
        }
    `}
`;