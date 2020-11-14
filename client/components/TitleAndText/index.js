import { Container, Title, Text } from './styles';

export default function TitleAndText({align, titleColor, title, children}) {
    return (
        <Container align={align}>
            <Title titleColor={titleColor}>
                {title}
            </Title>
            <Text>
                {children}
            </Text>
        </Container>
    )
}