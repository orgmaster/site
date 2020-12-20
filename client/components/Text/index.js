import { Container } from './styles';

export default function Text({align, children}) {
    return <Container align={align}>
        {children}
    </Container>
}