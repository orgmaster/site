import {Container, Header as HeaderStyled, WspLink, Logo} from './styles';
import Link from 'next/link';
import WspIcon from '../../assets/whatsapp.svg';
import LogoSvg from '../../assets/Logo.svg';
import {whatsapp_link} from '../../config';
import MenuButton from '../MenuButton';
import { useState } from 'react';

export default function Header() {
    const [toggle,setToggle] = useState(false);
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