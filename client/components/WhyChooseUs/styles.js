import styled,{css} from 'styled-components';

export const CarouselItem = styled.div`
    width:100%;
    margin:0 10px;
`
export const ArrowContainer = styled.button`
    height:50px;
    width:50px;
    border-radius:50%;
    display:flex;
    margin:auto;
    height: ${({wrapperHeight}) => wrapperHeight+'px'};
        background-color:white;
    svg{
        width: 12px;
        margin:auto;
    }
    @media(max-width: 767px) {
        display:none;
    }
`

export const PaginationContainer = styled.div`
    margin-top:20px;
`;

export const PaginationItem = styled.button`
    transition:all .4s ease-in-out;
    width: ${({active}) => active ? 60 : 15}px;
    height: 15px;
    border-radius: 7.5px;
    background-color: white;
    cursor: default;
    ${({active}) => !active && css`
        cursor: pointer;
        &:hover{
            transform:scale(1.5)
        }
    `}
`;