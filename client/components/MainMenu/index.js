import { Wrapper, Container, Menu, Backdrop } from './styles'
import Link from 'next/link';

export default function MainMenu({show, setShow}) {
    return (
        <Wrapper show={show}>
            <Backdrop onClick={() => setShow(false)} />
            <Container show={show}>
                <Menu>
                    <li><Link href="/"><a onClick={() => setShow(false)}>Inicio</a></Link></li>
                    <li><Link href="/#contactar"><a onClick={() => setShow(false)}>Contacto</a></Link></li>
                    <li><Link href="/servicios"><a onClick={() => setShow(false)}>Servicios</a></Link></li>
                    <li><Link href="/trabajos"><a onClick={() => setShow(false)}>Trabajos</a></Link></li>
                </Menu>
            </Container>
        </Wrapper>
    );
}