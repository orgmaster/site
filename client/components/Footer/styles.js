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
    @media(max-width: 767px) {
        text-align:center;
    }
    a{
        transition: all .4s ease-in-out;
        &:hover{
            text-shadow: 0 0 5px white;
        }
    }
`;

export const Lema = styled.p`
    font-size: .9rem !important;
`;

export const Banner = styled.div`
    svg{
        margin:0 auto;
        width:64px;
        height:64px;
        box-shadow: 0 0 10px ${colors.red};
    }
`

export const SocialIcons = styled.div`
    width:165px;
    display: flex;
    margin-top: 14px;
    justify-content:space-between;
    @media(max-width: 767px) {
        margin-left:auto;
        margin-right:auto;
    }
    a {
        width: 30px;
        svg{
            box-shadow: 0 0 5px #000;
            transition: all .4s ease-in-out;
            background-color: white;
            &:hover{
                box-shadow: 0 0 5px #fff;
                fill:white;
                background-color:${colors.red};
            }
        }
    }
`;

export const List = styled.ul`

li {
    a{
        ::before{
            content: "· "
        }
        box-sizing:border-box;
        padding: 10px;
        display:block;
        &:hover{
            font-weight:500;
        }
    }
}
`;