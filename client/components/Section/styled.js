import  styled,{css} from 'styled-components';
import { colors } from '../../styles/Theme';


export const Container = styled.section`
    background: ${({bg}) => colors[bg] || colors.light};
    ${({gradient}) => gradient && css`
        background: ${({bg}) => colors[bg+'Light'] || colors.light};
        background-image: linear-gradient(180deg, ${({bg}) => colors[bg+'Light']} 0%, ${({bg}) => colors[bg]} 100%);
    `}
`

export const Content = styled.div`
    width: 100%;
    max-width: 1114px;
    padding: 45px 20px;
    box-sizing:border-box;
    margin: 0 auto;
`