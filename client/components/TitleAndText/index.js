import { Container, Title, Text } from './styles';

export default function TitleAndText({align, titleColor, title, children, textColor}) {
    return (
        <Container align={align}>
            <Title titleColor={titleColor}>
                {title}
            </Title>
            <Text align={align} textColor={textColor}>
                {children}
            </Text>
        </Container>
    )
}