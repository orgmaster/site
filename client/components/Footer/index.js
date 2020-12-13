import {Container, Wrapper, Copyright, Title, Item, Banner, SocialIcons, Lema} from './styles';
import {whatsapp_link} from '../../config';

import BannerSvg from '../../assets/Logo.svg';
import FbIcon from '../../assets/facebook.svg';
import InsIcon from '../../assets/instagram.svg';
import LinIcon from '../../assets/linkedin.svg';
import TwIcon from '../../assets/twitter.svg';

export default function Footer({full, className}){
    const year = new Date().getFullYear();
    return (
        <Container>
            <Wrapper>
                {full && (
                    <div className="grid grid-cols-3 pt-8">
                        <div className="col-span-3 sm:col-span-1">
                            <Item className="text-center">
                                <Banner><BannerSvg/></Banner>
                                <Title>OriginMaster</Title>
                                <Lema>Más que una fábrica de software</Lema>
                            </Item>
                        </div>
                        <div className="col-span-3 sm:col-span-1">
                            <Item>
                                <Title>Contacto</Title>
                                <p>
                                    <a href={whatsapp_link} target="_blank" title="Contactar a OriginMaster a través de Whatsapp">+54 1164153258</a>
                                </p>
                                <SocialIcons>
                                    <a title="Facebook de OriginMaster" href="https://www.facebook.com/originmaster.ok" target="_blank"><FbIcon/></a>
                                    <a title="Instagram de OriginMaster" href="https://www.instagram.com/originmaster_ok/" target="_blank"><InsIcon/></a>
                                    <a title="LinkedIn de OriginMaster" href="https://www.linkedin.com/company/originmaster" target="_blank"><LinIcon/></a>
                                    <a title="Twitter de OriginMaster" href="https://twitter.com/originmaster_ok" target="_blank"><TwIcon/></a>
                                </SocialIcons>
                            </Item>
                        </div>
                        <div className="col-span-3 sm:col-span-1">
                            <Item>
                                <Title>Ubicación</Title>
                                <p>Av. Francisco Pioano 3226, Buenos Aires, Argentina.</p>
                            </Item>
                        </div>
                    </div>
                )}
                <Copyright>
                    <p>Copyright &copy; {year} OriginMaster SRL. Todos los derechos reservados.</p>
                </Copyright>
            </Wrapper>
        </Container>
    );
}