import styled from 'styled-components';

const colors = {
    1: '#222222',
    2: '#333333',
    3: '#444444',
    4: '#555555',
    base: '#000000'
}

export const Card = styled.div`
    width: 100%;
    box-sizing:border-box;
    padding: 30px;
    margin-top:15px;
    border-radius: 10px;
    color: #fff;
    text-align:center;
    background-color: ${colors.base};
    background-image: linear-gradient(180deg, ${colors.base} 0%, ${({lightLevel}) => colors[lightLevel]} 100%);
    line-height:1.83;
`;

export const Title = styled.h3`
    font-weight: 700;
    font-size: 20px;
    line-height: 2;
`