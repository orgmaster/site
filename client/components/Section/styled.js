import  styled,{css} from 'styled-components';
import { colors } from '../../styles/Theme';


export const Container = styled.section`
    ${({gradient}) => {
        if(gradient){
            return css`
            background: ${({bg}) => colors[bg+'Light'] || colors.light};
            background: linear-gradient(180deg, ${({bg}) => colors[bg+'Light']} 0%, ${({bg}) => colors[bg]} 100%);
        `};
        return css`
            background: ${({bg}) => colors[bg] || colors.light};
        `
    }}
`

export const Content = styled.div`
    width: 100%;
    max-width: 1114px;
    padding: 20px;
    box-sizing:border-box;
    margin: 0 auto;
`