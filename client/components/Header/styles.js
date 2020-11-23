import styled from 'styled-components';
import {colors} from '../../styles/Theme';

export const Logo = styled.a`
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    background-color: ${colors.white};
    border-radius: 50%;
    svg {
        width:100%;
        height: 100%;
    }
`

export const Header = styled.header`
    background-color: ${colors.bgHeader};
    color: #fff;
    height: 100px;
    width:100%;
    position:sticky;
    top:0;
    z-index:1;
`

export const Container = styled.div`
    max-width: 1114px;
    height:100%;
    margin:0 auto;
    padding:0 20px;
    box-sizing:border-box;
    display: flex;
    justify-content:space-between;
    align-items:center;
`

export const WspLink = styled.a`
    display: flex;
    align-items:center;
    box-sizing:border-box;
    padding:10px;
    font-weight: 500;
    text-transform:uppercase;
    transition: .3s all ease-out;
    svg{
        margin-right: 10px;
        fill:${colors.white};
        border-radius: 50%;
        transition: .3s all ease-in;
    }
    &:hover{
        text-shadow: 0 0 3px #fff;
        svg{
            box-shadow: 0 0 3px #fff;
        }
    }
`