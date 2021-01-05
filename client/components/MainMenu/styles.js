import styled,{css} from 'styled-components';
import { colors } from '../../styles/Theme'

export const Wrapper = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top:0;
    display:relative;
    ${({show}) => !show && css`
        z-index: -1;
    `}
`;

export const Container = styled.div`
    background-color: ${colors.dark};
    position: absolute;
    width: 500px;
    height: 100vh;
    right: -500px;
    transition: all .4s ease-in-out;
    ${({show}) => show && css`
        transform: translateX(-500px);
    `}

    ${({show}) => !show && css`
        transform: translateX(500px);
    `}
    box-shadow: 0 0 15px #000;
    padding-top: 100px;
    padding-left: 15px;
    overflow-y: auto;
    @media(max-width: 767px){
        width: 100%;
    }
`;

export const Menu = styled.ul`
    li {
        a{
            display:block;
            transition: all .4s ease-in-out;
            font-size: 2rem;
            color: ${colors.white};
            box-sizing: border-box;
            padding: 15px;
            font-weight: 600;
            &:hover {
                color: ${colors.red};
            }
        }
    }
`;

export const Backdrop = styled.div`
    background-color: rgba(0,0,0, .5);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`;