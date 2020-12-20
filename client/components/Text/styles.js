import styled from "styled-components";
import { Text } from '../TitleAndText/styles';

export const Container = styled(Text)`
    text-align: ${({align}) => align ? align : 'left'};
    p{
        margin-bottom: 15px;
    }
`;