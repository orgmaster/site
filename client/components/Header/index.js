import {Container, Header as HeaderStyled, WspLink, Logo} from './styles';
import Link from 'next/link';
import WspIcon from '../../assets/whatsapp.svg';
import LogoSvg from '../../assets/Logo.svg';
import {whatsapp_link} from '../../config';
import MenuButton from '../MenuButton';

export default function Header({toggle, setToggle}) {
    return (
        <HeaderStyled>
            <Container>
                <Link href="/"><Logo><LogoSvg /></Logo></Link>
                <WspLink href={whatsapp_link} target="_blank" title="Contactar a OriginMaster a través de Whatsapp"><WspIcon  /> Whatsapp</WspLink>
                <MenuButton toggle={toggle} onClick={() => setToggle(!toggle)} />
            </Container>
        </HeaderStyled>
    );
}