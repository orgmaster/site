import {ArrowContainer, PaginationContainer, PaginationItem} from './styles';

import Section from '../Section';
import Title from '../Title';
import DarkCard from '../DarkCard';
import Carousel,{consts} from 'react-elastic-carousel';
import { useState, useEffect } from 'react';

import ChevronRightSvg from '../../assets/chevron-right.svg';
import ChevronLeftSvg from '../../assets/chevron-left.svg';

export default function WhyChooseUs(){

    const [carouselHeight, setCarouselHeight] = useState();

    useEffect(() => {
        const func = () => {
            const element = document.getElementsByClassName('rec-carousel-wrapper')[0];
            if(element) setCarouselHeight(element.scrollHeight);
        }
        window.addEventListener('load',func);
        
        return () => {
            window.removeEventListener('load',func);
        }
    });

    return (
        <Section bg="red" align="center" gradient>
          <Title h2 align="center" color="white">¿Por qué elegirnos?</Title>
          <Carousel
            renderArrow={CustomArrow}
            renderPagination={CustomPagination}
            itemsToShow={1}
            itemsToScroll={1}
            breakPoints={[
                { width: 500, itemsToShow: 1.1 },
                { width: 600, itemsToShow: 2 },
                { width: 800, itemsToShow: 3 },
                { width: 900, itemsToShow: 3 },
            ]}
            className="flex space-x-4"
            >
                <DarkCard fixedHeight={carouselHeight} title="Calidad" lightLevel={1} className="mx-2 sm:mx-4 shadow-md">
                    <p>
                        <strong>En OriginMaster buscamos la excelencia</strong>, por eso mismo, realizamos pruebas unitarias
                        {" "}para garantizar <strong>el correcto funcionamiento del producto</strong>.
                    </p>
                </DarkCard>
                <DarkCard fixedHeight={carouselHeight} title="Precio" lightLevel={2} className="mx-2 sm:mx-4 shadow-md">
                    <p>
                        <strong>Tenemos un preció muy competitívo</strong> y accesible a cualquier empresa. También contamos con
                        {" "}planes de pago adaptables para pymes y comercios locales.
                    </p>
                </DarkCard>
                <DarkCard fixedHeight={carouselHeight} title="Garantía" lightLevel={3} className="mx-2 sm:mx-4 shadow-md">
                    <p>
                        Nuestro software tiene <strong>garantía de por vida</strong>. Cubriendo cualquier desconformidad en lo acordado.
                    </p>
                </DarkCard>
                <DarkCard fixedHeight={carouselHeight} title="Confianza" lightLevel={4} className="mx-2 sm:mx-4 shadow-md">
                    <p>
                        <strong>La confianza lo es todo, pero SE GANA</strong>. Por eso mismo, en <strong>OriginMaster</strong>
                        {" "}<strong>somos completamente transparentes y responsables</strong> tanto en horas facturadas como en las fecha de entrega.
                    </p>
                </DarkCard>
                <DarkCard fixedHeight={carouselHeight} title="Ágil" lightLevel={4} className="mx-2 sm:mx-4 shadow-md">
                    <p>
                        Utilizamos <strong>metodologías ágiles</strong>, permitiendo acelerar el tiempo y organizar los proyectos.
                    </p>
                </DarkCard>
                <DarkCard fixedHeight={carouselHeight} title="Demos semanales" lightLevel={3} className="mx-2 sm:mx-4 shadow-md">
                    <p>
                        Dependiendo la magnitud y complegidad del sistema a desarrollar, <strong>ofrecemos demostraciones cada 7 o 15 días</strong> para
                        {" "}que usted pueda ver y evaluar los avances.
                    </p>
                </DarkCard>
                <DarkCard fixedHeight={carouselHeight} title="Servidor de pruebas" lightLevel={2} className="mx-2 sm:mx-4 shadow-md">
                    <p>
                        cuando el sistema ya es interactivo, el equipo de <strong>OriginMaster</strong> le brindará acceso a un servidor de
                        {" "}pruebas, <strong>para que usted pueda experimentar con el sistema antes de salir a producción</strong>.
                    </p>
                </DarkCard>
            </Carousel>
        </Section>
    );
}


function CustomArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? (<ChevronLeftSvg />) : (<ChevronRightSvg />);
    return (
        <ArrowContainer toPrev={type === consts.PREV} onClick={onClick} disabled={isEdge}>
            {pointer}
        </ArrowContainer>
    )
}

function CustomPagination({ pages, activePage, onClick }){

    return (
        <PaginationContainer className="flex space-x-4">
            {pages.map(page => {
                const isActivePage = activePage === page
                return (
                    <PaginationItem
                        active={isActivePage}
                        key={page}
                        onClick={() => onClick(page)}
                    />
                )
            })}
        </PaginationContainer>
    );
}
