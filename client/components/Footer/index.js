import {Container, Wrapper, Copyright, Title, Item} from './styles';

export default function Footer({full, className}){
    const year = new Date().getFullYear();
    return (
        <Container>
            <Wrapper>
                {full && (
                    <div className="grid grid-cols-3 pt-8">
                        <div className="col-span-3 sm:col-span-1">
                            <Item>
                                <Title>OriginMaster</Title>
                                <p>Ofrecemos soluciones digitales</p>
                            </Item>
                        </div>
                        <div className="col-span-3 sm:col-span-1">
                            <Item>
                                <Title>Contacto</Title>
                                <p>
                                    <a href="#">+54 1164153258</a>
                                </p>
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
                    <p>Copyright C {year} OriginMaster SRL, Todos los derechos reservados</p>
                </Copyright>
            </Wrapper>
        </Container>
    );
}