import { Container, Title, Text } from './styles';

export default function TitleAndText({align, titleColor, title, children, textColor}) {
    return (
        <Container align={align}>
            <Title titleColor={titleColor}>
                {title}
            </Title>
            <Text textColor={textColor}>
                {children}
            </Text>
        </Container>
    )
}