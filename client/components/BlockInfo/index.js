import { Container } from './styles';

export default function({title, color, children}){
    return <Container color={color}>
        <h3>{title}</h3>
        {children}
    </Container>
}