import Section from "../components/Section";
import Input from '../components/Input';
import Footer from '../components/Footer';
import Title from '../components/Title';
import TitleAndText from '../components/TitleAndText';
import Button from '../components/Button';
import MobileSvg from '../assets/undraw_Mobile_app_p3ts.svg';
import WebDevSvg from '../assets/web_develop.svg';
import ParkSvg from '../assets/undraw_environmental_study_skau.svg';
import WhyChooseUs from '../components/WhyChooseUs';
import BlockInfo from '../components/BlockInfo';
export default function Home({}) {
  return (
    <>
      <Section bg="white">
            <Title>Servicios digitales para empresas, Pymes y pequeños comercios</Title>
      </Section>


      <Section>
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-6 p-8 rounded-lg lg:order-last">
            <MobileSvg className="w-full h-full my-auto" />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <TitleAndText title="Desarrollo mobile para IOS y Android" titleColor="red" align="right">
              <p>
                Contamos con un equipo especializado en la construcción de software. <strong>Su único fin es construir ideas y soluciones
                {" "}para abastecer las necesidades de nuestro clientes</strong>.
              </p>
              <p>
                Pero, también entendemos que muchas veces hay que continuar un trabajo abandonado o a completar, y no tenemos ningun problema en hacerlo.
              </p>
            </TitleAndText>
          </div>
        </div>
      </Section>

      <Section bg="white">
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-6 p-8 rounded-lg">
            <WebDevSvg className="w-full h-full my-auto" />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <TitleAndText title="Desarrollo de sitios web responsivos, SPA y PWA" titleColor="red" align="left">
              <p>
                En <strong>OriginMaster</strong> sabemos que <strong>la digitalización comercial es muy importante</strong> y, la prueba mas evidente,
                es  la situación de emergencia actual (COVID-19). Muchos <strong>comercios y empresas NO digitalizadas luchan contra un terrible baja de ingresos</strong>
                {" "}debido a la poca o nula presencia digital.
              </p>
              <p>
                <strong>Si usted o su empresa está pasando por está situción debe contactenos lo antes posible</strong> y de ese modo, podremos brindarle
                la solución que mayor se adapte a sus necesidades y, por su puesto, su bolsillo.
              </p>
            </TitleAndText>
          </div>
        </div>
      </Section>


      <Section>
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-6 p-8 rounded-lg lg:order-last">
            <MobileSvg className="w-full h-full my-auto" />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <TitleAndText title="Desarrollo de sistemas, crm y aplicaciones multiplataformas (Window, Mac y Linux)" titleColor="red" align="right">
              <p>
                Contamos con un equipo especializado en la construcción de software. <strong>Su único fin es construir ideas y soluciones
                {" "}para abastecer las necesidades de nuestro clientes</strong>.
              </p>
              <p>
                Pero, también entendemos que muchas veces hay que continuar un trabajo abandonado o a completar, y no tenemos ningun problema en hacerlo.
              </p>
            </TitleAndText>
          </div>
        </div>
      </Section>

      <Section bg="white">
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-6 p-8 rounded-lg">
            <WebDevSvg className="w-full h-full my-auto" />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <TitleAndText title="SEO, para mejorar tu posicionamiento en google, bing y otros" titleColor="red" align="left">
              <p>
                En <strong>OriginMaster</strong> sabemos que <strong>la digitalización comercial es muy importante</strong> y, la prueba mas evidente,
                es  la situación de emergencia actual (COVID-19). Muchos <strong>comercios y empresas NO digitalizadas luchan contra un terrible baja de ingresos</strong>
                {" "}debido a la poca o nula presencia digital.
              </p>
              <p>
                <strong>Si usted o su empresa está pasando por está situción debe contactenos lo antes posible</strong> y de ese modo, podremos brindarle
                la solución que mayor se adapte a sus necesidades y, por su puesto, su bolsillo.
              </p>
            </TitleAndText>
          </div>
        </div>
      </Section>

      <Footer full/>
    </>
  );
}
