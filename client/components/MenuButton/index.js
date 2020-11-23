import {Line, Container} from './styles';

export default function MenuButton({toggle, onClick}){
    return (
        <Container toggle={toggle} onClick={onClick}>
            <Line />
            <Line />
            <Line />
        </Container>
    );
}